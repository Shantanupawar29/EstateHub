import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Key, Fingerprint, CreditCard, 
  Wallet, Building2, FileText, CheckCircle, 
  ExternalLink, Database, Cloud, Server,
  Smartphone, Globe, AlertTriangle, Award
} from "lucide-react";

function Security() {
  const [showLoginDemo, setShowLoginDemo] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const securityFeatures = [
    { icon: Shield, title: "HTTPS (SSL Encryption)", description: "256-bit encryption for all data transfers", color: "#10b981" },
    { icon: Key, title: "JWT Authentication", description: "Secure token-based authentication", color: "#3b82f6" },
    { icon: Lock, title: "Password Hashing", description: "bcrypt hashing with salt rounds", color: "#f59e0b" },
    { icon: Fingerprint, title: "Input Validation", description: "XSS & SQL injection protection", color: "#8b5cf6" }
  ];

  const paymentMethods = [
    { icon: Smartphone, name: "UPI Payments", desc: "Google Pay, PhonePe, Paytm" },
    { icon: Building2, name: "Net Banking", desc: "All major banks supported" },
    { icon: CreditCard, name: "Cards", desc: "Visa, Mastercard, RuPay" },
    { icon: Wallet, name: "Digital Wallets", desc: "Paytm, Amazon Pay, Mobikwik" }
  ];

  const tools = [
    { icon: Database, name: "Razorpay", desc: "PCI-DSS Compliant Gateway" },
    { icon: Server, name: "MongoDB", desc: "Secure encrypted storage" },
    { icon: Cloud, name: "Firebase Auth", desc: "JWT token management" },
    { icon: Globe, name: "SSL Certificates", desc: "Let's Encrypt / Cloudflare" }
  ];

  const handleLoginDemo = (e) => {
    e.preventDefault();
    setShowLoginDemo(true);
    setTimeout(() => setShowLoginDemo(false), 3000);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.badge}>
          <Shield size={14} /> Enterprise Grade Security
        </span>
        <h1 style={styles.title}>Security & Compliance</h1>
        <p style={styles.subtitle}>Your data is protected with bank-level encryption</p>
      </div>

      {/* Security Score Banner */}
      <motion.div
        style={styles.scoreBanner}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div style={styles.scoreLeft}>
          <Award size={48} color="#10b981" />
          <div>
            <h3>Security Score: 98/100</h3>
            <p>PCI-DSS | ISO 27001 | GDPR Compliant</p>
          </div>
        </div>
        <div style={styles.scoreBadge}>
          <CheckCircle size={20} />
          <span>All Systems Secure</span>
        </div>
      </motion.div>

      {/* Security Features Grid */}
      <h2 style={styles.sectionTitle}>Security Practices</h2>
      <div style={styles.featuresGrid}>
        {securityFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            style={styles.featureCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div style={{ ...styles.featureIcon, background: `${feature.color}15` }}>
              <feature.icon size={28} color={feature.color} />
            </div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDesc}>{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Payment Methods */}
      <h2 style={styles.sectionTitle}>Payment Gateway 💳</h2>
      <div style={styles.paymentGrid}>
        {paymentMethods.map((method, idx) => (
          <motion.div
            key={idx}
            style={styles.paymentCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <method.icon size={32} color="#10b981" />
            <h4>{method.name}</h4>
            <p>{method.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Tools Used */}
      <h2 style={styles.sectionTitle}>Tools & Infrastructure</h2>
      <div style={styles.toolsGrid}>
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            style={styles.toolCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
          >
            <tool.icon size={24} color="#10b981" />
            <div>
              <h4>{tool.name}</h4>
              <p>{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Login Demo */}
      <h2 style={styles.sectionTitle}>🔐 Secure Login Demo</h2>
      <motion.div
        style={styles.loginCard}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <form onSubmit={handleLoginDemo} style={styles.loginForm}>
          <div style={styles.loginInputGroup}>
            <input
              type="email"
              placeholder="Email address"
              style={styles.loginInput}
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              style={styles.loginInput}
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </div>
          <motion.button
            type="submit"
            style={styles.loginBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login with JWT
          </motion.button>
        </form>
        <p style={styles.loginNote}>
          <Shield size={12} /> JWT Token stored securely in httpOnly cookies
        </p>
        
        {showLoginDemo && (
          <motion.div
            style={styles.loginSuccess}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle size={18} />
            <span>Demo: JWT token generated successfully!</span>
          </motion.div>
        )}
      </motion.div>

      {/* Legal Documents */}
      <h2 style={styles.sectionTitle}>📜 Legal & Privacy Documents</h2>
      <div style={styles.legalGrid}>
        <motion.a
          href="/terms-of-service.html"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.legalCard}
          whileHover={{ y: -5 }}
        >
          <FileText size={32} color="#10b981" />
          <h3>Terms of Service</h3>
          <p>Platform usage rules, fees, agent terms</p>
          <ExternalLink size={16} />
        </motion.a>
        <motion.a
          href="/privacy-policy.html"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.legalCard}
          whileHover={{ y: -5 }}
        >
          <Shield size={32} color="#10b981" />
          <h3>Privacy Policy</h3>
          <p>GDPR compliant data protection</p>
          <ExternalLink size={16} />
        </motion.a>
      </div>

      {/* Compliance Badge */}
      <motion.div
        style={styles.complianceBanner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <CheckCircle size={20} color="#10b981" />
        <span>All user agreements handled | Data fully protected | 24/7 Security Monitoring</span>
      </motion.div>
    </motion.div>
  );
}

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 8%",
    minHeight: "100vh",
    background: "#f8fafc"
  },
  header: {
    textAlign: "center",
    marginBottom: "48px"
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 20px",
    background: "#10b98115",
    color: "#10b981",
    borderRadius: "100px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "16px"
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "12px"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#64748b"
  },
  scoreBanner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "24px 32px",
    borderRadius: "20px",
    marginBottom: "48px",
    color: "#fff"
  },
  scoreLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  },
  scoreBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    background: "#10b98120",
    borderRadius: "100px",
    fontSize: "14px"
  },
  sectionTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "24px"
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginBottom: "48px"
  },
  featureCard: {
    background: "#ffffff",
    padding: "28px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    textAlign: "center",
    transition: "all 0.3s"
  },
  featureIcon: {
    width: "64px",
    height: "64px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px"
  },
  featureTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px"
  },
  featureDesc: {
    fontSize: "13px",
    color: "#64748b"
  },
  paymentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "48px"
  },
  paymentCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s"
  },
  toolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
    marginBottom: "48px"
  },
  toolCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  },
  loginCard: {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "24px",
    marginBottom: "48px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  loginForm: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "16px"
  },
  loginInputGroup: {
    flex: 1,
    display: "flex",
    gap: "16px",
    flexWrap: "wrap"
  },
  loginInput: {
    flex: 1,
    padding: "14px 18px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s"
  },
  loginBtn: {
    padding: "14px 32px",
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  },
  loginNote: {
    fontSize: "12px",
    color: "#64748b",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },
  loginSuccess: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "16px",
    padding: "12px",
    background: "#f0fdf4",
    borderRadius: "12px",
    color: "#10b981",
    fontSize: "13px"
  },
  legalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginBottom: "32px"
  },
  legalCard: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "28px",
    background: "#ffffff",
    borderRadius: "20px",
    textDecoration: "none",
    color: "inherit",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "all 0.3s"
  },
  complianceBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "20px",
    background: "#f0fdf4",
    borderRadius: "16px",
    color: "#10b981",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default Security;