import React from "react";
import { motion } from "framer-motion";
import { Bar, Pie, Line } from "react-chartjs-2";
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
        borderRadius: 8
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
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: true
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
          color: "#1e3a5f",
          font: { size: 12, weight: "500" }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#1e3a5f" }
      },
      x: {
        ticks: { color: "#1e3a5f" }
      }
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1400px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        color: "#fff"
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        {/* HERO */}
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            padding: "40px",
            borderRadius: "24px",
            marginBottom: "40px",
            textAlign: "center",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              marginBottom: "20px",
              color: "#fff",
              textShadow: "0 4px 15px rgba(0,0,0,0.4)"
            }}
          >
            Admin Dashboard
          </h1>

          <div
            style={{
              display: "flex",
              gap: "30px",
              justifyContent: "center",
              fontSize: "1.2rem",
              flexWrap: "wrap",
              color: "#f3f4f6"
            }}
          >
            <div>
              Total Revenue: <b style={{ color: "#c2ffeb" }}>₹4.8L</b>
            </div>
            <div>
              Active Users: <b style={{ color: "#c2ffeb" }}>2,000</b>
            </div>
            <div>
              Listings: <b style={{ color: "#c2ffeb" }}>320</b>
            </div>
          </div>
        </div>

        {/* KPI */}
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Key Metrics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            marginBottom: "50px"
          }}
        >
          {[
            ["₹4,80,000", "Monthly Revenue"],
            ["2,000", "Active Users"],
            ["320", "Properties Listed"],
            ["12,500", "Ad Clicks"],
            ["4.2%", "Conversion Rate"],
            ["5x", "ROI"]
          ].map(([value, label], i) => (
            <div key={i} style={styles.statCard}>
              <h3 style={{ color: "#1e3a5f", fontSize: "1.6rem" }}>{value}</h3>
              <p style={{ color: "#6b7280" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* CHARTS */}
        <div style={styles.chartGrid}>
          <div style={styles.chartCard}>
            <h3>Revenue by Source</h3>
            <div style={{ height: "320px", width: "100%" }}>
              <Bar data={revenueData} options={chartOptions} />
            </div>
          </div>

          <div style={styles.chartCard}>
            <h3>Users from Ads</h3>
            <div style={{ height: "320px", width: "100%" }}>
              <Pie data={adPieData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div style={styles.chartGrid}>
          <div style={styles.chartCard}>
            <h3>User Growth</h3>
            <div style={{ height: "320px", width: "100%" }}>
              <Line data={userGrowthData} options={chartOptions} />
            </div>
          </div>

          <div style={styles.chartCard}>
            <h3>Monthly Revenue</h3>
            <div style={{ height: "320px", width: "100%" }}>
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr"],
                  datasets: [
                    {
                      label: "Revenue ₹L",
                      data: [2.5, 3.2, 4.1, 4.8],
                      borderColor: "#f59e0b",
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                      tension: 0.4,
                      fill: true
                    }
                  ]
                }}
                options={chartOptions}
              />
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <div style={styles.summaryGrid}>
          <div style={styles.summaryCard}>
            <h3>CRM Status</h3>
            <p>
              <b>1,500 Users</b> | 700 Issues Resolved | <b>1,200 Reviews</b>
            </p>
          </div>

          <div style={styles.summaryCard}>
            <h3>Security</h3>
            <p>HTTPS • JWT Auth • Razorpay • GDPR Compliant</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  statCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "25px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    color: "#1e3a5f"
  },

  chartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
    marginBottom: "40px"
  },

  chartCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    color: "#1e3a5f"
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px"
  },

  summaryCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "25px",
    borderRadius: "18px",
    textAlign: "center",
    color: "#1e3a5f",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
  }
};

export default AdminDashboard;