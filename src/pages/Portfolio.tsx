import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

// Import logos
import noanLogo from "@/assets/logos/noan-logo.png";
import blincLogo from "@/assets/logos/blinc-logo.png";
import lunewildLogo from "@/assets/logos/lunewild-logo.png";
import keycarbonLogo from "@/assets/logos/keycarbon-logo.png";
import ensoLogo from "@/assets/logos/enso-logo.png";
import moxicoLogo from "@/assets/logos/moxico-logo.png";
import laivaLogo from "@/assets/logos/laiva-logo.png";
import puretungstenLogo from "@/assets/logos/puretungsten-logo.png";

const portfolioCompanies = [
  {
    id: 1,
    name: "Noan",
    description: "Your Superhuman Business Partner",
    sector: "AI",
    website: "https://www.noan.co",
    logo: noanLogo,
  },
  {
    id: 2,
    name: "Blinc Light",
    description: "Better visibility. Safer working.",
    sector: "Safety Tech",
    website: "https://blinclight.co.uk",
    logo: blincLogo,
  },
  {
    id: 3,
    name: "Lune & Wild",
    description: "Deliciously different baby & children's meals",
    sector: "Consumer",
    website: "https://www.luneandwild.com",
    logo: lunewildLogo,
  },
  {
    id: 4,
    name: "Key Carbon",
    description: "High quality climate projects",
    sector: "Climate",
    website: "https://www.keycarbon.co.uk",
    logo: keycarbonLogo,
  },
  {
    id: 5,
    name: "Enso",
    description: "Better tires for electric vehicles",
    sector: "EV",
    website: "https://enso.co",
    logo: ensoLogo,
  },
  {
    id: 6,
    name: "Moxico Resources",
    description: "Low-cost copper producer",
    sector: "Mining",
    website: "https://www.moxicoresources.com",
    logo: moxicoLogo,
  },
  {
    id: 7,
    name: "Laiva Gold",
    description: "Gold mining operations",
    sector: "Mining",
    website: "https://laivagold.com",
    logo: laivaLogo,
  },
  {
    id: 8,
    name: "Pure Tungsten",
    description: "Tungsten metals company",
    sector: "Mining",
    website: "https://puretungsten.co.uk",
    logo: puretungstenLogo,
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
            <p className="text-muted-foreground max-w-lg mx-auto">
              We back exceptional founders building transformative companies
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {portfolioCompanies.map((company, index) => (
                <a
                  key={company.id}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-fade-in block group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredId(company.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`
                      relative aspect-square border border-border/30 
                      flex flex-col items-center justify-center
                      transition-all duration-700 cursor-pointer overflow-hidden
                      ${hoveredId === company.id ? "bg-card glow border-primary/30" : "bg-card/30"}
                      ${hoveredId !== null && hoveredId !== company.id ? "opacity-30" : "opacity-100"}
                    `}
                  >
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30" />

                    {/* Logo */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-1 px-4">
                      <span className="text-xs text-primary tracking-[0.2em] uppercase">
                        {company.sector}
                      </span>
                      <h3 className="text-lg md:text-xl font-serif italic text-foreground/80 group-hover:text-foreground transition-colors">
                        {company.name}
                      </h3>
                    </div>

                    {/* External Link Icon */}
                    <div
                      className={`
                        absolute top-4 right-4 transition-all duration-500
                        ${hoveredId === company.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                      `}
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>

                    {/* Hover Effect - Glow Ring */}
                    <div
                      className={`
                        absolute inset-4 rounded-full border border-primary/20
                        transition-all duration-700
                        ${hoveredId === company.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                      `}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
