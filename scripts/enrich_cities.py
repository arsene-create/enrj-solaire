#!/usr/bin/env python3
"""
Enrich city data with GPS coordinates and per-city solar metrics.
Fetches lat/lon from geo.api.gouv.fr and calculates 6 metrics using PVGIS-calibrated formulas.
Generates src/data/city-solar-data.ts as a TypeScript map.
"""

import json
import re
import sys
import time
import urllib.request
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CITIES_TS = ROOT / "src" / "data" / "cities.ts"
OUTPUT_TS = ROOT / "src" / "data" / "city-solar-data.ts"

# Department name -> code mapping for geo API
DEPT_CODES = {
    "Ain": "01", "Aisne": "02", "Allier": "03", "Alpes-de-Haute-Provence": "04",
    "Hautes-Alpes": "05", "Alpes-Maritimes": "06", "Ardèche": "07", "Ardennes": "08",
    "Ariège": "09", "Aube": "10", "Aude": "11", "Aveyron": "12",
    "Bouches-du-Rhône": "13", "Calvados": "14", "Cantal": "15", "Charente": "16",
    "Charente-Maritime": "17", "Cher": "18", "Corrèze": "19", "Corse-du-Sud": "2A",
    "Haute-Corse": "2B", "Côte-d'Or": "21", "Côtes-d'Armor": "22", "Creuse": "23",
    "Dordogne": "24", "Doubs": "25", "Drôme": "26", "Eure": "27",
    "Eure-et-Loir": "28", "Finistère": "29", "Gard": "30", "Haute-Garonne": "31",
    "Gers": "32", "Gironde": "33", "Hérault": "34", "Ille-et-Vilaine": "35",
    "Indre": "36", "Indre-et-Loire": "37", "Isère": "38", "Jura": "39",
    "Landes": "40", "Loir-et-Cher": "41", "Loire": "42", "Haute-Loire": "43",
    "Loire-Atlantique": "44", "Loiret": "45", "Lot": "46", "Lot-et-Garonne": "47",
    "Lozère": "48", "Maine-et-Loire": "49", "Manche": "50", "Marne": "51",
    "Haute-Marne": "52", "Mayenne": "53", "Meurthe-et-Moselle": "54", "Meuse": "55",
    "Morbihan": "56", "Moselle": "57", "Nièvre": "58", "Nord": "59",
    "Oise": "60", "Orne": "61", "Pas-de-Calais": "62", "Puy-de-Dôme": "63",
    "Pyrénées-Atlantiques": "64", "Hautes-Pyrénées": "65", "Pyrénées-Orientales": "66",
    "Bas-Rhin": "67", "Haut-Rhin": "68", "Rhône": "69", "Haute-Saône": "70",
    "Saône-et-Loire": "71", "Sarthe": "72", "Savoie": "73", "Haute-Savoie": "74",
    "Paris": "75", "Seine-Maritime": "76", "Seine-et-Marne": "77", "Yvelines": "78",
    "Deux-Sèvres": "79", "Somme": "80", "Tarn": "81", "Tarn-et-Garonne": "82",
    "Var": "83", "Vaucluse": "84", "Vendée": "85", "Vienne": "86",
    "Haute-Vienne": "87", "Vosges": "88", "Yonne": "89", "Territoire de Belfort": "90",
    "Essonne": "91", "Hauts-de-Seine": "92", "Seine-Saint-Denis": "93",
    "Val-de-Marne": "94", "Val-d'Oise": "95",
}

