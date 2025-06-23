import React, { useEffect, useState } from "react";

const AlmostFullBanner = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#fdd", "#ff4444", "#ff4444", "##ff4444"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000); // change color every 1 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.leftText}>
        <div style={styles.fullText}>
          <span style={{ color: "red", fontWeight: "700" }}>Almost Full</span>{" "}
          <span
            style={{
              color: colors[colorIndex],
              fontWeight: "600",
              transition: "color 0.5s ease-in-out",
            }}
          >
            Only 2 Seats Left
          </span>
        </div>
        <div style={styles.subText}>
          <em>
            Registrations End on{" "}
            <span style={{ color: "red", fontWeight: "700" }}>22 JUN</span>
          </em>
        </div>
      </div>

      <a href="#register" style={{ ...styles.button, animation: "wiggle 3s ease-in-out infinite" }}>
        Join Now For FREE!
      </a>

      {/* Keyframe animation for button */}
      <style>{`
        @keyframes wiggle {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "30px 20px",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    flexWrap: "wrap",
    boxSizing: "border-box",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
  },
  leftText: {
    flex: "1",
    minWidth: "280px",
  },
  fullText: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#000",
  },
  button: {
    backgroundColor: "#ffc934",
    padding: "12px 32px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "16px",
    color: "#000",
    textDecoration: "none",
    boxShadow: "0 4px 0 #000",
    transition: "all 0.3s ease",
    marginTop: "10px",
    display: "inline-block",
  },
};

export default AlmostFullBanner;
