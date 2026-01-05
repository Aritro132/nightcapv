import Header from "@/components/Header";
import Footer from "@/components/Footer";

const portfolioCompanies = [
  {
    name: "Confidential",
    sector: "Enterprise AI",
    description: "Building foundational infrastructure for enterprise AI deployment.",
    status: "Active",
  },
  {
    name: "Confidential",
    sector: "Computer Vision",
    description: "Advanced visual perception systems for autonomous applications.",
    status: "Active",
  },
  {
    name: "Confidential",
    sector: "Natural Language",
    description: "Next-generation language understanding and generation platforms.",
    status: "Active",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              <span className="text-foreground">Portfolio </span>
              <span className="text-primary">Companies</span>
            </h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              A select group of AI companies we are privileged to support.
            </p>
          </div>

          <div className="mb-12 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm animate-fade-in">
            <p className="text-muted-foreground text-sm leading-relaxed text-center">
              We maintain confidentiality regarding our portfolio companies out of respect 
              for the founders and their competitive positions. Partnerships are disclosed 
              at the discretion of the companies themselves.
            </p>
          </div>

          <div className="grid gap-6">
            {portfolioCompanies.map((company, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-serif text-foreground">
                        {company.name}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                        {company.status}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium uppercase tracking-wider">
                      {company.sector}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {company.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="w-16 h-px bg-border mx-auto mb-6" />
            <p className="text-muted-foreground/60 text-xs">
              Additional portfolio companies not listed.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
