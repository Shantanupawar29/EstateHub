import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Phone, 
  MapPin, 
  Star, 
  BedDouble, 
  Bath, 
  Square, 
  ArrowRight 
} from "lucide-react";

function PropertyCard({
  title,
  price,
  location,
  image = "https://images.unsplash.com/photo-1560185121-14fc3fedd6cd?w=500&h=300&fit=crop",
  onOpenDetails // Logic to trigger the expanded view
}) {
  return (
    <div style={styles.card}>
      <motion.div 
        style={styles.cardMotion} 
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        
        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img src={image} alt={title} style={styles.image} />

          <div style={styles.statusBadge}>Featured</div>

          <div style={styles.quickActions}>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              style={styles.actionBtn}
            >
              <Heart size={18} color="#ef4444" fill="#ef4444" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              style={styles.actionBtn}
            >
              <Phone size={18} color="#2563eb" />
            </motion.button>
          </div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          
          <div style={styles.location}>
            <MapPin size={14} color="#3b82f6" />
            <span>{location}</span>
          </div>

          <h3 style={styles.title}>{title}</h3>

          <div style={styles.priceSection}>
            <div style={styles.price}>
              <span style={styles.priceValue}>{price}</span>
              <span style={styles.perSqft}>/ total</span>
            </div>

            <div style={styles.amenities}>
              <div style={styles.amenityItem}><BedDouble size={16} /> 3 Beds</div>
              <div style={styles.amenityItem}><Bath size={16} /> 2 Baths</div>
              <div style={styles.amenityItem}><Square size={16} /> 1500 sqft</div>
            </div>
          </div>

          <div style={styles.footer}>
           
<motion.button
  style={styles.viewBtn}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={onOpenDetails} // THIS IS CRITICAL
>
  View Details <ArrowRight size={16} style={{ marginLeft: '8px' }} />
</motion.button>
            <div style={styles.rating}>
              <Star size={14} fill="#f59e0b" color="#f59e0b" />
              <span>4.8</span>
              <span style={styles.reviews}>(23)</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  glassCard: {
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
  }
},
  card: {
    width: "380px",
    background: "transparent",
    borderRadius: "22px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
  cardMotion: {
    width: "100%",
    background: "#ffffff",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    border: "1px solid #f1f5f9",
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
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    boxShadow: "0 4px 10px rgba(16, 185, 129, 0.3)",
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
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    border: "none",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  content: {
    padding: "20px 22px",
  },

  location: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "14px",
    lineHeight: "1.3",
  },

  priceSection: {
    marginBottom: "18px",
  },

  price: {
    display: "flex",
    alignItems: "baseline",
    gap: "6px",
    marginBottom: "12px",
  },

  priceValue: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#0f172a",
  },

  perSqft: {
    fontSize: "13px",
    color: "#94a3b8",
    fontWeight: "500",
  },

  amenities: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderTop: "1px solid #f1f5f9",
    borderBottom: "1px solid #f1f5f9",
  },

  amenityItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#475569",
    fontWeight: "600",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
  },

  viewBtn: {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    color: "#1e293b",
    fontWeight: "700",
  },

  reviews: {
    color: "#94a3b8",
    fontSize: "12px",
    marginLeft: "2px",
    fontWeight: "500"
  },
};

export default PropertyCard;