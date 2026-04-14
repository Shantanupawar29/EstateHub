import React from "react";
import { motion } from "framer-motion";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Users, MessageCircle, AlertTriangle, Star, TrendingUp, Clock, CheckCircle, Zap } from "lucide-react";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, LineElement, ArcElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function CRM() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Customer Complaints",
        data: [45, 52, 48, 38, 42, 35],
        backgroundColor: "#ef4444",
        borderRadius: 8
      },
      {
        label: "Positive Reviews",
        data: [120, 135, 148, 162, 178, 195],
        backgroundColor: "#10b981",
        borderRadius: 8
      }
    ]
  };

  const doughnutData = {
    labels: ["Payment Issues", "App Bugs", "Support Delay", "Feature Request"],
    datasets: [{
      data: [700, 200, 100, 50],
      backgroundColor: ["#ef4444", "#f59e0b", "#8b5cf6", "#10b981"],
      borderWidth: 0
    }]
  };

  const stats = [
    { icon: Users, label: "Total Users", value: "1,528", change: "+12%", color: "#10b981" },
    { icon: MessageCircle, label: "Feedback Received", value: "2,047", change: "+8%", color: "#3b82f6" },
    { icon: AlertTriangle, label: "Open Complaints", value: "47", change: "-5%", color: "#ef4444" },
    { icon: Star, label: "Avg Rating", value: "4.8", change: "+0.3", color: "#f59e0b" }
  ];

  const alerts = [
    { type: "warning", message: "Payment failure spike detected in Mumbai region", time: "2 hours ago", icon: AlertTriangle },
    { type: "info", message: "Drop in user engagement on listings page", time: "5 hours ago", icon: TrendingUp },
    { type: "success", message: "New 5-star review received for Worli property", time: "1 day ago", icon: Star }
  ];

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>CRM Dashboard</h1>
        <p style={styles.subtitle}>Customer Relationship Management & Analytics</p>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            style={styles.statCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div style={{ ...styles.statIcon, background: `${stat.color}15` }}>
              <stat.icon size={24} color={stat.color} />
            </div>
            <div>
              <h3 style={styles.statValue}>{stat.value}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
              <span style={{ ...styles.statChange, color: stat.change.startsWith("+") ? "#10b981" : "#ef4444" }}>
                {stat.change} from last month
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div style={styles.chartsRow}>
        <motion.div
          style={styles.chartCard}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 style={styles.chartTitle}>Customer Feedback Trends</h3>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
        </motion.div>

        <motion.div
          style={styles.chartCard}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 style={styles.chartTitle}>Complaint Categories</h3>
          <div style={{ width: "250px", margin: "0 auto" }}>
            <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: true }} />
          </div>
          <div style={styles.legend}>
            {doughnutData.labels.map((label, i) => (
              <div key={i} style={styles.legendItem}>
                <div style={{ ...styles.legendColor, background: doughnutData.datasets[0].backgroundColor[i] }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Alerts Section */}
      <motion.div
        style={styles.alertsSection}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 style={styles.sectionTitle}>Recent Alerts</h3>
        <div style={styles.alertsList}>
          {alerts.map((alert, idx) => (
            <div key={idx} style={styles.alertCard}>
              <div style={{ ...styles.alertIcon, background: alert.type === "warning" ? "#fef3c7" : alert.type === "info" ? "#dbeafe" : "#d1fae5" }}>
                <alert.icon size={20} color={alert.type === "warning" ? "#f59e0b" : alert.type === "info" ? "#3b82f6" : "#10b981"} />
              </div>
              <div style={styles.alertContent}>
                <p style={styles.alertMessage}>{alert.message}</p>
                <span style={styles.alertTime}>{alert.time}</span>
              </div>
              <button style={styles.alertAction}>View Details</button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Strategy Section */}
      {/* <motion.div
        style={styles.strategySection}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 style={styles.sectionTitle}>CRM Strategy</h3>
        <div style={styles.strategyGrid}>
          <div style={styles.strategyCard}>
            <div style={styles.strategyIcon}>🎯</div>
            <h4>Lead Capture</h4>
            <p>Auto-collect buyer/seller data from listings & forms</p>
          </div>
          <div style={styles.strategyCard}>
            <div style={styles.strategyIcon}>📊</div>
            <h4>Segmentation</h4>
            <p>Classify users for targeted marketing campaigns</p>
          </div>
          <div style={styles.strategyCard}>
            <div style={styles.strategyIcon}>⚡</div>
            <h4>Automation</h4>
            <p>Auto-prioritize issues and trigger responses</p>
          </div>
          <div style={styles.strategyCard}>
            <div style={styles.strategyIcon}>🔄</div>
            <h4>Retention</h4>
            <p>Loyalty programs & review incentives</p>
          </div>
        </div>
      </motion.div> */}
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
    marginBottom: "40px"
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "8px"
  },
  subtitle: {
    fontSize: "1rem",
    color: "#64748b"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    marginBottom: "40px"
  },
  statCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  statIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  statValue: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "4px"
  },
  statLabel: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "4px"
  },
  statChange: {
    fontSize: "12px",
    fontWeight: "500"
  },
  chartsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "30px",
    marginBottom: "40px"
  },
  chartCard: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  chartTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px"
  },
  legend: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    marginTop: "20px"
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px"
  },
  legendColor: {
    width: "12px",
    height: "12px",
    borderRadius: "4px"
  },
  alertsSection: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    marginBottom: "40px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px"
  },
  alertsList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  alertCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    background: "#f8fafc",
    borderRadius: "16px"
  },
  alertIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  alertContent: {
    flex: 1
  },
  alertMessage: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#0f172a",
    marginBottom: "4px"
  },
  alertTime: {
    fontSize: "12px",
    color: "#94a3b8"
  },
  alertAction: {
    padding: "8px 16px",
    background: "transparent",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "12px",
    cursor: "pointer"
  },
  strategySection: {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },
  strategyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  strategyCard: {
    textAlign: "center",
    padding: "24px",
    background: "#f8fafc",
    borderRadius: "20px"
  },
  strategyIcon: {
    fontSize: "2rem",
    marginBottom: "12px"
  }
};

export default CRM;