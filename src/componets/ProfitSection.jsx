import React from "react";

const ProfitSection = () => {
  const leftItems = [
    "You don’t need to be an expert in the course topic.",
    "You don't need social media followers.",
    "You don't need to know how to market your course.",
  ];

  const rightItems = [
    "You don’t need to create a course in English",
    "You don't need to know how to teach.",
    "You don’t need to be an expert in AI.",
  ];

  return (
    <div
      style={{
        backgroundColor: "#f1e7e7",
        padding: "60px 20px",
        fontFamily: "Outfit, sans-serif",
        textAlign: "center",
        color: "#000",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "800",
          marginBottom: "10px",
          fontFamily: "outfit, sans-serif"

        }}
      >
        Make Profits No Matter When And Where!
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Work part-time, or full-time, to start a real & profitable business
      </p>

      {/* Grid of Features */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Left List */}
        <div style={{ width: "45%", minWidth: "300px" }}>
          {leftItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#eefaf0",
                border: "2px solid #2ecc71",
                borderRadius: "20px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                fontSize: "16px",
                fontFamily:"outfit,sans-serif"
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#2ecc71",
                  marginRight: "12px",
                }}
              >
                🔷
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Right List */}
        <div style={{ width: "45%", minWidth: "300px" }}>
          {rightItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#eefaf0",
                border: "2px solid #2ecc71",
                borderRadius: "20px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                fontSize: "16px",
                fontFamily:"outfit,sans-serif",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#2ecc71",
                  marginRight: "12px",
                }}
              >
                🔷
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Text Below Cards */}
      <p
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginTop: "50px",
          lineHeight: "1.6",
          fontFamily:"outfit,sans-serif"
        }}
      >
        All we ask you is to be persistent and patient,<br />
        we will take care of the rest.
      </p>

      {/* CTA Button */}
        <div style={{ marginTop: "40px" }}>
          <button
            style={{
              background: "linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)",
              border: "none",
              padding: "18px 40px",
              fontSize: "22px",
              fontWeight: "bold",
              borderRadius: "20px",
              cursor: "pointer",
              color: "#000",
              width:"70%"
            }}
          >
            Join Now For FREE!
          </button>
        </div>
    </div>
  );
};

export default ProfitSection;
