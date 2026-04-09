import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Shared base style (FIX for your crash)
const inputBase = {
  padding: "20px 25px",
  border: "2px solid #e5e7eb",
  borderRadius: "16px",
  fontSize: "1.1rem",
  background: "white",
  outline: "none",
  transition: "all 0.3s",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};

const styles = {
  hero: {
    background:
      "linear-gradient(135deg, rgba(16,185,129,0.95), rgba(5,150,105,0.95))",
    padding: "100px 40px",
    borderRadius: "24px",
    marginBottom: "60px",
    textAlign: "center",
    color: "white"
  },
  heroTitle: {
    fontSize: "3.5rem",
    marginBottom: "20px"
  },
  heroSubtitle: {
    fontSize: "1.4rem",
    opacity: 0.95
  },

  progressBar: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "50px",
    justifyContent: "center"
  },
  progressStep: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },

  stepCard: {
    background: "rgba(255,255,255,0.95)",
    padding: "50px",
    borderRadius: "32px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    maxWidth: "900px",
    margin: "0 auto"
  },

  stepTitle: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    textAlign: "center"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "30px"
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px"
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },

  input: inputBase,

  textarea: {
    ...inputBase,
    resize: "vertical",
    minHeight: "140px",
    fontFamily: "inherit"
  },

  fileInput: {
    padding: "15px",
    border: "2px dashed #d1d5db",
    borderRadius: "16px",
    background: "#f9fafb"
  },

  btnGroup: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px"
  },

  prevBtn: {
    padding: "20px 40px",
    background: "#6b7280",
    color: "white",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer"
  },

  nextBtn: {
    padding: "20px 40px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer"
  },

  payBtn: {
    padding: "22px 50px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    minWidth: "280px"
  },

  paymentMethods: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  },

  paymentMethod: {
    padding: "25px",
    border: "2px solid #e5e7eb",
    borderRadius: "20px",
    cursor: "pointer",
    textAlign: "center",
    background: "white"
  },

  paymentMethodActive: {
    padding: "25px",
    border: "2px solid #10b981",
    borderRadius: "20px",
    cursor: "pointer",
    textAlign: "center",
    background: "#ecfdf5"
  }
};

function Sell() {
  const [step, setStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    price: "",
    location: "",
    size: "",
    description: "",
    images: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e) => {
    e?.preventDefault();
    setStep(step + 1);
  };

  const prevStep = (e) => {
    e?.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!selectedPayment) {
      alert("Please select payment method");
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <motion.div style={{ padding: "40px", textAlign: "center" }}>
        <div>
          <h1>Property Listed Successfully! ✅</h1>
          <p>Payment done via {selectedPayment}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>List Your Property 🚀</h1>
        <p style={styles.heroSubtitle}>
          Reach thousands of buyers instantly
        </p>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <form style={styles.stepCard}>
          <h2 style={styles.stepTitle}>Property Details</h2>

          <div style={styles.formRow}>
            <input
              name="propertyType"
              placeholder="Property Type"
              value={formData.propertyType}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formRow}>
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="size"
              placeholder="Size"
              value={formData.size}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
          />

          <div style={styles.btnGroup}>
            <button style={styles.nextBtn} onClick={nextStep}>
              Next →
            </button>
          </div>
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <form style={styles.stepCard}>
          <h2 style={styles.stepTitle}>Owner Details</h2>

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <div style={styles.btnGroup}>
            <button style={styles.prevBtn} onClick={prevStep}>
              Back
            </button>
            <button style={styles.nextBtn} onClick={nextStep}>
              Next →
            </button>
          </div>
        </form>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div style={styles.stepCard}>
          <h2 style={styles.stepTitle}>Payment</h2>

          <div style={styles.paymentMethods}>
            {["UPI", "Card", "NetBanking"].map((m) => (
              <div
                key={m}
                style={
                  selectedPayment === m
                    ? styles.paymentMethodActive
                    : styles.paymentMethod
                }
                onClick={() => setSelectedPayment(m)}
              >
                {m}
              </div>
            ))}
          </div>

          <button style={styles.payBtn} onClick={handleSubmit}>
            Pay ₹999
          </button>

          <div style={{ marginTop: "20px" }}>
            <button onClick={prevStep}>← Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sell;