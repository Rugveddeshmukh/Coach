import React, { useState } from "react";

const faqData = [
  {
    question: "ही PDF कुणासाठी आहे?",
    answer:
      'तुम्ही जर इंस्टाग्रामवर काहीतरी मोठं करायचं ठरवलं असेल, पण कुठून सुरू करावं हेच कळत नसेल – तर ही गाइड तुमच्यासाठी आहे. तुम्ही नवीन क्रिएटर असाल, छोटासा बिझनेस चालवत असाल, की रोज पोस्ट करूनही reach काहीच येत नाही असं वाटत असेल  तरीही ही गाइड तुमचं गेमचेंज करू शकते.',
  },
  {
    question: "मला इंस्टाग्रामची जास्त माहिती नसल्यामुळे, ही मार्गदर्शिका उपयुक्त ठरू शकेल का?",
    answer:
      "हो नक्की! तुम्हाला इंस्टाग्रामची जास्त माहिती नसली तरी काहीच बिघडत नाही. ही गाइड अगदी सुरुवातीपासून सोप्या भाषेत समजावते  step by step. तुम्ही अगदी 'zero' पासून सुरू करत असलात तरीही सहज grasp होईल, आणि आत्मविश्वासही वाढेल.",
  },
  {
    question: "प्रोफाईल सेट करण्याची माहिती यात दिलेली आहे का?",
    answer:
      "हो! प्रोफाईल सेट करायचंय ना? मग चिंता नको फोटो कसा ठेवायचा, bio काय लिहायचं, highlights कुठले टाकायचे सगळं एकदम सोप्या भाषेत समजावून दिलंय. काही दिवसांतच लोक तुमचं प्रोफाईल पाहून म्हणतील its a brand.",
  },
  {
    question: "Instagram द्वारे पैसे मिळू शकतात का?",
    answer:
      "हो ना! इंस्टाग्रामवरून खरंच पैसे मिळू शकतात आणि फक्त मोठ्या क्रिएटर्ससाठीच नाही, तर अगदी तुम्हा-आमच्यासारख्या लोकांसाठीसुद्धा. ब्रँड्सशीCollab करायचं, affiliate marketing, paid reels  पर्याय भरपूर आहेत. या गाइडमध्ये ते सगळं नीट समजावून दिलंय.",
  },
  {
    question: "मोबाईलवर ही पीडीएफ फाईल उघडता येते का?",
    answer:
      "हो, अगदी सहज! ही PDF मोबाईलवर अगदी आरामात उघडता येते – काही अडचणच नाही. मोबाईलमध्येच वाचा, शिकता शिकता इंस्टावर लगेच अ‍ॅप्लायही करा!",
  },
  {
    question: "फॉर्म भरल्यावर मला त्वरित PDF मिळेल की नाही?",
    answer:
      "हो हो! फॉर्म भरल्यानंतर लगेच PDF मिळते – आणि तुम्ही इंस्टा ग्रो करायला लगेच सुरुवात करू शकता!",
  },
  {
    question: "फॉलोअर्स वाढवण्यासाठी काही अस्सल टिप्स आहेत का?",
    answer:
      "होय! या गाइडमध्ये अशा टिप्स आहेत ज्या आम्ही स्वतः वापरून टेस्ट केल्या आहेत – आणि खरंच काम करतात. Reels कशा व्हायरल होतात, कोणत्या वेळेस पोस्ट करावं, फॉलोअर्सशी कसं कनेक्ट व्हावं, hashtags कसे वापरावेत – सगळं step-by-step दिलंय. शॉर्टकट नाहीत, पण जे टिकून राहील असा sustainable ग्रोथचा रस्ता इथे मिळतो!",
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
