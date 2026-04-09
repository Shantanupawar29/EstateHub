import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
  <div style={styles.logoSection}>
        <img src="/logo192.png" alt="EstateHub" style={styles.logo} />
        <h2 style={styles.logoText}>EstateHub</h2>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}> Home</Link>
        <Link to="/listings" style={styles.link}> Buy</Link>
        <Link to="/sell" style={styles.link}> Sell</Link>
        <Link to="/crm" style={styles.link}> CRM</Link>
        <Link to="/admin" style={styles.link}> Admin</Link>
        <Link to="/security" style={styles.link}> Security</Link>
        <Link to="/contact" style={styles.link}> Contact</Link>
      </div>
    </nav>
  );
}

/* logoStyles merged into main styles */

const styles = {
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  logo: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  logoText: {
    color: "white", 
    fontWeight: "bold",
    margin: 0,
    fontSize: "1.5rem"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
    color: "white",
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(30, 58, 138, 0.3)",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  links: {
    display: "flex",
    gap: "25px",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    transition: "all 0.3s",
    fontWeight: "500"
  }
};

export default Navbar;
