import React from "react";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function CRM() {
  const data = {
    labels: ["Complaints", "Positive Reviews", "Payment Issues", "UI Issues"],
    datasets: [
      {
        label: "Customer Feedback Analysis",
        data: [700, 1200, 500, 300],
      },
    ],
  };

  return (
    <motion.div style={{ padding: "30px" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      
      <h1> CRM Strategy & Dashboard</h1>

      <h2>Our CRM Strategy</h2>
      <div style={{background: "#f0f9ff", padding: "25px", borderRadius: "12px", marginBottom: "30px"}}>
        <h3>🎯 4-Step Customer Lifecycle:</h3>
        <ul style={{lineHeight: "2"}}>
          <li><b>1. Lead Capture:</b> Auto-collect buyer/seller data from listings & forms</li>
          <li><b>2. Segmentation:</b> Classify users (first-time buyers, investors, agents) for targeted emails</li>
          <li><b>3. Automation:</b> Feedback analysis → automatic issue prioritization → system fixes</li>
          <li><b>4. Retention:</b> Loyalty program for repeat users + review incentives</li>
        </ul>
        <p><b>CRM Integration Points:</b> Wherever needed, like auto-email after property listing submission.</p>
      </div>

      {/* STATS */}
      <div style={styles.stats}>
        <div style={styles.card}> Users<br /><b>1500</b></div>
        <div style={styles.card}> Feedback<br /><b>2000</b></div>
        <div style={styles.card}> Complaints<br /><b>700</b></div>
        <div style={styles.card}> Reviews<br /><b>1200</b></div>
      </div>

      <h2>Recent Customer Alerts </h2>

<div style={styles.grid}>
  <div style={styles.box}> Payment failure spike detected</div>
  <div style={styles.box}> Drop in user engagement</div>
  <div style={styles.box}> New 5-star review received</div>
</div>
      {/* ANALYTICS */}
      <h2>Customer Data Analysis </h2>
      <Bar data={data} />

      <p><b>[CRM Integration Point: Automated response sent to affected users]</b></p>

      {/* FEATURES */}
      <h2>Customer Complaints Analysis </h2>

<div style={styles.grid}>
  <div style={styles.box}> Payment Issues: 700 reports</div>
  <div style={styles.box}> App Bugs: 200 reports</div>
  <div style={styles.box}> Support Delay: 100 reports</div>
</div>

<h3>Insight:</h3>
<p>
Most complaints about payment failures → <b>[CRM Action: Priority tickets created + auto-refund offers]</b>
</p>

    </motion.div>
  );
}

const styles = {
  stats: { display: "flex", gap: "20px", margin: "20px 0" },
  card: {
    flex: 1,
    padding: "20px",
    background: "#1e3a5f",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
  },
  grid: { display: "flex", gap: "20px", marginTop: "20px" },
  box: {
    flex: 1,
    padding: "15px",
    background: "white",
    borderRadius: "10px",
  },
};

export default CRM;