import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl float" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl float" 
            style={{ animationDelay: '-3s' }} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/20 pulse-glow" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-border/30 pulse-glow" 
            style={{ animationDelay: '-2s' }} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary/20 pulse-glow" 
            style={{ animationDelay: '-1s' }} 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.p variants={fadeInUp} className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
              Venture Capital Family Office
            </motion.p>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.1]">
              <span className="text-foreground">Backing </span>
              <span className="text-gradient">bold</span>
              <span className="text-foreground"> ideas</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Partnering with exceptional founders building the future
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/70">
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
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
          <motion.div 
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent origin-top" 
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="line-reveal pb-8">
                <h2 className="text-4xl md:text-5xl font-serif italic text-foreground">
                  Patient capital for <span className="text-primary">extraordinary</span> teams
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 text-muted-foreground">
                <motion.p variants={fadeInUp} className="text-lg leading-relaxed">
                  We invest in talented people with exciting ideas. No sector constraints. 
                  No geographic boundaries. Just great founders building meaningful companies.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg leading-relaxed">
                  Long-term partnerships over quick exits. We're in it for the journey, 
                  providing more than capital—strategic guidance when it matters.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="pt-8">
                <Link 
                  to="/team" 
                  className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all duration-300 group"
                >
                  <span className="text-sm tracking-wide">Meet the team</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-border/50 origin-right" 
            />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-primary/50" 
            />
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-border/50 origin-left" 
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-serif italic text-foreground">
              Building something <span className="text-primary">interesting?</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              We'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-sm tracking-wide"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
