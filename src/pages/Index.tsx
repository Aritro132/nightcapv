import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl float" style={{ animationDelay: '-3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/20 pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-border/30 pulse-glow" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/20 pulse-glow" style={{ animationDelay: '-1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Venture Capital Family Office
            </p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.1]">
              <span className="text-foreground">Backing </span>
              <span className="text-gradient">bold</span>
              <span className="text-foreground"> ideas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Partnering with exceptional founders building the future
            </p>

            <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/70">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Sector Agnostic
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Hong Kong Based
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Investing Globally
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="line-reveal pb-8">
                <h2 className="text-4xl md:text-5xl font-serif italic text-foreground">
                  Patient capital for <span className="text-primary">extraordinary</span> teams
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  We invest in talented people with exciting ideas. No sector constraints. 
                  No geographic boundaries. Just great founders building meaningful companies.
                </p>
                <p className="text-lg leading-relaxed">
                  Long-term partnerships over quick exits. We're in it for the journey, 
                  providing more than capital—strategic guidance when it matters.
                </p>
              </div>

              <div className="pt-8">
                <Link 
                  to="/team" 
                  className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all duration-300 group"
                >
                  <span className="text-sm tracking-wide">Meet the team</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-border/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-border/50" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-serif italic text-foreground">
              Building something <span className="text-primary">interesting?</span>
            </h3>
            <p className="text-muted-foreground">
              We'd love to hear from you.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;