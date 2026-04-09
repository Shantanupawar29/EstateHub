import React, { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";

function Listings() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    price: "",
    bedrooms: ""
  });
  const properties = [
    { id: 1, title: "Luxury 2BHK", price: "₹1.2Cr", location: "Bandra", type: "Apartment", beds: 2 },
    { id: 2, title: "Modern Villa", price: "₹3.5Cr", location: "Lonavala", type: "Villa", beds: 4 },
    { id: 3, title: "Sea View 3BHK", price: "₹2.8Cr", location: "Alibaug", type: "Apartment", beds: 3 },
    { id: 4, title: "Penthouse", price: "₹5Cr", location: "Worli", type: "Penthouse", beds: 4 },
    { id: 5, title: "Studio Apt", price: "₹80L", location: "Bandra", type: "Studio", beds: 1 },
    { id: 6, title: "Family Home", price: "₹1.8Cr", location: "Pune", type: "Villa", beds: 3 }
  ];

  const filteredProperties = properties.filter(prop => {
    return (!filters.location || prop.location.toLowerCase().includes(filters.location.toLowerCase())) &&
           (!filters.type || prop.type === filters.type) &&
           (!filters.price || prop.price.includes(filters.price)) &&
           (!filters.bedrooms || prop.beds === parseInt(filters.bedrooms));
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto", minHeight: "100vh" }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >

        {/* HERO */}
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Find Perfect Properties </h1>
          <p style={styles.heroSubtitle}>320+ verified listings across India</p>
        </div>

        {/* FILTERS */}
        <div style={styles.filtersSection}>
          <h2 style={styles.sectionTitle}>Filters</h2>
          <div style={styles.filtersContainer}>
            <input
              name="location"
              placeholder="🔍 Search Location (Mumbai, Pune...)"
              value={filters.location}
              onChange={handleFilterChange}
              style={styles.filterInput}
            />
            
            <select name="type" value={filters.type} onChange={handleFilterChange} style={styles.filterSelect}>
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Studio">Studio</option>
            </select>

            <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange} style={styles.filterSelect}>
              <option value="">All Bedrooms</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4+ BHK</option>
            </select>

            <select name="price" value={filters.price} onChange={handleFilterChange} style={styles.filterSelect}>
              <option value="">All Prices</option>
              <option value="₹80L">Under ₹80L</option>
              <option value="₹80L">₹80L - ₹2Cr</option>
              <option value="₹2Cr">₹2Cr+</option>
            </select>

            <motion.button 
              style={styles.filterBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Apply Filters ({filteredProperties.length})
            </motion.button>
          </div>
        </div>

        {/* SORT */}
        <div style={styles.sortSection}>
          <p style={{ margin: 0, color: "#6b7280" }}>Sort by: </p>
          <select style={styles.sortSelect}>
            <option>Newest</option>
            <option>Price Low-High</option>
            <option>Price High-Low</option>
            <option>Largest Area</option>
          </select>
        </div>

        {/* PROPERTIES */}
        <h2 style={styles.sectionTitle}>Available Properties ({filteredProperties.length})</h2>
        {filteredProperties.length > 0 ? (
          <div style={styles.propertiesGrid}>
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                title={prop.title}
                price={prop.price}
                location={prop.location}
                image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500"
              />
            ))}
          </div>
        ) : (
          <div style={styles.noResults}>
            <h3>No properties match your filters 😔</h3>
            <p>Try adjusting your search criteria</p>
            <motion.button 
              style={styles.clearFiltersBtn}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFilters({ location: "", type: "", price: "", bedrooms: "" })}
            >
              Clear All Filters
            </motion.button>
          </div>
        )}

        {/* LOAD MORE */}
        <div style={styles.loadMoreSection}>
          <motion.button 
            style={styles.loadMoreBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Properties
          </motion.button>
        </div>

      </motion.div>
    </div>
  );
}

const styles = {
  hero: {
  background: "linear-gradient(135deg, rgba(119, 121, 123, 0.9), rgba(123, 124, 124, 0.9)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2070')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px 30px",   // ✅ REDUCED (was 100px)
  borderRadius: "24px",
  marginBottom: "35px",
  textAlign: "center",
  color: "white"
},

heroTitle: {
  fontSize: "2.8rem",     // ✅ reduced from 3.5rem
  marginBottom: "12px",
  textShadow: "0 4px 20px rgba(0,0,0,0.4)"
},

heroSubtitle: {
  fontSize: "1.1rem",     // ✅ smaller for compact UI
  opacity: 0.95,
  maxWidth: "600px",
  margin: "0 auto 25px"
},
  filtersSection: {
    background: "rgba(255,255,255,0.95)",
    padding: "40px",
    borderRadius: "24px",
    marginBottom: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)"
  },
  sectionTitle: {
    fontSize: "2.5rem",
    color: "#1e3a5f",
    marginBottom: "10px",
    textAlign: "center"
  },
  filtersContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 150px",
    gap: "20px",
    alignItems: "end",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  filterInput: {
    padding: "20px 25px",
    border: "2px solid #e5e7eb",
    borderRadius: "16px",
    fontSize: "1rem",
    background: "white",
    outline: "none",
    transition: "all 0.3s"
  },
  filterSelect: {
    padding: "20px 20px",
    border: "2px solid #e5e7eb",
    borderRadius: "16px",
    fontSize: "1rem",
    background: "white",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s"
  },
  filterBtn: {
    padding: "22px 30px",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(16,185,129,0.4)",
    transition: "all 0.3s"
  },
  sortSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "30px",
    justifyContent: "center"
  },
  sortSelect: {
    padding: "12px 20px",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    background: "white",
    fontSize: "1rem",
    cursor: "pointer"
  },
  propertiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: "40px",
    marginBottom: "60px"
  },
  noResults: {
    textAlign: "center",
    padding: "80px 40px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },
  clearFiltersBtn: {
    marginTop: "20px",
    padding: "15px 40px",
    background: "linear-gradient(135deg, #6b7280, #4b5563)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer"
  },
  loadMoreSection: {
    textAlign: "center"
  },
  loadMoreBtn: {
    padding: "20px 60px",
    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontSize: "1.2rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 15px 35px rgba(59,130,246,0.4)",
    transition: "all 0.3s"
  }
};

export default Listings;

