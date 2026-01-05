import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">
              <span className="text-primary">Nightcap</span>
              <span className="text-foreground">Ventures</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto">
              A venture capital firm backing founders in forward-looking industries.
            </p>
          </div>

          <div className="w-16 h-px bg-border mx-auto" />

          <div className="space-y-8 text-left max-w-2xl mx-auto">
            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-3">About</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are a venture capital firm that partners with founders building 
                companies in forward-looking industries. We work quietly alongside 
                exceptional teams shaping the future.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Approach</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Patient capital. Long-term partnerships. We prioritize meaningful collaboration 
                over transaction volume, working closely with a select group of portfolio companies.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
              <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-3">Contact</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Introductions are made through our network. If you are building something 
                remarkable in AI, we would be pleased to hear from you through a mutual connection.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
