import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import tobyHeadshot from "@/assets/toby-headshot.png";
import aritroHeadshot from "@/assets/aritro-headshot.jpeg";

const teamMembers = [
  {
    name: "Toby Duckworth",
    role: "Founder",
    linkedIn: "https://www.linkedin.com/in/toby-duckworth/",
    image: tobyHeadshot,
  },
  {
    name: "Aritro Mukherji",
    role: "Analyst",
    linkedIn: "https://www.linkedin.com/in/aritro-mukherji/",
    image: aritroHeadshot,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-24 animate-fade-in">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
              Our Team
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic text-foreground">
              The people behind <span className="text-primary">Nightcap</span>
            </h1>
          </div>

          {/* Team Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-card border border-border/30 glow">
                    {/* Headshot Image */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-serif italic text-foreground">
                            {member.name}
                          </h2>
                          <a
                            href={member.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-sm text-muted-foreground tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;