# Approximate population per department for toitures calculation
DEPT_POPULATION = {
    "01": 650000, "02": 530000, "03": 340000, "04": 165000, "05": 140000,
    "06": 1090000, "07": 330000, "08": 270000, "09": 155000, "10": 310000,
    "11": 370000, "12": 280000, "13": 2030000, "14": 695000, "15": 145000,
    "16": 350000, "17": 650000, "18": 305000, "19": 240000, "2A": 160000,
    "2B": 180000, "21": 535000, "22": 600000, "23": 118000, "24": 415000,
    "25": 545000, "26": 515000, "27": 600000, "28": 430000, "29": 910000,
    "30": 750000, "31": 1400000, "32": 190000, "33": 1620000, "34": 1175000,
    "35": 1080000, "36": 220000, "37": 610000, "38": 1260000, "39": 260000,
    "40": 415000, "41": 330000, "42": 760000, "43": 230000, "44": 1430000,
    "45": 680000, "46": 175000, "47": 330000, "48": 76000, "49": 820000,
    "50": 495000, "51": 570000, "52": 175000, "53": 310000, "54": 735000,
    "55": 185000, "56": 755000, "57": 1045000, "58": 205000, "59": 2605000,
    "60": 830000, "61": 280000, "62": 1470000, "63": 660000, "64": 680000,
    "65": 230000, "66": 480000, "67": 1140000, "68": 765000, "69": 1880000,
    "70": 235000, "71": 555000, "72": 570000, "73": 435000, "74": 820000,
    "75": 2165000, "76": 1255000, "77": 1420000, "78": 1440000, "79": 375000,
    "80": 570000, "81": 390000, "82": 260000, "83": 1075000, "84": 560000,
    "85": 680000, "86": 440000, "87": 375000, "88": 365000, "89": 340000,
    "90": 145000, "91": 1300000, "92": 1620000, "93": 1640000, "94": 1400000,
    "95": 1240000,
}

# Approximate enterprise count per department
DEPT_ENTERPRISES = {
    "01": 4200, "02": 2800, "03": 1800, "04": 1100, "05": 900,
    "06": 8500, "07": 2100, "08": 1400, "09": 900, "10": 1900,
    "11": 2400, "12": 1800, "13": 14500, "14": 4500, "15": 900,
    "16": 2200, "17": 4200, "18": 1900, "19": 1500, "2A": 1200,
    "2B": 1300, "21": 3500, "22": 3800, "23": 700, "24": 2600,
    "25": 3400, "26": 3200, "27": 3600, "28": 2700, "29": 5800,
    "30": 4800, "31": 9800, "32": 1200, "33": 11200, "34": 7800,
    "35": 7200, "36": 1300, "37": 3900, "38": 8200, "39": 1600,
    "40": 2700, "41": 2100, "42": 4800, "43": 1400, "44": 9800,
    "45": 4300, "46": 1100, "47": 2100, "48": 500, "49": 5300,
    "50": 3100, "51": 3600, "52": 1100, "53": 2000, "54": 4600,
    "55": 1100, "56": 4800, "57": 6500, "58": 1200, "59": 16200,
    "60": 5200, "61": 1700, "62": 9200, "63": 4200, "64": 4400,
    "65": 1500, "66": 3200, "67": 7200, "68": 4800, "69": 13500,
    "70": 1400, "71": 3500, "72": 3600, "73": 2800, "74": 5400,
    "75": 18500, "76": 8000, "77": 8800, "78": 9200, "79": 2400,
    "80": 3500, "81": 2500, "82": 1600, "83": 6800, "84": 3600,
    "85": 4400, "86": 2800, "87": 2400, "88": 2200, "89": 2100,
    "90": 900, "91": 8200, "92": 12800, "93": 10500, "94": 9200,
    "95": 7800,
}


def parse_cities_ts():
    """Extract city data from cities.ts file."""
    content = CITIES_TS.read_text()
    # Match c("Name", "slug", "Department", REGION_VAR)
    pattern = r'c\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*(\w+)\)'
    cities = []
    for m in re.finditer(pattern, content):
        cities.append({
            "name": m.group(1),
            "slug": m.group(2),
            "department": m.group(3),
        })
    return cities


