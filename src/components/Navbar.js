import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/listings" },
    { name: "Sell", path: "/sell" },
    { name: "CRM", path: "/crm" },
    { name: "Admin", path: "/admin" },
    { name: "Security", path: "/security" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        ...styles.nav,
        background: isScrolled 
          ? "rgba(15, 23, 42, 0.95)" 
          : "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "0 4px 20px rgba(30, 58, 138, 0.3)"
      }}
    >
      <div style={styles.navContainer}>
        {/* Logo */}
        <Link to="/" style={styles.logoSection}>
          <img src="/logo192.png" alt="EstateHub" style={styles.logo} />
          <h2 style={styles.logoText}>EstateHub</h2>
        </Link>

        {/* Desktop Links */}
        <div style={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                ...styles.link,
                background: location.pathname === link.path ? "rgba(255,255,255,0.15)" : "transparent"
              }}
            >
              {link.name}
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.ctaButton}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={styles.mobileMenu}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button style={styles.mobileCtaButton}>Get Started</button>
        </motion.div>
      )}
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "all 0.3s ease"
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 8%",
    maxWidth: "1400px",
    margin: "0 auto"
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none"
  },
  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "12px"
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    margin: 0,
    fontSize: "1.5rem"
  },
  desktopLinks: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    "@media (max-width: 768px)": {
      display: "none"
    }
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    transition: "all 0.3s",
    fontWeight: "500",
    fontSize: "14px"
  },
  ctaButton: {
    background: "#10b981",
    color: "white",
    border: "none",
    padding: "10px 24px",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s",
    marginLeft: "10px"
  },
  mobileMenuBtn: {
    display: "none",
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      display: "block"
    }
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "rgba(15, 23, 42, 0.98)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderTop: "1px solid rgba(255,255,255,0.1)"
  },
  mobileLink: {
    color: "white",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    transition: "all 0.3s",
    fontWeight: "500",
    textAlign: "center"
  },
  mobileCtaButton: {
    background: "#10b981",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "12px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px"
  }
};

// Add media queries
const mediaStyles = `
  @media (max-width: 768px) {
    .desktop-links {
      display: none;
    }
    .mobile-menu-btn {
      display: block;
    }
  }
`;

export default Navbar;