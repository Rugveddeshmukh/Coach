import React from "react";

const WorkshopLearnSection = () => {
  const leftList = [
    "इस्टाग्रामचं अल्गोरिदम नेमकं काय करतं, आणि आपलं पोस्ट लोकांपर्यंत पोहोचण्यासाठी त्यात कसं फिट बसायचं – अगदी थोडक्यात, पण नेमकं.",
    "फॉलोअर्स वाढवण्यासाठी खरंच जे काम करतं ते – ना कोणते फेक apps, ना follow-unfollowचे झंझट. फक्त रिअल लोक, रिअल ग्रोथ.",
    "Reel स्क्रोल करताना लोक थांबतात का? थांबतात! का थांबतात? तेच शिकायचं – catchy hooks कसे लिहायचे हे समजावून घेणार.",
    "तुमचं प्रोफाईल बघितलं की लोक म्हणाले पाहिजे – ‘हा/ही काहीतरी करतंय!’ असा फील देणारं ब्रँडसारखं लुक कसं तयार करायचं.",
    "कधी पोस्ट टाकायचं? - ही एक छोटी गोष्ट, पण गेम चेंज करते. टाइमिंगचं गणित कसं जमवायचं ते इथे समजेल.",
  ];

  const rightList = [
    "Hashtags खरंच उपयोगी पडतात का? हो, पण योग्य असले पाहिजेत! काय चालतं, काय वाया जातं – हे क्लिअर होणार.",
    "Engagement वाढवण्यासाठी काही छोटे पण solid ट्रिक्स – म्हणजे तुमचं पोस्ट लाईक-शेअर-सेंतचा धडका!",
    "Content ideas कसे काढायचे? रोज काही तरी नवं सुचेल अशी टेक्निक – म्हणजे तुम्ही कधीही 'काय टाकू?' असं विचारणार नाही.",
    "इंस्टा वरून पैसे कमावणं म्हणजे स्वप्न नाही – Collabs, affiliates, services… काय चालतं, आणि कसं सुरू करायचं हेही शिकणार.",
    "आज आहे, उद्या नाही – असं नको. Insta वर टिकून राहायचंय? मग strategy + consistency हाच फॉर्म्युला – हेच शेवटी जिंकवणार!",
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
          Yes, I Want Growth 
        </button>
      </div>
    </div>
  );
};

export default WorkshopLearnSection;
