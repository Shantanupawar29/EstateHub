import React from "react";
import { motion } from "framer-motion";
import { 
  facebook, twitter, instagram, linkedin, youtube,
  MapPin, Phone, Mail, ChevronRight, ShieldCheck
} from "lucide-react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Column 1 - Brand */}
        <div style={styles.footerColumn}>
          <div style={styles.logoSection}>
            <img src="/logo192.png" alt="EstateHub" style={styles.logo} />
            <h3 style={styles.logoText}>EstateHub</h3>
          </div>
          <p style={styles.brandDesc}>
            India's most trusted luxury real estate platform. 
            Connecting discerning investors with premium properties since 2020.
          </p>
          <div style={styles.socialLinks}>
            <motion.a whileHover={{ y: -3 }} href="#" style={styles.socialIcon}><facebook size={18} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" style={styles.socialIcon}><twitter size={18} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" style={styles.socialIcon}><instagram size={18} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" style={styles.socialIcon}><linkedin size={18} /></motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" style={styles.socialIcon}><youtube size={18} /></motion.a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="/">Home</a><ChevronRight size={14} /></li>
            <li><a href="/listings">Buy Property</a><ChevronRight size={14} /></li>
            <li><a href="/sell">Sell Property</a><ChevronRight size={14} /></li>
            <li><a href="/crm">CRM Portal</a><ChevronRight size={14} /></li>
            <li><a href="/contact">Contact Us</a><ChevronRight size={14} /></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Our Services</h4>
          <ul style={styles.linkList}>
            <li><a href="#">Property Management</a><ChevronRight size={14} /></li>
            <li><a href="#">Smart Valuation</a><ChevronRight size={14} /></li>
            <li><a href="#">Legal Assistance</a><ChevronRight size={14} /></li>
            <li><a href="#">Investment Advisory</a><ChevronRight size={14} /></li>
            <li><a href="#">3D Virtual Tours</a><ChevronRight size={14} /></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div style={styles.footerColumn}>
          <h4 style={styles.columnTitle}>Get in Touch</h4>
          <div style={styles.contactInfo}>
            <p><MapPin size={16} /> 721, Bandra Kurla Complex, Mumbai - 400051</p>
            <p><Phone size={16} /> +91 22 1234 5678</p>
            <p><Mail size={16} /> hello@estatehub.com</p>
          </div>
          <div style={styles.trustBadge}>
            <ShieldCheck size={20} color="#10b981" />
            <span>RERA Certified | ISO 9001:2024</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.bottomContainer}>
          <p>© 2026 EstateHub. All rights reserved.</p>
          <div style={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f172a",
    color: "#94a3b8",
    marginTop: "80px"
  },
  footerContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 8% 40px"
  },
  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "12px"
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#ffffff",
    margin: 0
  },
  brandDesc: {
    lineHeight: "1.6",
    fontSize: "14px"
  },
  socialLinks: {
    display: "flex",
    gap: "12px"
  },
  socialIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
    transition: "all 0.3s",
    cursor: "pointer"
  },
  columnTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "10px"
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& li": {
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    "& a": {
      color: "#94a3b8",
      textDecoration: "none",
      transition: "color 0.3s",
      flex: 1
    },
    "& a:hover": {
      color: "#10b981"
    }
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& p": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "14px"
    }
  },
  trustBadge: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    background: "rgba(16,185,129,0.1)",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#10b981"
  },
  bottomBar: {
    borderTop: "1px solid #1e293b",
    padding: "20px 0"
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 8%"
  },
  bottomLinks: {
    display: "flex",
    gap: "24px",
    "& a": {
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: "13px",
      transition: "color 0.3s"
    },
    "& a:hover": {
      color: "#10b981"
    }
  }
};

export default Footer;