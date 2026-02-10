import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: title }]} />
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-foreground mb-8">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
