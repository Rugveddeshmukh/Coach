import React, { useEffect, useState } from "react";
import review1 from "../Assest/review1.webp";
import review2 from "../Assest/review2.webp";
import review3 from "../Assest/review3.webp";
import review4 from "../Assest/review4.webp";

const reviews = [
  { image: review1 },
  { image: review2 },
  { image: review3 },
  { image: review4 },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#f1e7e7",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "28px", fontWeight: "400", marginBottom: "40px" }}>
        Trained over 1.53 Lakh people with 715+ live sessions
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {[0, 1].map((offset) => {
          const current = (index + offset) % reviews.length;
          const r = reviews[current];
          return (
            <div
              key={current}
              style={{
                width: "370px",
                background: "#fff",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={r.image}
                alt={`review-${current}`}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Dot Navigation */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "8px" }}>
        {reviews.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: i === index ? "#222" : "#bbb",
              cursor: "pointer",
              display: "inline-block",
              transition: "background-color 0.3s",
            }}
          ></span>
        ))}
      </div>

      {/* Button Section */}
      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            background: "linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)",
            padding: "15px 30px",
            border: "none",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          See More Inside the Workshop
        </button>
        <div style={{ marginTop: "10px", fontStyle: "outfit,sans-serif", fontSize: "14px" }}>
          Registrations End on <span style={{ color: "red", fontWeight: "600" }}>22 JUN</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
