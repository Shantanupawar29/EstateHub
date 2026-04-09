import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 EstateHub</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    background: "#2c3e50",
    color: "white",
    padding: "10px",
  },
};

export default Footer;