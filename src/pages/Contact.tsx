import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center pt-20 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Decorative Element */}
            <div className="mb-12 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border border-border/30 flex items-center justify-center glow">
                  <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border border-primary/10 pulse-glow" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
                  Get in Touch
                </p>
                <h1 className="text-4xl md:text-6xl font-serif italic text-foreground">
                  Let's <span className="text-primary">talk</span>
                </h1>
              </div>

              <p className="text-muted-foreground max-w-md mx-auto text-lg">
                Building something extraordinary? We'd love to hear from you.
              </p>

              <div className="pt-8">
                <a 
                  href="mailto:hello@nightcapventures.com"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-sm tracking-wide group"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@nightcapventures.com</span>
                </a>
              </div>

              <div className="pt-12 space-y-6">
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="text-muted-foreground/50 text-sm">
                  Hong Kong
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;