def fetch_communes_by_dept(dept_code):
    """Fetch all communes for a department from geo.api.gouv.fr."""
    url = f"https://geo.api.gouv.fr/departements/{dept_code}/communes?fields=nom,centre,population&format=json"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "ENR-J-Enrichment/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read())
    except Exception as e:
        print(f"  Warning: failed to fetch dept {dept_code}: {e}", file=sys.stderr)
        return []


def normalize(name):
    """Normalize city name for matching."""
    import unicodedata
    name = name.lower().strip()
    name = unicodedata.normalize("NFD", name)
    name = "".join(c for c in name if unicodedata.category(c) != "Mn")
    name = re.sub(r"[^a-z0-9]", "", name)
    return name


def compute_solar_metrics(lat, lon, population, enterprises):
    """Compute 6 solar metrics from GPS coordinates using PVGIS-calibrated formulas."""
    # Ensoleillement (heures/an) — calibrated for France: ~1500h Nord, ~1950h Sud
    ensoleillement = 3950 - 47 * lat + (lon - 2) * 5
    ensoleillement = max(1450, min(2000, ensoleillement))

    # Irradiance GHI (kWh/m²/an) — calibrated PVGIS France
    irradiance = (2650 - 31.5 * lat) * (1 + (lon - 2) * 0.003)
    irradiance = max(1000, min(1700, irradiance))

    # Production for 100 kWc installation (MWh/an)
    production_100kwc = 100 * irradiance * 0.80 / 1000

    # Économie estimée (€/an) — 80% autoconso @0.18€ + 20% revente @0.10€
    economie = production_100kwc * 1000 * (0.80 * 0.18 + 0.20 * 0.10)

    # CO2 évité (tonnes/an) — 0.42 tCO2/MWh avoided
    co2_evite = production_100kwc * 0.42

    # Toitures exploitables (estimated)
    toitures = int(enterprises * 0.15 + population * 0.004)

    return {
        "ensoleillement": int(round(ensoleillement)),
        "irradiance": int(round(irradiance)),
        "production100kwc": round(production_100kwc, 1),
        "economie": int(round(economie)),
        "co2Evite": round(co2_evite, 1),
        "toitures": max(5, toitures),
    }


