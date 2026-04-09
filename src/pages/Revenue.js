import React, { useState } from "react";
import { motion } from "framer-motion";

function Revenue() {
  const [showRevenueAction, setShowRevenueAction] = useState(false);
  const [activeRevenueStream, setActiveRevenueStream] = useState('');

  const triggerRevenueAction = (stream) => {
    setActiveRevenueStream(stream);
    setShowRevenueAction(true);
    setTimeout(() => {
      alert(`✅ ${stream} activated! Projected +₹50,000 monthly revenue boost.`);
      setShowRevenueAction(false);
    }, 1200);
  };

  return (
    <motion.div style={{ padding: "30px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>💰 Revenue Model & Dashboard</h1>

      {/* REVENUE MODEL EXPLANATION */}
      <h2>Our Revenue Model</h2>
      <div style={{background: "#f0f8ff", padding: "20px", borderRadius: "10px", marginBottom: "30px"}}>
        <ul style={{lineHeight: "2"}}>
          <li><b>Listing Fees:</b> ₹999 per basic property listing (unlimited photos)</li>
          <li><b>Premium Featured:</b> ₹4999/month - Top placement + email alerts to 10K buyers</li>
          <li><b>Agent Subscriptions:</b> ₹1999/month - Unlimited listings + CRM tools + leads</li>
          <li><b>Transaction Commission:</b> 1-2% on successful sales (avg ₹50K per deal)</li>
          <li><b>Bank Partnerships:</b> 1% referral fee on home loans (₹20K avg per referral)</li>
          <li><b>Affiliate Marketing:</b> Interior designers, movers (₹500 per referral)</li>
        </ul>
        <h3>💡 Year 1 Target: ₹50 Lakhs | Current: ₹4.8 Lakhs</h3>
      </div>

      {showRevenueAction && (
        <motion.div 
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#f0f9ff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            zIndex: 1000,
            textAlign: "center",
            maxWidth: "400px"
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <h3>💰 {activeRevenueStream} Activated!</h3>
          <p>Projected +₹50K monthly boost from new activations</p>
          <div style={{ fontSize: "48px", margin: "20px 0" }}>📈</div>
        </motion.div>
      )}

      {/* DASHBOARD */}
      <h2>Current Month Revenue Breakdown</h2>
      <div style={styles.grid}>
        <div style={styles.card} onClick={() => triggerRevenueAction('Listing Fees')}>
          Listing Fees<br /><b>₹2,00,000</b> <button style={styles.revenueBtn}>Activate</button>
        </div>
        <div style={styles.card} onClick={() => triggerRevenueAction('Premium Featured')}>
          Featured Ads<br /><b>₹1,50,000</b> <button style={styles.revenueBtn}>Activate</button>
        </div>
        <div style={styles.card} onClick={() => triggerRevenueAction('Agent Plans')}>
          Agent Plans<br /><b>₹80,000</b> <button style={styles.revenueBtn}>Activate</button>
        </div>
        <div style={styles.card} onClick={() => triggerRevenueAction('Loan Commission')}>
          Loan Commission<br /><b>₹50,000</b> <button style={styles.revenueBtn}>Activate</button>
        </div>
      </div>

      <h3 style={{textAlign: "center", color: "#10b981"}}>Total Revenue: <b>₹4,80,000</b> 📈</h3>
    </motion.div>
  );
}

const styles = {
  grid: { display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" },
  card: {
    flex: 1,
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
    position: "relative",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  revenueBtn: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    padding: "6px 12px",
    background: "#059669",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "11px",
    cursor: "pointer"
  }
};

export default Revenue;
