import React from "react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Home() {
  return (
    <motion.div
      style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* HERO SECTION */}
     <div style={styles.hero}>
  <div style={styles.heroOverlay}></div>

  <div style={styles.heroContent}>
    <motion.h1 style={styles.heroTitle}>
      Discover Your Dream Home
    </motion.h1>

    {/* SPACE (between title and subtitle) */}
    <div style={{ height: "18px" }} />

    <motion.p style={styles.heroSubtitle}>
      Buy, Sell & Rent properties across India with EstateHub
    </motion.p>

    {/* SPACE (between subtitle and buttons) */}
    <div style={{ height: "26px" }} />

    <motion.div style={styles.heroButtons}>
      <button style={styles.ctaPrimary}>Browse Properties</button>
      <button style={styles.ctaSecondary}>Sell Property</button>
    </motion.div>

    {/* SPACE (between buttons and search bar) */}
    <div style={{ height: "26px" }} />

    <motion.div style={styles.searchBar}>
      <input
        placeholder="Enter location, property type..."
        style={styles.searchInput}
      />
      <button style={styles.searchBtn}> Search</button>
    </motion.div>
  </div>
</div>
      {/* STATS */}
      <div style={styles.statsSection}>
        <div style={styles.stat}>
          <h3 style={{ fontSize: "3rem", color: "#1e3a5f" }}>10,000+</h3>
          <p>Happy Customers</p>
        </div>

        <div style={styles.stat}>
          <h3 style={{ fontSize: "3rem", color: "#10b981" }}>320</h3>
          <p>Active Listings</p>
        </div>

        <div style={styles.stat}>
          <h3 style={{ fontSize: "3rem", color: "#3b82f6" }}>₹4.8Cr</h3>
          <p>Total Transactions</p>
        </div>

        <div style={styles.stat}>
          <h3 style={{ fontSize: "3rem", color: "#f59e0b" }}>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </div>

      {/* FEATURED PROPERTIES */}
      <div style={{ margin: "80px 0" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1e3a5f", marginBottom: "50px" }}>
          Featured Properties
        </h2>

        <div style={styles.propertiesGrid}>
          <PropertyCard
            title="Luxury Apartment"
            price="₹1.8Cr"
            location="Mumbai"
            image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
          />

          <PropertyCard
            title="Modern Villa"
            price="₹3.5Cr"
            location="India"
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          />

          <PropertyCard
            title="Sea View Residence"
            price="₹2.8Cr"
            location="Coastal City"
            image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          />

          <PropertyCard
            title="Skyline Penthouse"
            price="₹5Cr"
            location="Metro City"
            image="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
          />
        </div>
      </div>

      {/* MAP SECTION */}
      <div style={styles.mapSection}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1e3a5f", marginBottom: "50px" }}>
          Properties Across India 🗺️
        </h2>

        <div
          style={{
            position: "relative",
            height: "500px",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          }}
        >
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[19.076, 72.8777]}>
              <Popup>
                <b>Mumbai</b> - Active Listings Area
              </Popup>
            </Marker>

            <Marker position={[28.6139, 77.209]}>
              <Popup>
                <b>Delhi</b> - High Demand Zone
              </Popup>
            </Marker>

            <Marker position={[12.9716, 77.5946]}>
              <Popup>
                <b>Bangalore</b> - IT Hub Properties
              </Popup>
            </Marker>

            <Marker position={[22.5726, 88.3639]}>
              <Popup>
                <b>Kolkata</b> - Residential Listings
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  hero: {
    height: "80vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: "40px",
    borderRadius: "24px",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
  },

  heroContent: {
    textAlign: "center",
    color: "white",
    zIndex: 2,
    maxWidth: "800px",
    padding: "0 20px",
  },

  heroTitle: {
    fontSize: "4rem",
    marginBottom: "20px",
    color: "white", // ✅ FIXED as requested
  },

  heroSubtitle: {
    fontSize: "1.4rem",
    marginBottom: "40px",
    opacity: 0.95,
  },

  heroButtons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "40px",
  },

  ctaPrimary: {
    padding: "18px 40px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontSize: "1.1rem",
    cursor: "pointer",
  },

  ctaSecondary: {
    padding: "18px 40px",
    background: "transparent",
    color: "white",
    border: "2px solid rgba(255,255,255,0.8)",
    borderRadius: "50px",
    fontSize: "1.1rem",
    cursor: "pointer",
  },

  searchBar: {
    display: "flex",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "50px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.95)",
  },

  searchInput: {
    flex: 1,
    padding: "20px",
    border: "none",
    outline: "none",
  },

  searchBtn: {
    padding: "20px 40px",
    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  statsSection: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    margin: "80px 0",
    flexWrap: "wrap",
  },

  stat: {
    textAlign: "center",
    minWidth: "200px",
  },

  propertiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    justifyItems: "center",
  },

  mapSection: {
    margin: "100px 0",
  },
};

export default Home;