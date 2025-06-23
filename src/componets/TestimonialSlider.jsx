import React, { useState, useEffect } from "react";

// Award Images
import award1 from "../Assest/img6.webp";
import award2 from "../Assest/img5.webp";
import award3 from "../Assest/img3.webp";

// Profile Images
import madhura from "../Assest/madhura-girish.webp";
import supriya from "../Assest/dhan-3.webp";
import sachin from "../Assest/Sachin-Shetty-1-crore-profile.webp";

const testimonials = [
  {
    image: award1,
    profile: madhura,
    name: "Madhura Girish",
    title: "Spirituality & Healing Specialist",
    earnings: "1 CRORE EARNED",
  },
  {
    image: award2,
    profile: supriya,
    name: "Dhan Supriya",
    title: "Relationship Coach For Women",
    earnings: "25 LAKH EARNED",
  },
  {
    image: award3,
    profile: sachin,
    name: "Sachin Shetty",
    title: "Money Manifestation Coach",
    earnings: "1 CRORE EARNED",
  },
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // update visibleCount on resize
  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w < 600) setVisibleCount(1);
      else if (w < 900) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const goToSlide = (index) => {
    setStartIndex(index);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleImageClick = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const clickX = e.clientX - bounds.left;
    if (clickX > bounds.width / 2) nextSlide();
    else prevSlide();
  };

  const getVisibleTestimonials = () =>
    testimonials
      .concat(testimonials)
      .slice(startIndex, startIndex + visibleCount);

  return (
    <div
      style={{
        background: "#f1e7e7",
        padding: "60px 20px",
        fontFamily: "Outfit, sans-serif",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        Real Results, Real Stories
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {getVisibleTestimonials().map((t, idx) => (
          <div
            key={idx}
            style={{
              flex: visibleCount === 1 ? "0 0 90%" : visibleCount === 2 ? "0 0 45%" : "0 0 30%",
              maxWidth:
                visibleCount === 1
                  ? "90%"
                  : visibleCount === 2
                  ? "45%"
                  : "30%",
              background: "#fff",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ width: "100%", height: "200px", overflow: "hidden" }}
              onClick={handleImageClick}
            >
              <img
                src={t.image}
                alt="award"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={t.profile}
                  alt="profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    {t.title}
                  </div>
                </div>
              </div>

              <div
                style={{
                  border: "2px dotted #000",
                  padding: "8px 18px",
                  display: "inline-block",
                  borderRadius: "12px",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                💰 {t.earnings}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: startIndex === idx ? "#000" : "#ccc",
              cursor: "pointer",
              display: "inline-block",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
