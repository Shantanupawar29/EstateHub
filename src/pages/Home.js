import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { 
  Search, MapPin, Home as HomeIcon, Users, CheckCircle, 
  TrendingUp, ArrowRight, Navigation, X, BedDouble, 
  Bath, Square, ShieldCheck, Star, Mail, Phone, 
  ChevronRight, Award, Globe, Zap, Building2, 
  Sparkles, Crown, Eye, MessageCircle, Calendar, 
  ChevronLeft, Play, Quote, BarChart3, Wallet,
  Clock, Headphones, ThumbsUp, Heart, Share2
} from "lucide-react";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Animation Constants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const endValue = parseInt(end);
          const increment = endValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={counterRef}>{count.toLocaleString()}{suffix}</span>;
};

// 3D Tilt Card Component
const TiltCard = ({ children, style }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * 10, y: x * 10 });
  };
  
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.2s ease"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const video = document.getElementById('demoVideo');
    if (video) {
      video.play().catch(e => {
        console.log("Autoplay prevented - user needs to click play button");
        const playBtn = document.querySelector('.play-button');
        if (playBtn) playBtn.style.opacity = "1";
      });
    }
  }, []);

  const properties = [
    { 
      id: 1, title: "Skyline Luxury Penthouse", price: "₹5.2Cr", location: "Worli, Mumbai", 
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      beds: 4, baths: 4, area: "3,800 sqft", rating: 4.9, reviews: 42,
      desc: "An architectural marvel offering a 360-degree view of the Arabian Sea.",
      featured: true,
      badge: "Featured"
    },
    { 
      id: 2, title: "The Emerald Villa", price: "₹3.8Cr", location: "Whitefield, Bangalore", 
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      beds: 5, baths: 5, area: "4,200 sqft", rating: 4.8, reviews: 28,
      desc: "A sustainable luxury villa integrated with solar glass.",
      featured: false,
      badge: "Eco-Luxury"
    },
    { 
      id: 3, title: "Mediterranean Seafront", price: "₹2.9Cr", location: "Anjuna, Goa", 
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      beds: 3, baths: 3, area: "2,400 sqft", rating: 4.7, reviews: 19,
      desc: "Inspired by Greek architecture with direct beach access.",
      featured: false,
      badge: "Beachfront"
    },
    { 
      id: 4, title: "Modernist Estate", price: "₹7.5Cr", location: "Prithviraj Rd, Delhi", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      beds: 6, baths: 7, area: "8,500 sqft", rating: 5.0, reviews: 12,
      desc: "A sprawling heritage estate modernized with luxury amenities.",
      featured: true,
      badge: "Heritage"
    }
  ];

  const trendingProperties = [
    { id: 5, title: "Sunset Bay Villa", price: "₹4.2Cr", location: "Goa", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Royal Heritage", price: "₹12.5Cr", location: "Jaipur", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "Tech Park Residency", price: "₹2.95Cr", location: "Hyderabad", image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Riverfront Estate", price: "₹6.75Cr", location: "Ahmedabad", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" }
  ];

  const services = [
    { icon: <Building2 size={28} />, title: "Property Management", desc: "End-to-end management for NRI owners and investors." },
    { icon: <Zap size={28} />, title: "Smart Valuation", desc: "AI-driven algorithms to provide the most accurate market price." },
    { icon: <ShieldCheck size={28} />, title: "Legal Assistance", desc: "Expert vetting of documents and seamless registration process." },
    { icon: <TrendingUp size={28} />, title: "Investment Advisory", desc: "Strategic portfolio management for maximum returns." }
  ];

  const testimonials = [
    { name: "Priyanka Sharma", role: "CEO, TechStart Ventures", content: "The team at LuxeEstates found us our dream office space in record time. Their attention to detail and market knowledge is unparalleled.", rating: 5, image: "https://i.pravatar.cc/150?img=1" },
    { name: "Rajiv Mehta", role: "NRI Investor", content: "As an NRI, I needed someone I could trust. LuxeEstates made the entire process transparent and hassle-free. Highly recommended!", rating: 5, image: "https://i.pravatar.cc/150?img=3" },
    { name: "Ananya Reddy", role: "Homeowner", content: "From search to possession, every step was smooth. The virtual tour and legal support were game-changers for us.", rating: 5, image: "https://i.pravatar.cc/150?img=5" }
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      style={styles.mainWrapper} 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      {/* --- HERO SECTION --- */}
      <section style={styles.heroSection} ref={heroRef}>
        <motion.div style={{ ...styles.heroVideoWrapper, opacity: heroOpacity, scale: heroScale }}>
          <div style={styles.heroVideoContainer}>
            <video autoPlay loop muted playsInline style={styles.heroVideo}>
              <source src="/estatehub.mp4" type="video/mp4" />
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80" style={styles.heroImage} alt="Luxury Home" />
            </video>
            <div style={styles.heroGradient} />
          </div>
        </motion.div>

        <div style={styles.heroContent}>
          <motion.div variants={fadeInUp} style={styles.heroTag}>
            <Sparkles size={14} /> 
            <span>#1 Rated Luxury Real Estate Platform</span>
            <div style={styles.ratingBadge}>
              <Star size={12} fill="#fbbf24" stroke="#fbbf24" />
              <span>4.9/5</span>
            </div>
          </motion.div>
          
          <motion.h1 style={styles.heroTitle} variants={fadeInUp}>
            Discover Your<br />
            <span style={{ background: "linear-gradient(135deg, #34d399, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Extraordinary Space
            </span>
          </motion.h1>
          
          <motion.p style={styles.heroSubtitle} variants={fadeInUp}>
            Curated premium properties for the discerning investor. 
            Verified listings, exclusive locations, and seamless digital transactions.
          </motion.p>

          <motion.div style={styles.searchContainer} variants={fadeInUp}>
            <div style={styles.searchInner}>
              <div style={styles.searchField}>
                <MapPin size={20} color="#10b981" />
                <div style={styles.searchFieldText}>
                  <label style={styles.label}>Location</label>
                  <input placeholder="Enter city or locality" style={styles.input} defaultValue="Mumbai" />
                </div>
              </div>
              <div style={styles.searchDivider} />
              <div style={styles.searchField}>
                <HomeIcon size={20} color="#10b981" />
                <div style={styles.searchFieldText}>
                  <label style={styles.label}>Property Type</label>
                  <input placeholder="Villa / Apartment / Penthouse" style={styles.input} />
                </div>
              </div>
              <div style={styles.searchDivider} />
              <div style={styles.searchField}>
                <Wallet size={20} color="#10b981" />
                <div style={styles.searchFieldText}>
                  <label style={styles.label}>Budget Range</label>
                  <input placeholder="Min - Max" style={styles.input} />
                </div>
              </div>
              <button style={styles.searchBtn}>
                <Search size={18} /> 
                <span>Search</span>
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} style={styles.heroTrustBadges}>
            <div style={styles.trustItem}><ShieldCheck size={16} color="#10b981" /><span>100% Verified Listings</span></div>
            <div style={styles.trustItem}><Users size={16} color="#10b981" /><span>10,000+ Happy Clients</span></div>
            <div style={styles.trustItem}><Globe size={16} color="#10b981" /><span>Pan-India Presence</span></div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR WITH ANIMATED COUNTERS --- */}
      <section style={styles.statsBar}>
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <div style={styles.statIcon}><Building2 size={24} color="#10b981" /></div>
            <div>
              <h3 style={styles.statNum}><AnimatedCounter end="12000" suffix="+" /></h3>
              <p style={styles.statTxt}>Premium Listings</p>
            </div>
          </div>
          <div style={styles.statSeparator} />
          <div style={styles.statBox}>
            <div style={styles.statIcon}><Wallet size={24} color="#10b981" /></div>
            <div>
              <h3 style={styles.statNum}>₹<AnimatedCounter end="800" suffix="Cr+" /></h3>
              <p style={styles.statTxt}>Asset Value Managed</p>
            </div>
          </div>
          <div style={styles.statSeparator} />
          <div style={styles.statBox}>
            <div style={styles.statIcon}><ThumbsUp size={24} color="#10b981" /></div>
            <div>
              <h3 style={styles.statNum}><AnimatedCounter end="4" />.9/5</h3>
              <p style={styles.statTxt}>Client Satisfaction</p>
            </div>
          </div>
          <div style={styles.statSeparator} />
          <div style={styles.statBox}>
            <div style={styles.statIcon}><Headphones size={24} color="#10b981" /></div>
            <div>
              <h3 style={styles.statNum}>24/7</h3>
              <p style={styles.statTxt}>Concierge Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HORIZONTAL CAROUSEL (PINTEREST STYLE) --- */}
      <section style={styles.carouselSection}>
        <div style={styles.carouselHeader}>
          <div>
            <span style={styles.sectionTag}>Trending Now</span>
            <h2 style={styles.carouselTitle}>Most Viewed Properties</h2>
            <p style={styles.carouselSub}>Discover what everyone is talking about</p>
          </div>
          <div style={styles.carouselArrows}>
            <button onClick={() => scrollCarousel('left')} style={styles.carouselArrow}>←</button>
            <button onClick={() => scrollCarousel('right')} style={styles.carouselArrow}>→</button>
          </div>
        </div>
        
        <div ref={carouselRef} style={styles.carouselContainer}>
          {trendingProperties.map((prop) => (
            <motion.div key={prop.id} style={styles.carouselCard} whileHover={{ scale: 0.98, y: -10 }}>
              <img src={prop.image} alt={prop.title} style={styles.carouselImage} />
              <div style={styles.carouselOverlay}>
                <h4>{prop.title}</h4>
                <p>{prop.location}</p>
                <span style={styles.carouselPrice}>{prop.price}</span>
                <div style={styles.carouselActions}>
                  <Heart size={18} color="#fff" />
                  <Share2 size={18} color="#fff" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SERVICES SECTION WITH GLASSMORPHISM + GRADIENT BORDERS + 3D TILT --- */}
      <section style={styles.sectionContainer}>
        <motion.div variants={fadeInUp} style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Why Choose Us</span>
          <h2 style={styles.sectionTitle}>Elevating Real Estate<br />To An Art Form</h2>
          <p style={styles.sectionSub}>Comprehensive services designed for the modern investor.</p>
        </motion.div>
        
        <div style={styles.servicesGrid}>
          {services.map((s, i) => (
            <TiltCard key={i} style={styles.glassCard}>
              <div style={styles.gradientBorderCard}>
                <div style={styles.gradientBorderContent}>
                  <div style={styles.serviceIcon}>{s.icon}</div>
                  <h4 style={styles.serviceTitle}>{s.title}</h4>
                  <p style={styles.serviceDesc}>{s.desc}</p>
                  <button style={styles.textLink} onClick={() => alert(`Learn more about ${s.title}`)}>
                    Learn More <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* --- FEATURED PROPERTIES --- */}
      <section style={{ ...styles.sectionContainer, background: "#f8fafc", padding: "100px 8%" }}>
        <motion.div variants={fadeInUp} style={styles.sectionHeader}>
          <div style={styles.flexHeader}>
            <div>
              <span style={styles.sectionTag}>Curated Collections</span>
              <h2 style={styles.sectionTitle}>Exceptional Homes,<br />Exceptional Locations</h2>
              <p style={styles.sectionSub}>Hand-picked properties across prime Indian metros.</p>
            </div>
            <button style={styles.outlineBtn}>View All Listings <ArrowRight size={16} /></button>
          </div>
        </motion.div>

        <div style={styles.propertiesGrid}>
          {properties.map((prop) => (
            <TiltCard key={prop.id}>
              <motion.div whileHover={{ y: -8 }} style={{ cursor: "pointer" }} onClick={() => setSelectedProperty(prop)}>
                <PropertyCard {...prop} />
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* --- FEATURED SECTION WITH VIDEO --- */}
      <section style={styles.featuredSection}>
        <div style={styles.featuredContainer}>
          <motion.div variants={fadeInUp} style={styles.featuredContent}>
            <span style={styles.sectionTag}>Virtual Experience</span>
            <h2 style={styles.featuredTitle}>Experience Properties<br />In Immersive 3D</h2>
            <p style={styles.featuredDesc}>Take a virtual tour of our premium listings from anywhere in the world. Our cutting-edge technology brings properties to life.</p>
            <div style={styles.featuredStats}>
              <div><h4>500+</h4><p>3D Tours Available</p></div>
              <div><h4>24/7</h4><p>Live Assistance</p></div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} style={styles.featuredMedia}>
            <div style={styles.videoThumbnail}>
              <video id="demoVideo" style={{ width: "100%", borderRadius: "24px", cursor: "pointer" }} poster="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" loop muted>
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>
              <div style={styles.playButton} onClick={(e) => {
                const video = document.getElementById('demoVideo');
                if (video.paused) { video.play(); e.currentTarget.style.opacity = "0"; } 
                else { video.pause(); e.currentTarget.style.opacity = "1"; }
              }}>
                <Play size={24} fill="#fff" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section style={styles.sectionContainer}>
        <motion.div variants={fadeInUp} style={styles.testimonialHeader}>
          <span style={styles.sectionTag}>Testimonials</span>
          <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
          <p style={styles.sectionSub}>Trusted by India's most discerning property investors.</p>
        </motion.div>
        
        <div style={styles.testimonialContainer}>
          <button style={styles.testimonialNav} onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}>
            <ChevronLeft size={20} />
          </button>
          
          <motion.div key={activeTestimonial} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} style={styles.testimonialCard}>
            <Quote size={48} color="#10b981" opacity={0.2} style={styles.quoteIcon} />
            <p style={styles.testimonialText}>"{testimonials[activeTestimonial].content}"</p>
            <div style={styles.testimonialAuthor}>
              <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} style={styles.testimonialImage} />
              <div><h4>{testimonials[activeTestimonial].name}</h4><p>{testimonials[activeTestimonial].role}</p></div>
              <div style={styles.testimonialRating}>{[...Array(5)].map((_, i) => (<Star key={i} size={14} fill="#fbbf24" stroke="#fbbf24" />))}</div>
            </div>
          </motion.div>
          
          <button style={styles.testimonialNav} onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}>
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div style={styles.testimonialDots}>
          {testimonials.map((_, idx) => (<button key={idx} style={{ ...styles.dot, background: activeTestimonial === idx ? "#10b981" : "#e2e8f0" }} onClick={() => setActiveTestimonial(idx)} />))}
        </div>
      </section>

      {/* --- MAP INTEGRATION --- */}
      <section style={styles.mapSection}>
        <div style={styles.mapOverlay}>
          <h2 style={styles.mapTitle}>Find Your Perfect Location</h2>
          <p style={styles.mapSub}>Explore our presence across India's prime real estate markets</p>
        </div>
        <div style={styles.mapWrapperOuter}>
          <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            <Marker position={[19.076, 72.8777]}><Popup>Mumbai | 450+ Listings</Popup></Marker>
            <Marker position={[28.6139, 77.209]}><Popup>Delhi NCR | 380+ Listings</Popup></Marker>
            <Marker position={[12.9716, 77.5946]}><Popup>Bangalore | 520+ Listings</Popup></Marker>
            <Marker position={[22.5726, 88.3639]}><Popup>Kolkata | 200+ Listings</Popup></Marker>
          </MapContainer>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section style={styles.newsletterSection}>
        <div style={styles.newsletterContent}>
          <motion.div variants={fadeInUp}>
            <Crown size={40} color="#10b981" style={{ marginBottom: "24px" }} />
            <h2 style={styles.newsletterTitle}>Join The Inner Circle</h2>
            <p style={styles.newsletterSub}>Get exclusive access to off-market properties and investment insights.</p>
            <div style={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email address" style={styles.newsletterInput} value={email} onChange={(e) => setEmail(e.target.value)} />
              <button style={styles.newsletterBtn}>Subscribe <ArrowRight size={18} /></button>
            </div>
            <p style={styles.privacyNote}><ShieldCheck size={12} /> No spam, ever. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div style={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProperty(null)}>
            <motion.div style={styles.modalContent} initial={{ y: 50, opacity: 0, scale: 0.95 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 50, opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
              <button style={styles.modalClose} onClick={() => setSelectedProperty(null)}><X size={20} /></button>
              <div style={styles.modalGrid}>
                <div style={styles.modalGallery}>
                  <img src={selectedProperty.image} alt="Main" style={styles.modalMainImg} />
                  <div style={styles.modalMiniGrid}>
                    <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400" alt="Kitchen" style={styles.miniImg} />
                    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400" alt="Bedroom" style={styles.miniImg} />
                    <img src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?w=400" alt="Living" style={styles.miniImg} />
                    <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400" alt="Bath" style={styles.miniImg} />
                  </div>
                </div>
                <div style={styles.modalInfo}>
                  <div style={styles.modalHeaderRow}><h2 style={styles.modalTitle}>{selectedProperty.title}</h2><div style={styles.modalPriceTag}>{selectedProperty.price}</div></div>
                  <div style={styles.modalLocRow}><MapPin size={16} color="#10b981" /> <span>{selectedProperty.location}</span></div>
                  <div style={styles.modalIconBar}>
                    <div style={styles.modalIconItem}><BedDouble size={18}/> <span>{selectedProperty.beds} Beds</span></div>
                    <div style={styles.modalIconItem}><Bath size={18}/> <span>{selectedProperty.baths} Baths</span></div>
                    <div style={styles.modalIconItem}><Square size={18}/> <span>{selectedProperty.area}</span></div>
                  </div>
                  <div style={styles.ratingSection}><div style={styles.ratingStars}><Star size={16} fill="#fbbf24" stroke="#fbbf24" /><span>{selectedProperty.rating}</span></div><span>({selectedProperty.reviews} reviews)</span></div>
                  <h4 style={styles.modalSubheading}>Property Description</h4>
                  <p style={styles.modalLongDesc}>{selectedProperty.desc}</p>
                  <div style={styles.expertCard}>
                    <img src="https://i.pravatar.cc/150?img=4" alt="Agent" style={styles.agentAvatar} />
                    <div style={styles.agentInfo}><span style={styles.agentName}>Vikram Malhotra</span><span style={styles.agentTitle}>Senior Portfolio Manager</span></div>
                    <button style={styles.agentContact}><Phone size={16} /></button>
                    <button style={styles.agentContact}><MessageCircle size={16} /></button>
                  </div>
                  <button style={styles.bookTourBtn}><Calendar size={18} /> Schedule Private Tour</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}

const styles = {
  mainWrapper: {
    background: "#ffffff",
    overflowX: "hidden",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  heroVideoWrapper: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: "hidden", zIndex: 0 },
  heroVideoContainer: { width: "100%", height: "100%", position: "relative" },
  heroVideo: { width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  heroImage: { width: "100%", height: "100%", objectFit: "cover" },
  heroGradient: { position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)" },
  heroSection: { position: "relative", height: "100vh", minHeight: "800px", display: "flex", alignItems: "center", padding: "0 8%", marginBottom: "0px" },
  heroContent: { position: "relative", zIndex: 2, maxWidth: "800px", color: "#ffffff" },
  heroTag: { display: "inline-flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: "8px 20px", borderRadius: "100px", fontSize: "13px", fontWeight: "500", marginBottom: "32px", border: "1px solid rgba(255,255,255,0.2)" },
  ratingBadge: { display: "inline-flex", alignItems: "center", gap: "4px", background: "rgba(16,185,129,0.2)", padding: "4px 10px", borderRadius: "100px", marginLeft: "8px" },
  heroTitle: { fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: "700", lineHeight: "1.15", marginBottom: "24px", letterSpacing: "-0.03em", color: "#ffffff" },
  heroSubtitle: { fontSize: "1.1rem", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", marginBottom: "48px", maxWidth: "550px" },
  searchContainer: { background: "#ffffff", borderRadius: "20px", padding: "8px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", width: "100%", maxWidth: "850px", marginBottom: "32px" },
  searchInner: { display: "flex", alignItems: "center", gap: "8px" },
  searchField: { flex: 1, display: "flex", alignItems: "center", gap: "12px", padding: "8px 16px" },
  searchFieldText: { display: "flex", flexDirection: "column", flex: 1 },
  label: { fontSize: "11px", fontWeight: "600", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" },
  input: { border: "none", outline: "none", fontSize: "14px", color: "#0f172a", fontWeight: "500", width: "100%", background: "transparent" },
  searchDivider: { width: "1px", height: "40px", background: "#e2e8f0" },
  searchBtn: { background: "#10b981", color: "#ffffff", border: "none", padding: "14px 32px", borderRadius: "16px", fontSize: "14px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap" },
  heroTrustBadges: { display: "flex", gap: "24px", flexWrap: "wrap" },
  trustItem: { display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.8)" },
  statsBar: { background: "#ffffff", borderBottom: "1px solid #f1f5f9", padding: "32px 8%" },
  statsContainer: { display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" },
  statBox: { display: "flex", alignItems: "center", gap: "16px" },
  statIcon: { width: "48px", height: "48px", background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  statNum: { fontSize: "1.75rem", fontWeight: "700", color: "#0f172a", marginBottom: "2px" },
  statTxt: { fontSize: "13px", color: "#64748b", fontWeight: "500" },
  statSeparator: { width: "1px", height: "40px", background: "#e2e8f0" },
  
  // Carousel Styles
  carouselSection: { padding: "60px 8%", background: "#ffffff" },
  carouselHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" },
  carouselTitle: { fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: "700", color: "#0f172a", marginBottom: "8px" },
  carouselSub: { fontSize: "0.95rem", color: "#64748b" },
  carouselArrows: { display: "flex", gap: "12px" },
  carouselArrow: { width: "48px", height: "48px", borderRadius: "50%", background: "#ffffff", border: "1px solid #e2e8f0", cursor: "pointer", fontSize: "20px", transition: "all 0.3s" },
  carouselContainer: { display: "flex", overflowX: "auto", gap: "24px", scrollBehavior: "smooth", scrollSnapType: "x mandatory", "&::-webkit-scrollbar": { display: "none" } },
  carouselCard: { minWidth: "300px", position: "relative", borderRadius: "20px", overflow: "hidden", scrollSnapAlign: "start", cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" },
  carouselImage: { width: "100%", height: "280px", objectFit: "cover" },
  carouselOverlay: { position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)", padding: "20px", color: "#fff" },
  carouselPrice: { display: "inline-block", marginTop: "8px", fontSize: "18px", fontWeight: "700", color: "#10b981" },
  carouselActions: { display: "flex", gap: "12px", marginTop: "12px" },
  
  // Glassmorphism + Gradient Border Styles
  glassCard: { background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.2)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" },
  gradientBorderCard: { position: "relative", background: "linear-gradient(90deg, #10b981, #3b82f6, #10b981)", backgroundSize: "200% 200%", borderRadius: "24px", padding: "2px", animation: "gradientShift 3s ease infinite" },
  gradientBorderContent: { background: "#ffffff", borderRadius: "22px", padding: "32px", textAlign: "center" },
  
  sectionContainer: { padding: "60px 8%" },
  sectionHeader: { textAlign: "center", marginBottom: "60px" },
  sectionTag: { display: "inline-block", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", color: "#10b981", marginBottom: "16px" },
  flexHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" },
  sectionTitle: { fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "700", color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.02em" },
  sectionSub: { fontSize: "1rem", color: "#64748b", maxWidth: "600px", margin: "0 auto" },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", maxWidth: "1200px", margin: "0 auto" },
  serviceIcon: { width: "70px", height: "70px", background: "#f0fdf4", color: "#10b981", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", marginLeft: "auto", marginRight: "auto" },
  serviceTitle: { fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", color: "#0f172a" },
  serviceDesc: { color: "#64748b", lineHeight: "1.6", marginBottom: "20px", fontSize: "14px" },
  textLink: { background: "none", border: "none", color: "#10b981", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "14px" },
  outlineBtn: { padding: "12px 28px", borderRadius: "12px", border: "1.5px solid #e2e8f0", background: "transparent", fontWeight: "600", color: "#0f172a", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" },
  propertiesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", maxWidth: "1400px", margin: "0 auto" },
  featuredSection: { padding: "80px 8%", background: "#f8fafc" },
  featuredContainer: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", maxWidth: "1200px", margin: "0 auto", alignItems: "center" },
  featuredContent: { textAlign: "left" },
  featuredTitle: { fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: "700", color: "#0f172a", marginBottom: "20px", lineHeight: "1.2" },
  featuredDesc: { fontSize: "1rem", color: "#64748b", lineHeight: "1.6", marginBottom: "32px" },
  featuredStats: { display: "flex", gap: "40px", marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0" },
  featuredMedia: { position: "relative" },
  videoThumbnail: { position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" },
  playButton: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70px", height: "70px", background: "#10b981", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.5)", animation: "pulse 2s infinite", zIndex: 2 },
  testimonialHeader: { textAlign: "center", marginBottom: "60px" },
  testimonialContainer: { display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", maxWidth: "800px", margin: "0 auto", position: "relative" },
  testimonialNav: { width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #e2e8f0", background: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
  testimonialCard: { flex: 1, padding: "48px", background: "#ffffff", borderRadius: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", position: "relative", textAlign: "center" },
  quoteIcon: { position: "absolute", top: "30px", left: "30px" },
  testimonialText: { fontSize: "1.2rem", lineHeight: "1.7", color: "#334155", marginBottom: "32px", fontStyle: "italic" },
  testimonialAuthor: { display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "24px" },
  testimonialImage: { width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" },
  testimonialRating: { display: "flex", gap: "4px" },
  testimonialDots: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" },
  dot: { width: "8px", height: "8px", borderRadius: "50%", border: "none", cursor: "pointer" },
  mapSection: { position: "relative", height: "500px", margin: "0 8% 100px 8%", borderRadius: "32px", overflow: "hidden" },
  mapOverlay: { position: "absolute", top: 0, left: 0, right: 0, padding: "40px", background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)", zIndex: 1, color: "#ffffff" },
  mapTitle: { fontSize: "1.8rem", fontWeight: "700", marginBottom: "8px" },
  mapSub: { fontSize: "0.9rem", opacity: 0.9 },
  mapWrapperOuter: { height: "100%", width: "100%" },
  newsletterSection: { padding: "80px 8%", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", margin: "0 8% 100px 8%", borderRadius: "32px", textAlign: "center" },
  newsletterContent: { maxWidth: "600px", margin: "0 auto" },
  newsletterTitle: { fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: "700", color: "#ffffff", marginBottom: "16px" },
  newsletterSub: { color: "#94a3b8", marginBottom: "32px" },
  newsletterForm: { display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" },
  newsletterInput: { flex: 1, padding: "14px 20px", borderRadius: "12px", border: "1px solid #334155", background: "#1e293b", color: "#ffffff", outline: "none", fontSize: "14px" },
  newsletterBtn: { padding: "14px 32px", borderRadius: "12px", border: "none", background: "#10b981", color: "#ffffff", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" },
  privacyNote: { fontSize: "12px", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  modalContent: { background: "#ffffff", width: "100%", maxWidth: "1100px", maxHeight: "90vh", borderRadius: "32px", overflowY: "auto", position: "relative" },
  modalClose: { position: "absolute", top: "20px", right: "20px", background: "#ffffff", border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", zIndex: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
  modalGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" },
  modalGallery: { padding: "24px", background: "#f8fafc" },
  modalMainImg: { width: "100%", height: "300px", objectFit: "cover", borderRadius: "20px", marginBottom: "16px" },
  modalMiniGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" },
  miniImg: { width: "100%", height: "100px", objectFit: "cover", borderRadius: "12px" },
  modalInfo: { padding: "40px", background: "#ffffff" },
  modalHeaderRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "12px" },
  modalTitle: { fontSize: "1.6rem", fontWeight: "700", color: "#0f172a" },
  modalPriceTag: { fontSize: "1.5rem", fontWeight: "700", color: "#10b981" },
  modalLocRow: { display: "flex", alignItems: "center", gap: "8px", color: "#64748b", marginBottom: "24px", fontSize: "14px" },
  modalIconBar: { display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", marginBottom: "24px" },
  modalIconItem: { display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "500", color: "#334155" },
  ratingSection: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" },
  ratingStars: { display: "flex", alignItems: "center", gap: "4px", background: "#f0fdf4", padding: "4px 10px", borderRadius: "100px" },
  modalSubheading: { fontSize: "1rem", fontWeight: "700", marginBottom: "12px", color: "#0f172a" },
  modalLongDesc: { color: "#64748b", lineHeight: "1.6", marginBottom: "32px", fontSize: "14px" },
  expertCard: { background: "#f8fafc", padding: "16px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" },
  agentAvatar: { width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" },
  agentInfo: { flex: 1, display: "flex", flexDirection: "column" },
  agentName: { fontWeight: "700", color: "#0f172a", fontSize: "14px" },
  agentTitle: { fontSize: "12px", color: "#64748b" },
  agentContact: { width: "40px", height: "40px", borderRadius: "10px", border: "none", background: "#ffffff", cursor: "pointer" },
  bookTourBtn: { width: "100%", padding: "14px", borderRadius: "12px", border: "none", background: "#0f172a", color: "#ffffff", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }
};

export default Home;