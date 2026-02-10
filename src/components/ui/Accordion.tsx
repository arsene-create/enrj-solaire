"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-border/50 overflow-hidden transition-shadow duration-200 hover:shadow-md"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
          >
            <span className="font-semibold text-foreground pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
