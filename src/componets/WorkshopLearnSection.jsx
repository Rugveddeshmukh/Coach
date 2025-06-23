import React from "react";

const WorkshopLearnSection = () => {
  const leftList = [
    "How to find a profitable niche with the help of AI in just a few minutes",
    "How to make an online coaching roadmap with the help of AI",
    "How to create an irresistible offer through ChatGPT and other AI tools",
    "How to create a landing page copy with the secret prompt formula",
    "How to make attractive and winning ad copies in just 10 minutes",
  ];

  const rightList = [
    "How to craft engaging and high open-rate email and WhatsApp messages",
    "How to create a webinar storyline and script based on AIDA and PAS",
    "How to create an irresistible offer & course curriculum.",
    "How to identify a course and turn it into a profitable course idea.",
    "A complete marketing strategy that turns visitors into lifelong customers.",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #020024 100%, #090979 30%, #000000 100%)",
        color: "white",
        padding: "60px 20px",
        fontFamily: "outfit,sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        What You’ll Learn In the Workshop
      </h2>

      {/* Two Column List */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Left Column */}
        <div style={{ width: "38%", minWidth: "300px" }}>
          {leftList.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <span style={{
              color: 'black',
              backgroundColor: '#fbbc04',
              borderRadius: '4px',
              padding: '1px 5px',
              marginRight: '8px',
              fontSize: '10px'
            }}>✔</span>
              <p style={{ margin: 0, fontSize: "15px" }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div style={{ width: "38%", minWidth: "300px" }}>
          {rightList.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <span style={{
              color: 'black',
              backgroundColor: '#fbbc04',
              borderRadius: '4px',
              padding: '1px 5px',
              marginRight: '8px',
              fontSize: '10px'
            }}>✔</span>
              <p style={{ margin: 0, fontSize: "15px" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          style={{
            background: "linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)",
            border: "none",
            padding: "18px 40px",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "20px",
            cursor: "pointer",
            color: "#000",
            width:"70%",
          }}
        >
          Join Now For FREE!
        </button>
      </div>
    </div>
  );
};

export default WorkshopLearnSection;
