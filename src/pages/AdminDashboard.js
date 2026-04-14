import React from "react";
import { motion } from "framer-motion";
import { Bar, Pie, Line } from "react-chartjs-2";
import { 
  TrendingUp, 
  Users, 
  Home, 
  Activity, 
  ShieldCheck, 
  DollarSign, 
  MousePointer2,
  Percent,
  Layers
} from "lucide-react";
import {
  Chart as ChartJS,
  BarElement,
  PieController,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  PieController,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const revenueData = {
    labels: ["Listing Fees", "Featured Ads", "Agent Plans", "Loan Commission"],
    datasets: [
      {
        label: "Current Month ₹",
        data: [200000, 150000, 80000, 50000],
        backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"],
        borderRadius: 12,
        hoverOffset: 4
      }
    ]
  };

  const adPieData = {
    labels: ["Social Ads", "Google Ads", "SEO", "Referral"],
    datasets: [
      {
        data: [5000, 3000, 2500, 2000],
        backgroundColor: ["#8b5cf6", "#f97316", "#10b981", "#3b82f6"],
        borderWidth: 0
      }
    ]
  };

  const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Users Growth",
        data: [800, 1200, 1500, 2000],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#10b981",
        pointBorderWidth: 3
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#475569",
          padding: 20,
          font: { size: 12, weight: "600", family: "'Plus Jakarta Sans', sans-serif" }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#64748b" }
      },
      x: {
        grid: { display: false },
        ticks: { color: "#64748b" }
      }
    }
  };

  return (
    <div style={styles.dashboardWrapper}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* HERO / HEADER SECTION */}
        <div style={styles.heroHeader}>
          <div style={styles.heroContent}>
            <motion.h1 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              style={styles.heroTitle}
            >
              Executive Insights
            </motion.h1>
            
            <div style={styles.topStatsRow}>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Total Revenue</span>
                <b style={styles.statValue}>₹4.8L</b>
              </div>
              <div style={styles.divider} />
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Active Users</span>
                <b style={styles.statValue}>2,000</b>
              </div>
              <div style={styles.divider} />
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Listings</span>
                <b style={styles.statValue}>320</b>
              </div>
            </div>
          </div>
        </div>

        {/* KEY METRICS GRID */}
        <h2 style={styles.sectionTitle}>Performance Overview</h2>
        <div style={styles.metricsGrid}>
          {[
            { val: "₹4,80,000", label: "Monthly Revenue", icon: <DollarSign size={20}/>, color: "#10b981" },
            { val: "2,000", label: "Active Users", icon: <Users size={20}/>, color: "#3b82f6" },
            { val: "320", label: "Properties Listed", icon: <Home size={20}/>, color: "#6366f1" },
            { val: "12,500", label: "Ad Clicks", icon: <MousePointer2 size={20}/>, color: "#f59e0b" },
            { val: "4.2%", label: "Conversion Rate", icon: <Percent size={20}/>, color: "#ef4444" },
            { val: "5x", label: "ROI", icon: <TrendingUp size={20}/>, color: "#8b5cf6" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }} 
              style={styles.statCard}
            >
              <div style={{ ...styles.iconBox, backgroundColor: `${item.color}15`, color: item.color }}>
                {item.icon}
              </div>
              <h3 style={styles.cardValue}>{item.val}</h3>
              <p style={styles.cardLabel}>{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CHARTS GRID - FIRST ROW */}
        <div style={styles.chartGrid}>
          <div style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <Layers size={18} />
              <h3>Revenue by Source</h3>
            </div>
            <div style={styles.chartContainer}>
              <Bar data={revenueData} options={chartOptions} />
            </div>
          </div>

          <div style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <TrendingUp size={18} />
              <h3>User Acquisition</h3>
            </div>
            <div style={styles.chartContainer}>
              <Pie data={adPieData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* CHARTS GRID - SECOND ROW */}
        <div style={styles.chartGrid}>
          <div style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <Activity size={18} />
              <h3>Growth Forecast</h3>
            </div>
            <div style={styles.chartContainer}>
              <Line data={userGrowthData} options={chartOptions} />
            </div>
          </div>

          <div style={styles.chartCard}>
            <div style={styles.cardHeader}>
              <DollarSign size={18} />
              <h3>Monthly Performance</h3>
            </div>
            <div style={styles.chartContainer}>
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr"],
                  datasets: [
                    {
                      label: "Revenue ₹L",
                      data: [2.5, 3.2, 4.1, 4.8],
                      borderColor: "#f59e0b",
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                      tension: 0.4,
                      fill: true,
                      pointRadius: 4
                    }
                  ]
                }}
                options={chartOptions}
              />
            </div>
          </div>
        </div>

        {/* SUMMARY SECTION */}
        <div style={styles.summaryGrid}>
          <div style={{ ...styles.summaryCard, borderLeft: '6px solid #10b981' }}>
            <div style={styles.summaryHeader}>
              <ShieldCheck color="#10b981" />
              <h3 style={{ color: '#1e3a5f' }}>CRM Operational Status</h3>
            </div>
            <p style={styles.summaryText}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>1,500 Active Users</span> • 700 Issues Resolved • 1,200 Reviews Analyzed
            </p>
          </div>

          <div style={{ ...styles.summaryCard, borderLeft: '6px solid #3b82f6' }}>
            <div style={styles.summaryHeader}>
              <ShieldCheck color="#3b82f6" />
              <h3 style={{ color: '#1e3a5f' }}>Security Protocols</h3>
            </div>
            <p style={styles.summaryText}>
              256-bit Encryption • JWT Auth • Razorpay Secured • GDPR Compliant
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  dashboardWrapper: {
    padding: "40px 20px",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    minHeight: "100vh",
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },

  heroHeader: {
    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    padding: "60px 40px",
    borderRadius: "32px",
    marginBottom: "50px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "800",
    marginBottom: "30px",
    color: "#fff",
    letterSpacing: "-1px"
  },

  topStatsRow: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background: "rgba(255,255,255,0.05)",
    padding: "20px 40px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    display: 'inline-flex'
  },

  statItem: {
    textAlign: "left"
  },

  statLabel: {
    display: "block",
    fontSize: "0.8rem",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "4px"
  },

  statValue: {
    fontSize: "1.5rem",
    color: "#c2ffeb"
  },

  divider: {
    width: "1px",
    height: "30px",
    background: "rgba(255,255,255,0.1)"
  },

  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "25px",
    paddingLeft: "10px"
  },

  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "50px"
  },

  statCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "24px",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1)",
    border: "1px solid #f1f5f9",
    textAlign: "left"
  },

  iconBox: {
    width: "45px",
    height: "45px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px"
  },

  cardValue: {
    color: "#0f172a",
    fontSize: "1.8rem",
    fontWeight: "800",
    margin: "0 0 5px 0"
  },

  cardLabel: {
    color: "#64748b",
    fontSize: "0.9rem",
    fontWeight: "600"
  },

  chartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
    gap: "30px",
    marginBottom: "30px"
  },

  chartCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "28px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    border: "1px solid #f1f5f9"
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "25px",
    color: "#1e293b",
    fontWeight: "700"
  },

  chartContainer: {
    height: "320px",
    width: "100%"
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "25px",
    marginTop: "20px"
  },

  summaryCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  summaryHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "1.1rem"
  },

  summaryText: {
    color: "#64748b",
    lineHeight: "1.6",
    fontSize: "0.95rem"
  }
};

export default AdminDashboard;