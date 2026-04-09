import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    // Mock submission
    setTimeout(() => {
      setStatus("✅ Message sent successfully! We'll reply within 24 hours.");
      setFormData({ name: "", email: "", message: "", phone: "" });
      setLoading(false);
    }, 2000);
  };

  // ✅ base input style (fixes your error)
  const inputBase = {
    padding: "18px 20px",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "1rem",
    transition: "all 0.3s",
    background: "white",
    outline: "none"
  };

  const styles = {
    contactItem: {
      display: "flex",
      gap: "20px",
      padding: "20px",
      background: "rgba(255,255,255,0.9)",
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      alignItems: "center"
    },

    icon: {
      fontSize: "2.5rem",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      borderRadius: "50%",
      color: "white"
    },

    contactTitle: {
      margin: "0 0 5px 0",
      color: "#1e3a5f",
      fontSize: "1.1rem"
    },

    contactText: {
      margin: 0,
      color: "#6b7280",
      fontSize: "1rem"
    },

    formCard: {
      background: "rgba(255,255,255,0.95)",
      padding: "40px",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.3)"
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "25px"
    },

    inputGroup: {
      display: "flex",
      flexDirection: "column"
    },

    input: inputBase,

    textarea: {
      ...inputBase,
      resize: "vertical",
      minHeight: "120px"
    },

    submitBtn: {
      padding: "20px 40px",
      background: "linear-gradient(135deg, #10b981, #059669)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s",
      boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)"
    }
  };

  return (
    <motion.div
      style={{
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3.5rem", color: "#1e3a5f", marginBottom: "20px" }}>
          Contact Us 📞
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
          Have questions about listings, partnerships, or need support? Get in touch!
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
        
        {/* LEFT INFO */}
        <div>
          <h2 style={{ fontSize: "2rem", color: "#1e3a5f", marginBottom: "30px" }}>
            Get In Touch
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <div style={styles.contactItem}>
              <div style={styles.icon}>📧</div>
              <div>
                <h4 style={styles.contactTitle}>Email</h4>
                <p style={styles.contactText}>support@estatehub.com</p>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.icon}>📞</div>
              <div>
                <h4 style={styles.contactTitle}>Phone</h4>
                <p style={styles.contactText}>+91 98765 43210</p>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.icon}>📍</div>
              <div>
                <h4 style={styles.contactTitle}>Office</h4>
                <p style={styles.contactText}>Mumbai, Maharashtra<br />India 400001</p>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.icon}>⏰</div>
              <div>
                <h4 style={styles.contactTitle}>Hours</h4>
                <p style={styles.contactText}>Mon-Fri 9AM-7PM<br />Sat 10AM-5PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <motion.div
          style={styles.formCard}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 style={{ fontSize: "2rem", color: "#1e3a5f", marginBottom: "30px" }}>
            Send Message
          </h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={styles.textarea}
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                ...styles.submitBtn,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer"
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <motion.p
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  padding: "15px",
                  borderRadius: "10px",
                  fontWeight: "500",
                  color: "#1e3a5f"
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Contact;