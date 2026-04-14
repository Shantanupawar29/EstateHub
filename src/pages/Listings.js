import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Grid3X3, List, ChevronDown, MapPin, BedDouble, Bath, Square } from "lucide-react";

function Listings() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: "",
    bedrooms: ""
  });
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const properties = [
    { id: 1, title: "Luxury 2BHK Apartment", price: "₹1.2Cr", location: "Bandra, Mumbai", type: "Apartment", beds: 2, baths: 2, area: "1200 sqft", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600", featured: true },
    { id: 2, title: "Modern Villa with Pool", price: "₹3.5Cr", location: "Lonavala, Pune", type: "Villa", beds: 4, baths: 4, area: "3500 sqft", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600", featured: false },
    { id: 3, title: "Sea View 3BHK", price: "₹2.8Cr", location: "Alibaug, Maharashtra", type: "Apartment", beds: 3, baths: 3, area: "1800 sqft", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600", featured: true },
    { id: 4, title: "Luxury Penthouse", price: "₹5Cr", location: "Worli, Mumbai", type: "Penthouse", beds: 4, baths: 5, area: "4200 sqft", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", featured: false },
    { id: 5, title: "Studio Apartment", price: "₹80L", location: "Bandra, Mumbai", type: "Studio", beds: 1, baths: 1, area: "550 sqft", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600", featured: false },
    { id: 6, title: "Family Villa", price: "₹1.8Cr", location: "Pune, Maharashtra", type: "Villa", beds: 3, baths: 3, area: "2200 sqft", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", featured: false }
  ];

  const filteredProperties = properties.filter(prop => {
    return (!filters.location || prop.location.toLowerCase().includes(filters.location.toLowerCase())) &&
           (!filters.type || prop.type === filters.type) &&
           (!filters.bedrooms || prop.beds === parseInt(filters.bedrooms));
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ location: "", type: "", priceRange: "", bedrooms: "" });
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Find Your Dream Property</h1>
        <p style={styles.heroSubtitle}>320+ verified listings across India's prime locations</p>
      </div>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <div style={styles.searchInputWrapper}>
          <Search size={20} color="#64748b" />
          <input 
            type="text" 
            placeholder="Search by city, locality, or project..."
            style={styles.searchInput}
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </div>
        <button 
          style={styles.filterToggleBtn}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
          Filters
          <ChevronDown size={14} style={{ transform: showFilters ? "rotate(180deg)" : "none" }} />
        </button>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div 
            style={styles.filtersPanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div style={styles.filtersGrid}>
              <select name="type" value={filters.type} onChange={handleFilterChange} style={styles.filterSelect}>
                <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Studio">Studio</option>
              </select>

              <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange} style={styles.filterSelect}>
                <option value="">Bedrooms</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </select>

              <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange} style={styles.filterSelect}>
                <option value="">Price Range</option>
                <option value="under1">Under ₹1Cr</option>
                <option value="1-2">₹1Cr - ₹2Cr</option>
                <option value="2-5">₹2Cr - ₹5Cr</option>
                <option value="5+">₹5Cr+</option>
              </select>

              <button style={styles.clearFiltersBtn} onClick={clearFilters}>
                Clear All
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Header */}
      <div style={styles.resultsHeader}>
        <p style={styles.resultsCount}>{filteredProperties.length} properties found</p>
        <div style={styles.viewToggle}>
          <button 
            style={{ ...styles.viewBtn, background: viewMode === "grid" ? "#10b981" : "#f1f5f9", color: viewMode === "grid" ? "#fff" : "#64748b" }}
            onClick={() => setViewMode("grid")}
          >
            <Grid3X3 size={16} />
          </button>
          <button 
            style={{ ...styles.viewBtn, background: viewMode === "list" ? "#10b981" : "#f1f5f9", color: viewMode === "list" ? "#fff" : "#64748b" }}
            onClick={() => setViewMode("list")}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      {filteredProperties.length > 0 ? (
        <div style={viewMode === "grid" ? styles.propertiesGrid : styles.propertiesList}>
          {filteredProperties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              style={viewMode === "grid" ? styles.propertyCard : styles.propertyCardList}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div style={styles.propertyImageWrapper}>
                <img src={prop.image} alt={prop.title} style={styles.propertyImage} />
                {prop.featured && <span style={styles.featuredBadge}>Featured</span>}
              </div>
              <div style={styles.propertyContent}>
                <h3 style={styles.propertyTitle}>{prop.title}</h3>
                <div style={styles.propertyLocation}>
                  <MapPin size={14} color="#10b981" />
                  <span>{prop.location}</span>
                </div>
                <div style={styles.propertyAmenities}>
                  <span><BedDouble size={14} /> {prop.beds} Beds</span>
                  <span><Bath size={14} /> {prop.baths} Baths</span>
                  <span><Square size={14} /> {prop.area}</span>
                </div>
                <div style={styles.propertyFooter}>
                  <span style={styles.propertyPrice}>{prop.price}</span>
                  <motion.button 
                    style={styles.viewDetailsBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div style={styles.noResults}>
          <h3>No properties found</h3>
          <p>Try adjusting your search criteria</p>
          <button style={styles.resetBtn} onClick={clearFilters}>Reset Filters</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 8%",
    minHeight: "100vh",
    background: "#f8fafc"
  },
  hero: {
    textAlign: "center",
    marginBottom: "40px"
  },
  heroTitle: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "12px"
  },
  heroSubtitle: {
    fontSize: "1.1rem",
    color: "#64748b"
  },
  searchBar: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px"
  },
  searchInputWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#ffffff",
    padding: "14px 20px",
    borderRadius: "16px",
    border: "1px solid #e2e8f0"
  },
  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "15px",
    background: "transparent"
  },
  filterToggleBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 24px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer"
  },
  filtersPanel: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    marginBottom: "32px",
    overflow: "hidden"
  },
  filtersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px"
  },
  filterSelect: {
    padding: "12px 16px",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "14px",
    background: "#ffffff",
    cursor: "pointer"
  },
  clearFiltersBtn: {
    padding: "12px 20px",
    background: "#f1f5f9",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer"
  },
  resultsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
  },
  resultsCount: {
    fontSize: "14px",
    color: "#64748b"
  },
  viewToggle: {
    display: "flex",
    gap: "8px"
  },
  viewBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s"
  },
  propertiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "30px"
  },
  propertyCard: {
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "all 0.3s"
  },
  propertyCardList: {
    display: "flex",
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    marginBottom: "20px"
  },
  propertyImageWrapper: {
    position: "relative",
    height: "240px",
    overflow: "hidden"
  },
  propertyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s"
  },
  featuredBadge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    background: "#10b981",
    color: "#fff",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
  },
  propertyContent: {
    padding: "20px"
  },
  propertyTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px"
  },
  propertyLocation: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "12px"
  },
  propertyAmenities: {
    display: "flex",
    gap: "16px",
    padding: "12px 0",
    borderTop: "1px solid #f1f5f9",
    borderBottom: "1px solid #f1f5f9",
    marginBottom: "16px",
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "13px",
      color: "#475569"
    }
  },
  propertyFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  propertyPrice: {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#10b981"
  },
  viewDetailsBtn: {
    padding: "8px 20px",
    background: "#0f172a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer"
  },
  noResults: {
    textAlign: "center",
    padding: "80px",
    background: "#ffffff",
    borderRadius: "24px"
  },
  resetBtn: {
    marginTop: "20px",
    padding: "12px 32px",
    background: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer"
  }
};

export default Listings;