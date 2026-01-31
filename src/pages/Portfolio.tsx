import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const portfolioCompanies = [{
  id: 1,
  name: "Stealth",
  sector: "Enterprise"
}, {
  id: 2,
  name: "Stealth",
  sector: "Consumer"
}, {
  id: 3,
  name: "Stealth",
  sector: "Fintech"
}, {
  id: 4,
  name: "Stealth",
  sector: "Health"
}, {
  id: 5,
  name: "Stealth",
  sector: "Climate"
}, {
  id: 6,
  name: "Stealth",
  sector: "AI/ML"
}];
const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-24 animate-fade-in">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic text-foreground mb-8">
              Companies we <span className="text-primary">believe in</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">We have backed more than 30 founders across different industries</p>
          </div>

          {/* Portfolio Grid - Unique Hexagonal Layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {portfolioCompanies.map((company, index) => <div key={company.id} className="animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }} onMouseEnter={() => setHoveredId(company.id)} onMouseLeave={() => setHoveredId(null)}>
                  <div className={`
                      relative aspect-square border border-border/30 
                      flex items-center justify-center
                      transition-all duration-700 cursor-pointer
                      ${hoveredId === company.id ? 'bg-card glow border-primary/30' : 'bg-card/30'}
                      ${hoveredId !== null && hoveredId !== company.id ? 'opacity-30' : 'opacity-100'}
                    `}>
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30" />

                    {/* Content */}
                    <div className="text-center space-y-3 p-6">
                      <span className="text-xs text-primary tracking-[0.2em] uppercase">
                        {company.sector}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif italic text-foreground/80">
                        {company.name}
                      </h3>
                    </div>

                    {/* Hover Effect - Glow Ring */}
                    <div className={`
                        absolute inset-4 rounded-full border border-primary/20
                        transition-all duration-700
                        ${hoveredId === company.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                      `} />
                  </div>
                </div>)}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center animate-fade-in" style={{
            animationDelay: '600ms'
          }}>
              <div className="inline-flex items-center gap-4 text-muted-foreground/50 text-sm">
                <div className="h-px w-12 bg-border/50" />
                <span>More investments not listed</span>
                <div className="h-px w-12 bg-border/50" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Portfolio;