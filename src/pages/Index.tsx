import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section - Full Height */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
                <span className="text-foreground">Your </span>
                <span className="text-primary bg-primary/10 px-2">bright</span>
                <span className="text-foreground"> ideas, backed boldly</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg">
                Backing exciting ideas and talented people, exploring opportunities across all sectors.
              </p>
              
              <p className="text-base text-muted-foreground/80 font-light">
                Hong Kong based, investing globally.
              </p>

              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/portfolio">See Our Portfolio</Link>
              </Button>
            </div>

            {/* Right Visual Element */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-primary/50 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl">🌏</span>
                </div>
                <h3 className="text-foreground font-serif text-lg font-medium">Hong Kong Based</h3>
              </div>
              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
                <h3 className="text-foreground font-serif text-lg font-medium">Sector Agnostic</h3>
              </div>
              <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl">🤝</span>
                </div>
                <h3 className="text-foreground font-serif text-lg font-medium">Long-term Partners</h3>
              </div>
            </div>

            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">About Us</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                We partner with talented founders building exciting companies. 
                Sector agnostic, we look for exceptional teams with bold ideas.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Patient capital. Long-term partnerships. We prioritize meaningful collaboration 
                over transaction volume, working closely with a select group of portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
