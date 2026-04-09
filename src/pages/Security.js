import React from "react";
import { motion } from "framer-motion";

function Security() {
  return (
    <motion.div style={{ padding: "30px" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      <h1>Security & Payment </h1>

      {/* SECURITY */}
      <h2>Security Practices</h2>
      <div style={styles.grid}>
        <div style={styles.card}> HTTPS (SSL Encryption)</div>
        <div style={styles.card}> JWT Authentication</div>
        <div style={styles.card}> Password Hashing (bcrypt)</div>
        <div style={styles.card}> Input Validation</div>
      </div>

      {/* PAYMENT */}
      <h2>Payment Gateway 💳</h2>
      <div style={styles.grid}>
        <div style={styles.card}> UPI Payments</div>
        <div style={styles.card}> Net Banking</div>
        <div style={styles.card}> Credit/Debit Cards</div>
        <div style={styles.card}> Wallets (Paytm, GPay)</div>
      </div>

      {/* TOOLS */}
      <h2>Tools Used</h2>
      <ul>
        <li>Razorpay Secure Payment Gateway (PCI-DSS Compliant)</li>
        <li>Firebase Auth / JWT</li>
        <li>MongoDB Secure Storage</li>
        <li>HTTPS (SSL Certificates)</li>
      </ul>

      {/* LOGIN UI */}
      <h2>🔐 Secure Login Demo</h2>
      <div style={styles.login}>
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" type="password" />
        <button style={styles.btn}>Login with JWT</button>
        <small>JWT Token stored securely in httpOnly cookies</small>
      </div>

      {/* LEGAL DOCS */}
      <h2>📜 Legal & Privacy Documents</h2>
      <div style={styles.legalGrid}>
        <a href="/terms-of-service.html" target="_blank" rel="noopener noreferrer" style={styles.legalCard}>
          <h3>Terms of Service</h3>
          <p>Platform usage rules, fees, agent terms</p>
        </a>
        <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" style={styles.legalCard}>
          <h3>Privacy Policy</h3>
          <p>GDPR compliant data protection</p>
        </a>
      </div>
      <p style={{textAlign: "center", color: "#10b981", fontWeight: "bold"}}>
        ✅ All user agreements handled | Data fully protected
      </p>
    </motion.div>
  );
}

const styles = {
  grid: { display: "flex", gap: "20px", margin: "20px 0" },
  card: {
    flex: 1,
    padding: "20px",
    background: "#f5f7fa",
    borderRadius: "10px",
    textAlign: "center",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "350px",
    gap: "12px",
    margin: "20px 0",
    padding: "20px",
    background: "#f8fafc",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  input: {
    padding: "12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "16px"
  },
  btn: {
    padding: "12px",
    background: "#1e3a5f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  legalGrid: {
    display: "flex",
    gap: "20px",
    margin: "20px 0",
    flexWrap: "wrap"
  },
  legalCard: {
    flex: 1,
    minWidth: "250px",
    padding: "25px",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    borderRadius: "12px",
    textDecoration: "none",
    color: "inherit",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s"
  }
};

export default Security;
