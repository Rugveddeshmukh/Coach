import React from "react";
import YourImage from "../Assest/PH-PROFILE.webp"; // Replace with actual image path

const CoachIntroSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #020024 100%, #090979 30%, #000000 100%)",
        padding: "60px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Outfit, sans-serif",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <div style={{ width: "100%", marginBottom: "40px" }}>
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Meet Your Mentor
        </h3>
      </div>

      {/* Left Side Image */}
      <div style={{ flex: "1 1 350px", maxWidth: "400px", margin: "20px" }}>
        <img
          src={YourImage}
          alt="Coach"
          style={{
            width: "100%",
            borderRadius: "30px",
            border: "6px solid #27ae60", // green border
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right Side Text */}
      <div
        style={{
          flex: "1 1 400px",
          maxWidth: "600px",
          textAlign: "center",
          margin: "20px",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#2ecc71" }}>
          अखिलेश कुलकर्णी
        </h2>
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>
          Founder of GGM
        </h3>

        {/* Green underline */}
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#2ecc71",
            margin: "20px auto",
            borderRadius: "4px",
          }}
        />

        <p style={{ fontSize: "18px", lineHeight: "1.6", fontWeight: 500 }}>
          Hi, मी अखिलेश कुलकर्णी owner of GGM आता पर्यंत मी अनेक Buisness ला Digital Marketing
         आणि Instagram मधुन grow केलय. तर अजून जास्तीत जास्त लोका पर्यंत हा Initiative पोहचवा म्हणून आम्ही घेऊन आलोय एक Instagram Guide.
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
           Yes, I Want Growth
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachIntroSection;
