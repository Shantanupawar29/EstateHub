import React from "react";
import { motion } from "framer-motion";

function PropertyCard({
  title,
  price,
  location,
  image = "https://images.unsplash.com/photo-1560185121-14fc3fedd6cd?w=500&h=300&fit=crop",
}) {
  return (
    <div style={styles.card}>
      <motion.div style={styles.cardMotion} whileHover={{ scale: 1.03 }}>
      
      {/* IMAGE SECTION */}
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />

        <div style={styles.statusBadge}>Featured</div>

        <div style={styles.quickActions}>
          <button style={styles.actionBtn}>♥</button>
          <button style={styles.actionBtn}>📱</button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        
        <div style={styles.location}>
          <span style={styles.locationIcon}>📍</span>
          <span>{location}</span>
        </div>

        <h3 style={styles.title}>{title}</h3>

        <div style={styles.priceSection}>
          <div style={styles.price}>
            <span style={styles.priceValue}>{price}</span>
            <span style={styles.perSqft}>/sqft</span>
          </div>

          <div style={styles.amenities}>
            <span>3 Beds</span>
            <span>2 Baths</span>
            <span>1500 sqft</span>
          </div>
        </div>

        <div style={styles.footer}>
          <motion.button
            style={styles.viewBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>

          <div style={styles.rating}>
            <span>★ 4.8</span>
            <span style={styles.reviews}>(23 reviews)</span>
          </div>
        </div>

      </div>
      </motion.div>
    </div>
  );
}

const styles = {
  card: {
    width: "380px",
    height: "500px",
    background: "#ffffff",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
    border: "1px solid #e5e7eb",
    fontFamily: "Arial, sans-serif",
  },
  cardMotion: {
    width: "100%",
    height: "100%",
  },

  imageContainer: {
    position: "relative",
    height: "230px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  statusBadge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    background: "#10b981",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  quickActions: {
    position: "absolute",
    top: "14px",
    right: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  actionBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(255,255,255,0.95)",
    cursor: "pointer",
    fontSize: "16px",
  },

  content: {
    padding: "20px 22px",
  },

  location: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "10px",
  },

  locationIcon: {
    fontSize: "16px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "14px",
    lineHeight: "1.3",
  },

  priceSection: {
    marginBottom: "18px",
  },

  price: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
    marginBottom: "10px",
  },

  priceValue: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#ef4444",
  },

  perSqft: {
    fontSize: "13px",
    color: "#6b7280",
  },

  amenities: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    color: "#4b5563",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "16px",
    borderTop: "1px solid #e5e7eb",
  },

  viewBtn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  rating: {
    fontSize: "14px",
    color: "#f59e0b",
    fontWeight: "600",
  },

  reviews: {
    color: "#6b7280",
    fontSize: "12px",
    marginLeft: "4px",
  },
};

export default PropertyCard;