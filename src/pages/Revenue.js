import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Wallet, Users, Building2, 
  Landmark, Zap, Target, DollarSign, 
  BarChart3, Calendar, ArrowUp, ArrowDown 
} from "lucide-react";

function Revenue() {
  const [activeStream, setActiveStream] = useState(null);

  const revenueStreams = [
    { 
      icon: Building2, 
      name: "Listing Fees", 
      current: "₹2,00,000", 
      projected: "₹5,00,000",
      growth: "+150%",
      color: "#10b981"
    },
    { 
      icon: Zap, 
      name: "Premium Featured", 
      current: "₹1,50,000", 
      projected: "₹3,00,000",
      growth: "+100%",
      color: "#f59e0b"
    },
    { 
      icon: Users, 
      name: "Agent Plans", 
      current: "₹80,000", 
      projected: "₹2,00,000",
      growth: "+150%",
      color: "#3b82f6"
    },
    { 
      icon: Landmark, 
      name: "Loan Commission", 
      current: "₹50,000", 
      projected: "₹1,50,000",
      growth: "+200%",
      color: "#8b5cf6"
    }
  ];

  const monthlyData = [
    { month: "Jan", revenue: 280000 },
    { month: "Feb", revenue: 320000 },
    { month: "Mar", revenue: 350000 },
    { month: "Apr", revenue: 400000 },
    { month: "May", revenue: 440000 },
    { month: "Jun", revenue: 480000 }
  ];

  const totalRevenue = 480000;
  const targetRevenue = 5000000;
  const progress = (totalRevenue / targetRevenue) * 100;

  const activateStream = (name) => {
    setActiveStream(name);
    setTimeout(() => setActiveStream(null), 2000);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.badge}>Revenue Dashboard</span>
        <h1 style={styles.title}>💰 Revenue Model</h1>
        <p style={styles.subtitle}>Track earnings and growth across all revenue streams</p>
      </div>

      {/* Total Revenue Card */}
      <motion.div
        style={styles.totalCard}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div>
          <p style={styles.totalLabel}>Total Revenue (YTD)</p>
          <h2 style={styles.totalValue}>₹{totalRevenue.toLocaleString()}</h2>
          <p style={styles.totalTarget}>Target: ₹{targetRevenue.toLocaleString()}</p>
        </div>
        <div style={styles.progressWrapper}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} />
          <span style={styles.progressText}>{progress.toFixed(1)}% of yearly target</span>
        </div>
        <div style={styles.totalIcon}>
          <TrendingUp size={48} color="#10b981" />
        </div>
      </motion.div>

      {/* Revenue Streams */}
      <h2 style={styles.sectionTitle}>Revenue Streams</h2>
      <div style={styles.streamsGrid}>
        {revenueStreams.map((stream, idx) => (
          <motion.div
            key={idx}
            style={styles.streamCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div style={{ ...styles.streamIcon, background: `${stream.color}15` }}>
              <stream.icon size={28} color={stream.color} />
            </div>
            <h3 style={styles.streamName}>{stream.name}</h3>
            <div style={styles.streamAmounts}>
              <div>
                <span style={styles.streamLabel}>Current</span>
                <p style={styles.streamCurrent}>{stream.current}</p>
              </div>
              <ArrowUp size={16} color="#10b981" />
              <div>
                <span style={styles.streamLabel}>Projected</span>
                <p style={styles.streamProjected}>{stream.projected}</p>
              </div>
            </div>
            <span style={styles.streamGrowth}>{stream.growth} growth</span>
            <motion.button
              style={styles.activateBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => activateStream(stream.name)}
            >
              <Zap size={14} /> Activate Boost
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Monthly Performance */}
      <h2 style={styles.sectionTitle}>Monthly Performance</h2>
      <motion.div
        style={styles.monthlyCard}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div style={styles.monthlyHeader}>
          <h3>Revenue Growth</h3>
          <span style={styles.growthBadge}>+71% from Jan</span>
        </div>
        <div style={styles.barChart}>
          {monthlyData.map((item, idx) => {
            const height = (item.revenue / 500000) * 200;
            return (
              <div key={idx} style={styles.barWrapper}>
                <div 
                  style={{ 
                    ...styles.bar, 
                    height: `${height}px`,
                    background: `linear-gradient(180deg, #10b981, #059669)`
                  }} 
                />
                <span style={styles.barLabel}>{item.month}</span>
                <span style={styles.barValue}>₹{(item.revenue / 1000).toFixed(0)}k</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Business Model */}
      <motion.div
        style={styles.modelCard}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 style={styles.sectionTitle}>Business Model</h2>
        <div style={styles.modelGrid}>
          <div style={styles.modelItem}>
            <div style={styles.modelIcon}>📋</div>
            <h4>Listing Fees</h4>
            <p>₹999 per basic listing</p>
          </div>
          <div style={styles.modelItem}>
            <div style={styles.modelIcon}>⭐</div>
            <h4>Premium Featured</h4>
            <p>₹4999/month for top placement</p>
          </div>
          <div style={styles.modelItem}>
            <div style={styles.modelIcon}>👥</div>
            <h4>Agent Subscriptions</h4>
            <p>₹1999/month - Unlimited listings + CRM</p>
          </div>
          <div style={styles.modelItem}>
            <div style={styles.modelIcon}>🏦</div>
            <h4>Transaction Commission</h4>
            <p>1-2% on successful sales</p>
          </div>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {activeStream && (
          <motion.div
            style={styles.toast}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Zap size={20} color="#10b981" />
            <span>{activeStream} boost activated! Projected +₹50K monthly</span>
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
    marginBottom: "40px"
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
  totalCard: {
    position: "relative",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "32px",
    borderRadius: "28px",
    marginBottom: "48px",
    color: "#fff",
    overflow: "hidden"
  },
  totalLabel: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "8px"
  },
  totalValue: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "8px"
  },
  totalTarget: {
    fontSize: "14px",
    opacity: 0.7
  },
  progressWrapper: {
    marginTop: "24px",
    maxWidth: "300px"
  },
  progressBar: {
    height: "8px",
    background: "#10b981",
    borderRadius: "4px",
    transition: "width 0.5s ease"
  },
  progressText: {
    fontSize: "12px",
    opacity: 0.7,
    marginTop: "8px",
    display: "block"
  },
  totalIcon: {
    position: "absolute",
    right: "32px",
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0.1
  },
  sectionTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "24px"
  },
  streamsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginBottom: "48px"
  },
  streamCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "all 0.3s"
  },
  streamIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px"
  },
  streamName: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "16px"
  },
  streamAmounts: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px"
  },
  streamLabel: {
    fontSize: "11px",
    color: "#64748b",
    textTransform: "uppercase"
  },
  streamCurrent: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a"
  },
  streamProjected: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#10b981"
  },
  streamGrowth: {
    display: "inline-block",
    fontSize: "12px",
    color: "#10b981",
    background: "#f0fdf4",
    padding: "4px 12px",
    borderRadius: "20px",
    marginBottom: "16px"
  },
  activateBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "100%",
    padding: "12px",
    background: "#f1f5f9",
    border: "none",
    borderRadius: "12px",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s"
  },
  monthlyCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    marginBottom: "48px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  monthlyHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
  },
  growthBadge: {
    padding: "4px 12px",
    background: "#f0fdf4",
    color: "#10b981",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "500"
  },
  barChart: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    gap: "16px",
    height: "280px"
  },
  barWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    flex: 1
  },
  bar: {
    width: "100%",
    maxWidth: "60px",
    borderRadius: "8px",
    transition: "height 0.5s ease"
  },
  barLabel: {
    fontSize: "12px",
    color: "#64748b"
  },
  barValue: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#0f172a"
  },
  modelCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  modelGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  },
  modelItem: {
    textAlign: "center",
    padding: "20px",
    background: "#f8fafc",
    borderRadius: "16px"
  },
  modelIcon: {
    fontSize: "2rem",
    marginBottom: "12px"
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

export default Revenue;