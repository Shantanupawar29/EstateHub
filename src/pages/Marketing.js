import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, Facebook, Mail, Share2, TrendingUp, 
  Users, DollarSign, Target, Zap, ChevronRight,
  BarChart3, Clock, Award, Megaphone
} from "lucide-react";

function Marketing() {
  const [activeCampaign, setActiveCampaign] = useState(null);

  const campaigns = [
    { 
      icon: Instagram, 
      name: "Social Media Ads", 
      description: "Instagram & Facebook campaigns",
      reach: "50K+", 
      roi: "3.2x",
      color: "#e4405f"
    },
    { 
      icon: TrendingUp, 
      name: "SEO Optimization", 
      description: "Rank top on Google searches",
      reach: "100K+", 
      roi: "4.1x",
      color: "#f59e0b"
    },
    { 
      icon: Mail, 
      name: "Email Marketing", 
      description: "Weekly newsletters with offers",
      reach: "25K", 
      roi: "2.8x",
      color: "#3b82f6"
    },
    { 
      icon: Share2, 
      name: "Referral Program", 
      description: "₹500 bonus for referrals",
      reach: "15K", 
      roi: "5.2x",
      color: "#10b981"
    },
    { 
      icon: BarChart3, 
      name: "Google Ads", 
      description: "PPC campaigns on search",
      reach: "200K+", 
      roi: "4.5x",
      color: "#8b5cf6"
    }
  ];

  const metrics = [
    { label: "Total Clicks", value: "12.5K", change: "+18%", icon: Target },
    { label: "Conversions", value: "320", change: "+12%", icon: Users },
    { label: "Ad Revenue", value: "₹2L", change: "+25%", icon: DollarSign },
    { label: "Conversion Rate", value: "4.2%", change: "+0.8%", icon: TrendingUp }
  ];

  const launchCampaign = (name) => {
    setActiveCampaign(name);
    setTimeout(() => setActiveCampaign(null), 2000);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.badge}>Marketing Strategy</span>
        <h1 style={styles.title}>Grow Your Reach</h1>
        <p style={styles.subtitle}>Multi-channel marketing campaigns with measurable ROI</p>
      </div>

      {/* Metrics */}
      <div style={styles.metricsGrid}>
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            style={styles.metricCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div style={styles.metricIcon}>
              <metric.icon size={24} color="#10b981" />
            </div>
            <div>
              <h3 style={styles.metricValue}>{metric.value}</h3>
              <p style={styles.metricLabel}>{metric.label}</p>
              <span style={styles.metricChange}>{metric.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Campaigns Grid */}
      <h2 style={styles.sectionTitle}>Active Campaigns</h2>
      <div style={styles.campaignsGrid}>
        {campaigns.map((campaign, idx) => (
          <motion.div
            key={idx}
            style={styles.campaignCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div style={{ ...styles.campaignIcon, background: `${campaign.color}15` }}>
              <campaign.icon size={28} color={campaign.color} />
            </div>
            <h3 style={styles.campaignName}>{campaign.name}</h3>
            <p style={styles.campaignDesc}>{campaign.description}</p>
            <div style={styles.campaignStats}>
              <span>📊 Reach: {campaign.reach}</span>
              <span>💰 ROI: {campaign.roi}</span>
            </div>
            <motion.button
              style={styles.launchBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => launchCampaign(campaign.name)}
            >
              Launch Campaign <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Strategy Section */}
      <motion.div
        style={styles.strategySection}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 style={styles.sectionTitle}>Marketing Strategy</h2>
        <div style={styles.strategyGrid}>
          <div style={styles.strategyItem}>
            <div style={styles.strategyNumber}>01</div>
            <h4>Target Audience</h4>
            <p>First-time homebuyers, investors, NRIs aged 25-45</p>
          </div>
          <div style={styles.strategyItem}>
            <div style={styles.strategyNumber}>02</div>
            <h4>Channel Mix</h4>
            <p>Social media (40%), Search (35%), Email (15%), Referral (10%)</p>
          </div>
          <div style={styles.strategyItem}>
            <div style={styles.strategyNumber}>03</div>
            <h4>Budget Allocation</h4>
            <p>₹5L/month total | 5x projected ROAS</p>
          </div>
          <div style={styles.strategyItem}>
            <div style={styles.strategyNumber}>04</div>
            <h4>KPIs Tracked</h4>
            <p>CTR, Conversion Rate, CPA, ROAS, Customer LTV</p>
          </div>
        </div>
      </motion.div>

      {/* ROI Banner */}
      <motion.div
        style={styles.roiBanner}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Award size={48} color="#10b981" />
        <div>
          <h3>Overall Marketing ROI</h3>
          <p>5x Return on Ad Spend | ₹10L revenue generated from ₹2L ad spend</p>
        </div>
        <span style={styles.roiValue}>5x</span>
      </motion.div>

      {/* Success Toast */}
      <AnimatePresence>
        {activeCampaign && (
          <motion.div
            style={styles.toast}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Zap size={20} color="#10b981" />
            <span>{activeCampaign} campaign launched successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
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
    display: "inline-block",
    padding: "6px 16px",
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
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    marginBottom: "48px"
  },
  metricCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "#ffffff",
    padding: "24px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  metricIcon: {
    width: "56px",
    height: "56px",
    background: "#f0fdf4",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  metricValue: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "4px"
  },
  metricLabel: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "4px"
  },
  metricChange: {
    fontSize: "12px",
    color: "#10b981",
    fontWeight: "500"
  },
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "24px"
  },
  campaignsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginBottom: "48px"
  },
  campaignCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "all 0.3s"
  },
  campaignIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px"
  },
  campaignName: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px"
  },
  campaignDesc: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "16px"
  },
  campaignStats: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderTop: "1px solid #f1f5f9",
    borderBottom: "1px solid #f1f5f9",
    marginBottom: "16px",
    fontSize: "13px",
    color: "#475569"
  },
  launchBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "12px",
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer"
  },
  strategySection: {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "24px",
    marginBottom: "32px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  strategyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px"
  },
  strategyItem: {
    textAlign: "center"
  },
  strategyNumber: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#10b981",
    marginBottom: "8px"
  },
  roiBanner: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "32px",
    borderRadius: "24px",
    color: "#fff"
  },
  roiValue: {
    marginLeft: "auto",
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#10b981"
  },
  toast: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#ffffff",
    padding: "16px 24px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    zIndex: 1000
  }
};

export default Marketing;