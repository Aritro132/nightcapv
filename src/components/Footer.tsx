import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="text-2xl font-serif italic text-foreground/80 hover:text-primary transition-colors">
            Nightcap
          </Link>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/team" className="hover:text-primary transition-colors">Team</Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;