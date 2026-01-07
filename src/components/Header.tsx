import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    path: "/",
    label: "Home"
  }, {
    path: "/team",
    label: "Team"
  }, {
    path: "/portfolio",
    label: "Portfolio"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-6 py-5">
        <nav className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-1">
            <span className="text-2xl md:text-3xl font-serif italic tracking-tight transition-colors duration-500 text-primary">
              Nightcap Ventures 
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map(item => <li key={item.path}>
                <Link to={item.path} className={`text-sm tracking-wide transition-all duration-300 hover:text-primary ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </Link>
              </li>)}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isOpen && <div className="md:hidden pt-6 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navItems.map(item => <li key={item.path}>
                  <Link to={item.path} onClick={() => setIsOpen(false)} className={`block text-lg transition-colors duration-300 hover:text-primary ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"}`}>
                    {item.label}
                  </Link>
                </li>)}
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;