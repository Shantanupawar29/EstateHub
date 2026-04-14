import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, User, CreditCard, CheckCircle, ArrowRight, 
  ArrowLeft, Upload, MapPin, DollarSign, Ruler, 
  FileText, Phone, Mail, Building2, Image, Shield,
  Sparkles, TrendingUp, Award
} from "lucide-react";

function Sell() {
  const [step, setStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const [formData, setFormData] = useState({
    propertyType: "",
    price: "",
    location: "",
    size: "",
    description: "",
    name: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages([...uploadedImages, ...files]);
  };

  const nextStep = () => {
    if (step === 1 && (!formData.propertyType || !formData.price || !formData.location)) {
      alert("Please fill all required fields");
      return;
    }
    if (step === 2 && (!formData.name || !formData.phone || !formData.email)) {
      alert("Please fill all owner details");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setStep(1);
      setFormData({
        propertyType: "", price: "", location: "", size: "",
        description: "", name: "", phone: "", email: ""
      });
      setSelectedPayment("");
      setUploadedImages([]);
    }, 3000);
  };

  const steps = [
    { number: 1, title: "Property Details", icon: Home },
    { number: 2, title: "Owner Info", icon: User },
    { number: 3, title: "Payment", icon: CreditCard }
  ];

  if (success) {
    return (
      <motion.div
        style={styles.successContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={styles.successCard}>
          <div style={styles.successIcon}>
            <CheckCircle size={64} color="#10b981" />
          </div>
          <h2 style={styles.successTitle}>Property Listed Successfully!</h2>
          <p style={styles.successText}>Your property is now live and visible to thousands of buyers</p>
          <div style={styles.paymentConfirm}>
            <Shield size={16} />
            <span>Payment completed via {selectedPayment}</span>
          </div>
          <motion.button
            style={styles.successBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSuccess(false)}
          >
            List Another Property
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBadge}>
          <Sparkles size={14} />
          <span>Sell with Confidence</span>
        </div>
        <h1 style={styles.heroTitle}>List Your Property</h1>
        <p style={styles.heroSubtitle}>Reach thousands of buyers instantly with our premium platform</p>
        
        <div style={styles.heroStats}>
          <div style={styles.heroStat}>
            <TrendingUp size={18} color="#ffffff" />
            <span>10,000+ Buyers</span>
          </div>
          <div style={styles.heroStat}>
            <Award size={18} color="#ffffff" />
            <span>98% Satisfaction</span>
          </div>
          <div style={styles.heroStat}>
            <CheckCircle size={18} color="#ffffff" />
            <span>Verified Listings</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div style={styles.progressContainer}>
        {steps.map((s, idx) => (
          <div key={s.number} style={styles.progressStep}>
            <div style={{
              ...styles.stepCircle,
              background: step >= s.number ? "#10b981" : "#e2e8f0",
              color: step >= s.number ? "#ffffff" : "#64748b"
            }}>
              {step > s.number ? <CheckCircle size={20} /> : s.number}
            </div>
            <div style={styles.stepLabel}>
              <s.icon size={14} color={step >= s.number ? "#10b981" : "#64748b"} />
              <span style={{ color: step >= s.number ? "#0f172a" : "#64748b" }}>{s.title}</span>
            </div>
            {idx < steps.length - 1 && <div style={styles.stepLine} />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          style={styles.stepCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Property Details */}
          {step === 1 && (
            <>
              <h2 style={styles.stepTitle}>Property Details</h2>
              <div style={styles.form}>
                <div style={styles.formRow}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      style={styles.select}
                    >
                      <option value="">Select Type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Studio">Studio</option>
                      <option value="Land">Land / Plot</option>
                    </select>
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Price (₹)</label>
                    <div style={styles.inputIcon}>
                      <DollarSign size={18} color="#64748b" />
                      <input
                        name="price"
                        placeholder="e.g., 15000000"
                        value={formData.price}
                        onChange={handleChange}
                        style={styles.inputWithIcon}
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Location</label>
                    <div style={styles.inputIcon}>
                      <MapPin size={18} color="#64748b" />
                      <input
                        name="location"
                        placeholder="City, Area"
                        value={formData.location}
                        onChange={handleChange}
                        style={styles.inputWithIcon}
                      />
                    </div>
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Size (sqft)</label>
                    <div style={styles.inputIcon}>
                      <Ruler size={18} color="#64748b" />
                      <input
                        name="size"
                        placeholder="e.g., 1200"
                        value={formData.size}
                        onChange={handleChange}
                        style={styles.inputWithIcon}
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Description</label>
                  <div style={styles.inputIcon}>
                    <FileText size={18} color="#64748b" />
                    <textarea
                      name="description"
                      placeholder="Describe your property..."
                      value={formData.description}
                      onChange={handleChange}
                      style={styles.textareaWithIcon}
                      rows="4"
                    />
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Upload Images</label>
                  <div style={styles.uploadArea}>
                    <Image size={32} color="#10b981" />
                    <p>Drag & drop or click to upload</p>
                    <span style={styles.uploadHint}>Max 10 images, up to 5MB each</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={styles.fileInput}
                    />
                  </div>
                  {uploadedImages.length > 0 && (
                    <div style={styles.uploadCount}>
                      <CheckCircle size={14} color="#10b981" />
                      <span>{uploadedImages.length} images selected</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Step 2: Owner Details */}
          {step === 2 && (
            <>
              <h2 style={styles.stepTitle}>Owner Details</h2>
              <div style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Full Name</label>
                  <div style={styles.inputIcon}>
                    <User size={18} color="#64748b" />
                    <input
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      style={styles.inputWithIcon}
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <div style={styles.inputIcon}>
                      <Phone size={18} color="#64748b" />
                      <input
                        name="phone"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        style={styles.inputWithIcon}
                      />
                    </div>
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address</label>
                    <div style={styles.inputIcon}>
                      <Mail size={18} color="#64748b" />
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.inputWithIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <>
              <h2 style={styles.stepTitle}>Complete Payment</h2>
              <div style={styles.paymentMethods}>
                {["UPI", "Credit/Debit Card", "NetBanking", "Wallet"].map((method) => (
                  <motion.div
                    key={method}
                    style={selectedPayment === method ? styles.paymentMethodActive : styles.paymentMethod}
                    onClick={() => setSelectedPayment(method)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div style={styles.paymentIcon}>
                      {method === "UPI" && <Smartphone size={28} />}
                      {method === "Credit/Debit Card" && <CreditCard size={28} />}
                      {method === "NetBanking" && <Building2 size={28} />}
                      {method === "Wallet" && <Wallet size={28} />}
                    </div>
                    <h4 style={styles.paymentName}>{method}</h4>
                    <p style={styles.paymentDesc}>
                      {method === "UPI" ? "Google Pay, PhonePe, Paytm" :
                       method === "Credit/Debit Card" ? "Visa, Mastercard, RuPay" :
                       method === "NetBanking" ? "All major banks" :
                       "Paytm, Amazon Pay"}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div style={styles.pricingCard}>
                <div style={styles.pricingRow}>
                  <span>Listing Fee</span>
                  <span>₹999</span>
                </div>
                <div style={styles.pricingRow}>
                  <span>GST (18%)</span>
                  <span>₹179.82</span>
                </div>
                <div style={styles.pricingTotal}>
                  <span>Total Amount</span>
                  <span>₹1,178.82</span>
                </div>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div style={styles.btnGroup}>
            {step > 1 && (
              <motion.button
                style={styles.prevBtn}
                onClick={prevStep}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft size={18} /> Back
              </motion.button>
            )}
            
            {step < 3 ? (
              <motion.button
                style={styles.nextBtn}
                onClick={nextStep}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue <ArrowRight size={18} />
              </motion.button>
            ) : (
              <motion.button
                style={styles.payBtn}
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Pay ₹1,178.82
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Trust Badge */}
      <div style={styles.trustBadge}>
        <Shield size={16} color="#10b981" />
        <span>Secure payment powered by Razorpay</span>
        <span style={styles.separator}>|</span>
        <span>100% money back guarantee</span>
        <span style={styles.separator}>|</span>
        <span>24/7 support</span>
      </div>
    </div>
  );
}

// Import missing icons
const Smartphone = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const Wallet = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    minHeight: "100vh",
    background: "#f8fafc"
  },
  hero: {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "48px 40px",
    borderRadius: "32px",
    marginBottom: "40px",
    textAlign: "center",
    color: "#ffffff"
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 14px",
    background: "rgba(16, 185, 129, 0.2)",
    borderRadius: "100px",
    fontSize: "12px",
    fontWeight: "500",
    marginBottom: "16px",
    color: "#10b981"
  },
  heroTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: "800",
    marginBottom: "12px",
    color: "#ffffff"
  },
  heroSubtitle: {
    fontSize: "1rem",
    color: "#94a3b8",
    marginBottom: "24px"
  },
  heroStats: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    flexWrap: "wrap"
  },
  heroStat: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#cbd5e1"
  },
  progressContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    position: "relative"
  },
  progressStep: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    position: "relative"
  },
  stepCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "700",
    transition: "all 0.3s",
    zIndex: 2
  },
  stepLabel: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "8px",
    fontSize: "12px"
  },
  stepLine: {
    position: "absolute",
    top: "24px",
    left: "50%",
    width: "100%",
    height: "2px",
    background: "#e2e8f0",
    zIndex: 1
  },
  stepCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
    marginBottom: "24px"
  },
  stepTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "32px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#0f172a"
  },
  inputIcon: {
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  inputWithIcon: {
    width: "100%",
    padding: "14px 16px 14px 40px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s",
    fontFamily: "inherit",
    background: "#ffffff"
  },
  textareaWithIcon: {
    width: "100%",
    padding: "14px 16px 14px 40px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
    background: "#ffffff"
  },
  select: {
    width: "100%",
    padding: "14px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    background: "#ffffff",
    cursor: "pointer"
  },
  uploadArea: {
    position: "relative",
    border: "2px dashed #e2e8f0",
    borderRadius: "16px",
    padding: "40px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s",
    background: "#fafbfc"
  },
  uploadHint: {
    display: "block",
    fontSize: "11px",
    color: "#94a3b8",
    marginTop: "8px"
  },
  fileInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer"
  },
  uploadCount: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#10b981",
    marginTop: "8px"
  },
  paymentMethods: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "32px"
  },
  paymentMethod: {
    padding: "24px",
    border: "2px solid #e2e8f0",
    borderRadius: "20px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.3s",
    background: "#ffffff"
  },
  paymentMethodActive: {
    padding: "24px",
    border: "2px solid #10b981",
    borderRadius: "20px",
    cursor: "pointer",
    textAlign: "center",
    background: "#f0fdf4"
  },
  paymentIcon: {
    marginBottom: "12px",
    color: "#10b981",
    display: "flex",
    justifyContent: "center"
  },
  paymentName: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px"
  },
  paymentDesc: {
    fontSize: "11px",
    color: "#64748b"
  },
  pricingCard: {
    background: "#f8fafc",
    padding: "24px",
    borderRadius: "20px",
    marginBottom: "32px"
  },
  pricingRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    fontSize: "14px",
    color: "#475569"
  },
  pricingTotal: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0 0",
    marginTop: "8px",
    borderTop: "1px solid #e2e8f0",
    fontSize: "18px",
    fontWeight: "700",
    color: "#0f172a"
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px"
  },
  prevBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    background: "#f1f5f9",
    border: "none",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    color: "#0f172a"
  },
  nextBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 32px",
    background: "#0f172a",
    color: "#ffffff",
    border: "none",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  },
  payBtn: {
    padding: "16px 48px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "#ffffff",
    border: "none",
    borderRadius: "16px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    marginLeft: "auto"
  },
  trustBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "16px",
    background: "#ffffff",
    borderRadius: "100px",
    fontSize: "13px",
    color: "#64748b",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  },
  separator: {
    color: "#e2e8f0"
  },
  successContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "20px"
  },
  successCard: {
    textAlign: "center",
    background: "#ffffff",
    padding: "60px",
    borderRadius: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    maxWidth: "500px"
  },
  successIcon: {
    marginBottom: "24px"
  },
  successTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "12px"
  },
  successText: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "20px"
  },
  successBtn: {
    marginTop: "24px",
    padding: "14px 32px",
    background: "#10b981",
    color: "#ffffff",
    border: "none",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  },
  paymentConfirm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "16px",
    padding: "12px",
    background: "#f0fdf4",
    borderRadius: "12px",
    color: "#10b981",
    fontSize: "13px"
  }
};

export default Sell;