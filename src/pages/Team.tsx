import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const teamMembers = [
  {
    name: "Toby Duckworth",
    role: "Founder",
    linkedIn: "https://www.linkedin.com/in/toby-duckworth/",
    bio: "Toby brings over a decade of experience in technology investing and venture capital. With a background spanning early-stage startups to scaled enterprises, he founded Discreet AI to channel patient capital toward founders building meaningful AI infrastructure. His approach emphasizes long-term partnerships and genuine value creation over rapid deployment cycles.",
  },
  {
    name: "Aritro Mukherji",
    role: "Analyst",
    linkedIn: "https://www.linkedin.com/in/aritro-mukherji/",
    bio: "Aritro specializes in deep technology analysis and market research within the AI landscape. His rigorous approach to due diligence and technical evaluation helps identify promising ventures at the intersection of research innovation and commercial viability. He focuses on understanding the fundamental technical moats that define lasting AI companies.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              <span className="text-foreground">Our </span>
              <span className="text-primary">Team</span>
            </h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              A small, focused team dedicated to thoughtful AI investment.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-serif text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="text-xl font-serif text-foreground">
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
                      <p className="text-primary text-sm font-medium uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
