import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", phone: "" });
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, title: "Email", details: "support@estatehub.com", color: "#10b981" },
    { icon: Phone, title: "Phone", details: "+91 98765 43210", color: "#3b82f6" },
    { icon: MapPin, title: "Office", details: "Mumbai, Maharashtra, India 400001", color: "#f59e0b" },
    { icon: Clock, title: "Hours", details: "Mon-Fri 9AM-7PM\nSat 10AM-5PM", color: "#8b5cf6" }
  ];

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div style={styles.header}>
        <motion.span 
          style={styles.badge}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Get in Touch
        </motion.span>
        <motion.h1 
          style={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Let's Start a Conversation
        </motion.h1>
        <motion.p 
          style={styles.subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have questions about listings, partnerships, or need support? We're here to help.
        </motion.p>
      </div>

      <div style={styles.grid}>
        {/* Contact Info */}
        <motion.div
          style={styles.infoSection}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 style={styles.infoTitle}>Contact Information</h2>
          <p style={styles.infoDesc}>Reach out to us through any of these channels</p>
          
          <div style={styles.contactList}>
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                style={styles.contactCard}
                whileHover={{ x: 5 }}
              >
                <div style={{ ...styles.iconWrapper, background: `${item.color}15` }}>
                  <item.icon size={24} color={item.color} />
                </div>
                <div>
                  <h4 style={styles.contactTitle}>{item.title}</h4>
                  <p style={styles.contactDetail}>{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          style={styles.formCard}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={styles.formTitle}>Send us a Message</h2>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            
            <div style={styles.formRow}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
              <div style={styles.emptySpace} />
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
              style={{
                ...styles.submitBtn,
                opacity: loading ? 0.7 : 1
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>

            {status === "success" && (
              <motion.div 
                style={styles.successMsg}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={18} />
                Message sent successfully! We'll reply within 24 hours.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 8%",
    minHeight: "100vh",
    background: "#f8fafc"
  },
  header: {
    textAlign: "center",
    marginBottom: "60px"
  },
  badge: {
    display: "inline-block",
    padding: "8px 20px",
    background: "#10b98115",
    color: "#10b981",
    borderRadius: "100px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "16px"
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "16px"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px"
  },
  infoSection: {
    background: "#ffffff",
    borderRadius: "32px",
    padding: "40px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
  },
  infoTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "12px"
  },
  infoDesc: {
    color: "#64748b",
    marginBottom: "32px"
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    borderRadius: "20px",
    background: "#f8fafc",
    transition: "all 0.3s"
  },
  iconWrapper: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  contactTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#64748b",
    marginBottom: "4px"
  },
  contactDetail: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#0f172a",
    whiteSpace: "pre-line"
  },
  formCard: {
    background: "#ffffff",
    borderRadius: "32px",
    padding: "40px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
  },
  formTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "32px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  emptySpace: {
    display: "block"
  },
  input: {
    width: "100%",
    padding: "16px 20px",
    border: "2px solid #e2e8f0",
    borderRadius: "16px",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s",
    background: "#ffffff",
    fontFamily: "inherit"
  },
  textarea: {
    width: "100%",
    padding: "16px 20px",
    border: "2px solid #e2e8f0",
    borderRadius: "16px",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit"
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "16px 32px",
    background: "#10b981",
    color: "#ffffff",
    border: "none",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
    marginTop: "10px"
  },
  successMsg: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "16px",
    background: "#f0fdf4",
    borderRadius: "16px",
    color: "#10b981",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default Contact;