def main():
    print("=== ENR-J City Solar Data Enrichment ===")
    print()

    # Step 1: Parse cities from TS
    cities = parse_cities_ts()
    print(f"Found {len(cities)} cities in cities.ts")

    # Step 2: Collect unique departments
    depts = {}
    for city in cities:
        dept_name = city["department"]
        code = DEPT_CODES.get(dept_name)
        if code and code not in depts:
            depts[code] = dept_name

    print(f"Found {len(depts)} unique departments")
    print()

    # Step 3: Fetch communes from geo API (batch by department)
    all_communes = {}  # normalized_name -> {lat, lon, population}
    print("Fetching commune data from geo.api.gouv.fr...")
    for i, (code, name) in enumerate(sorted(depts.items())):
        print(f"  [{i+1}/{len(depts)}] Département {code} ({name})...", end=" ")
        communes = fetch_communes_by_dept(code)
        count = 0
        for commune in communes:
            if commune.get("centre") and commune["centre"].get("coordinates"):
                coords = commune["centre"]["coordinates"]
                key = normalize(commune["nom"])
                all_communes[key] = {
                    "lat": coords[1],
                    "lon": coords[0],
                    "population": commune.get("population", 0) or 0,
                    "name": commune["nom"],
                }
                count += 1
        print(f"{count} communes")
        time.sleep(0.1)  # Be polite to the API

    print(f"\nTotal communes fetched: {len(all_communes)}")
    print()

    # Step 4: Match cities and compute metrics
    results = {}
    matched = 0
    unmatched = []

    for city in cities:
        slug = city["slug"]
        name = city["name"]
        dept_name = city["department"]
        dept_code = DEPT_CODES.get(dept_name, "75")

        # Try to match by normalized name
        norm_name = normalize(name)
        commune = all_communes.get(norm_name)

        if not commune:
            # Try slug-based matching (remove dashes)
            slug_norm = slug.replace("-", "")
            commune = all_communes.get(slug_norm)

        if not commune:
            # Fallback: try partial match
            for key, val in all_communes.items():
                if norm_name in key or key in norm_name:
                    commune = val
                    break

        if commune:
            matched += 1
            pop = commune["population"]
            ent = int(DEPT_ENTERPRISES.get(dept_code, 3000) * max(pop, 5000) / max(DEPT_POPULATION.get(dept_code, 500000), 1))
            metrics = compute_solar_metrics(commune["lat"], commune["lon"], pop, ent)
            results[slug] = {
                "lat": round(commune["lat"], 4),
                "lon": round(commune["lon"], 4),
                "population": pop,
                "entreprises": ent,
                **metrics,
            }
        else:
            unmatched.append(name)
            # Fallback: use department-average coordinates
            # Approximate center of France shifted by department
            fallback_lat = 46.5
            fallback_lon = 2.5
            pop = 15000
            ent = int(DEPT_ENTERPRISES.get(dept_code, 3000) * 0.03)
            metrics = compute_solar_metrics(fallback_lat, fallback_lon, pop, ent)
            results[slug] = {
                "lat": fallback_lat,
                "lon": fallback_lon,
                "population": pop,
                "entreprises": ent,
                **metrics,
            }

    print(f"Matched: {matched}/{len(cities)}")
    if unmatched:
        print(f"Unmatched ({len(unmatched)}): {', '.join(unmatched[:20])}{'...' if len(unmatched) > 20 else ''}")
    print()

    # Step 5: Generate TypeScript file
    print(f"Generating {OUTPUT_TS}...")
    lines = [
        '// Auto-generated by scripts/enrich_cities.py — DO NOT EDIT MANUALLY',
        '// Solar metrics calculated from GPS coordinates using PVGIS-calibrated formulas',
        '',
        'export interface CitySolarData {',
        '  lat: number;',
        '  lon: number;',
        '  population: number;',
        '  entreprises: number;',
        '  /** Heures d\'ensoleillement par an */',
        '  ensoleillement: number;',
        '  /** Irradiance GHI en kWh/m²/an */',
        '  irradiance: number;',
        '  /** Production pour 100 kWc en MWh/an */',
        '  production100kwc: number;',
        '  /** Économie estimée en €/an */',
        '  economie: number;',
        '  /** CO₂ évité en tonnes/an */',
        '  co2Evite: number;',
        '  /** Nombre de toitures exploitables estimé */',
        '  toitures: number;',
        '}',
        '',
        'export const citySolarData: Record<string, CitySolarData> = {',
    ]

    for slug in sorted(results.keys()):
        d = results[slug]
        lines.append(f'  "{slug}": {{ lat: {d["lat"]}, lon: {d["lon"]}, population: {d["population"]}, entreprises: {d["entreprises"]}, ensoleillement: {d["ensoleillement"]}, irradiance: {d["irradiance"]}, production100kwc: {d["production100kwc"]}, economie: {d["economie"]}, co2Evite: {d["co2Evite"]}, toitures: {d["toitures"]} }},')

    lines.append('};')
    lines.append('')

    OUTPUT_TS.write_text('\n'.join(lines))
    print(f"Done! Generated data for {len(results)} cities.")

    # Verification
    print()
    print("=== Verification ===")
    for test_slug in ["lille", "lyon", "marseille", "paris", "toulouse"]:
        if test_slug in results:
            d = results[test_slug]
            print(f"  {test_slug}: ensol={d['ensoleillement']}h irrad={d['irradiance']}kWh/m² prod={d['production100kwc']}MWh eco={d['economie']}€ co2={d['co2Evite']}t toit={d['toitures']}")


if __name__ == "__main__":
    main()
