import React, { useState } from "react";

const faqData = [
  {
    question: "What If I Am Unable to Attend the Masterclass Live?",
    answer:
      'If for any reason you are not able to attend the masterclass, drop us an email at “purushottam@coacheasily.com” up to 15 minutes before the masterclass starts & we will reserve your seat for the next masterclass but the reason should be genuine and please note that I can do it only once.',
  },
  {
    question: "How Can I Join the Masterclass?",
    answer:
      "You will receive a confirmation email with a joining link after registration. Use that to join.",
  },
  {
    question: "Can I Ask Questions During the Masterclass?",
    answer:
      "Yes, there will be a dedicated Q&A session where you can ask questions.",
  },
  {
    question: "Where Will I be Getting My Bonuses?",
    answer:
      "Bonuses will be shared with you via email after you complete the masterclass.",
  },
  {
    question: "What Should Do If I Have Any Additional Queries?",
    answer:
      "You can contact our support team anytime at support@coacheasily.com.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ background: "#000010", width: "100%", padding: "50px 0",marginBottom:"110px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px",
          fontFamily: "Poppins, sans-serif",
          color: "#000",
          
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          FAQ’s
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              background: activeIndex === index ? "#f7c53f" : "#fff",
              marginBottom: "12px",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #ddd",
            }}
          >
            <div
              onClick={() => toggleIndex(index)}
              style={{
                cursor: "pointer",
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              <span>{item.question}</span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#000",
                  marginLeft: "10px",
                }}
              >
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div
                style={{
                  background: "#fff",
                  padding: "16px 20px",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  borderTop: "1px solid #ccc",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
