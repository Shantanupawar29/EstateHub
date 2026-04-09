import React, { useState } from "react";
import { motion } from "framer-motion";

function Marketing() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeCampaign, setActiveCampaign] = useState('');

  const triggerCampaign = (type) => {
    setActiveCampaign(type);
    setShowPopup(true);
    setTimeout(() => {
      alert(`✅ ${type} campaign sent to 500 users! Expected 100 new signups/leads.`);
      setShowPopup(false);
    }, 1500);
  };

  const handleReferral = () => triggerCampaign('Referral');

  return (
    <motion.div style={{ padding: "30px" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
      {showPopup && (
        <motion.div 
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            zIndex: 1000,
            textAlign: "center"
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <h3>🚀 {activeCampaign} Campaign Launched!</h3>
          <p>Sending {activeCampaign.toLowerCase()} campaign to 500 active users...</p>
          <div style={{ fontSize: "48px", margin: "20px 0" }}>📧</div>
        </motion.div>
      )}

      <h1>Marketing Strategy 📈</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
           Social Media Ads  
          <p>Instagram & Facebook campaigns reaching 50,000 users/month</p>
          <button onClick={() => triggerCampaign('Social')} style={styles.actionBtn}>Launch Ad to 500</button>
        </div>

        <div style={styles.card}>
           SEO Optimization  
          <p>Rank top on Google for "buy house in Mumbai"</p>
          <button onClick={() => triggerCampaign('SEO')} style={styles.actionBtn}>Boost SEO 500 Users</button>
        </div>

        <div style={styles.card}>
           Email Marketing  
          <p>Weekly newsletters with offers → 20% engagement</p>
          <button onClick={() => triggerCampaign('Email')} style={styles.actionBtn}>Send Newsletter 500</button>
        </div>

        <div style={styles.card}>
           Referral Program  
          <p>Users get ₹500 bonus for inviting friends</p>
          <button onClick={handleReferral} style={styles.actionBtn}>Send to 500 Users</button>
        </div>

        <div style={styles.card}>
           Google Ads  
          <p>₹10,000 ad spend → 5,000 clicks → 200 leads</p>
          <button onClick={() => triggerCampaign('Google Ads')} style={styles.actionBtn}>Launch Ads 500</button>
        </div>
      </div>

      <h2>📊 Marketing Performance Metrics</h2>
      <div style={styles.metrics}>
        <div style={styles.metric}>
          <h3>12,500</h3>
          <p>Total Clicks</p>
        </div>
        <div style={styles.metric}>
          <h3>320</h3>
          <p>Conversions</p>
        </div>
        <div style={styles.metric}>
          <h3>₹2L</h3>
          <p>Ad Revenue</p>
        </div>
        <div style={styles.metric}>
          <h3>4.2%</h3>
          <p>Conversion Rate</p>
        </div>
      </div>
      
      <h3 style={{textAlign: "center", marginTop: "30px"}}>Strategy ROI: 5x Return on Ad Spend 🚀</h3>
    </motion.div>
  );
}

const styles = {
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    padding: "15px",
    background: "white",
    borderRadius: "10px",
    width: "220px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  metrics: {
    display: "flex", 
    gap: "20px", 
    flexWrap: "wrap", 
    justifyContent: "center",
    margin: "20px 0"
  },
  metric: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    minWidth: "150px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  },
  actionBtn: {
    marginTop: "10px",
    padding: "8px 16px",
    background: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px"
  }
};

export default Marketing;
