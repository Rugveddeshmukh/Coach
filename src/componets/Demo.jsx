import React, { useEffect, useState } from 'react';
import coachImage from '../Assest/GG web.png';

const FreeMasterclass = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div style={{
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to bottom, #020024 100%, #090979 30%, #000000 100%)',
      color: 'white'
    }}>

      {/* Header */}
      <div style={{ textAlign: 'center', padding: isMobile ? '30px 15px' : '40px 20px' }}>
        <div style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          borderRadius: '40px',
          padding: '12px 20px',
          fontSize: '15px',
          fontWeight: '500',
          display: 'inline-block',
          background: 'transparent',
          letterSpacing: '0.5px',
         
        }}>
          Don't Miss This Limited-Time Blueprint!
        </div>

        <h1 style={{ color: 'white', fontSize: isMobile ? '26px' : '36px', lineHeight: 1.4, marginTop: '20px' }}>
          Struggling to Grow on Instagram? Download Our <br />
          <span style={{ color: '#fbbc04' }}>BLUEPRINT Just Rs. 11</span> That Actually Works!
        </h1>
      </div>

      {/* Main Section */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        padding: '0 20px',
        
      }}>

        {/* Left Image Block */}
        <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', marginBottom: isMobile ? '30px' : '0' }}>
          <img
            src={coachImage}
            alt="Coach"
            style={{
              width: isMobile ? '200px' : '250px',
              height: isMobile ? '200px' : '230px',
              objectFit: 'cover',
              
            }}
          />
          <div style={{
            backgroundColor: '#000',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '400px',
            margin: '10px auto 0',
            padding: '15px',
            margin: '-10px auto 0',
            
          }}>
            <h2 style={{ margin: 0, color: 'white', fontSize: '18px' }}>
              Glowingrowth's Viral Secrets
            </h2>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Download Glowingrowth's Proven Instagram Blueprint and<br/> start growing your page from scratch
            </p>
          </div>
        </div>

        {/* Right Info Boxes */}
        <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
          {/* Stats Row */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "30px",
            flexWrap: "wrap",
            textAlign: "center"
          }}>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>10,000+</div>
              <div style={{ fontSize: "15px" }}>Ideas Unlocked</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>5,200+</div>
              <div style={{ fontSize: "15px" }}>Downloaders</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>90%+</div>
              <div style={{ fontSize: "15px" }}>Growth</div>
            </div>
          </div>

          {/* Agency Details Box */}
          <div style={{
            maxWidth: "500px",
            margin: "0 auto",
            
          }}>
            <h5 style={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "15px",
              marginBottom: "15px",
              textAlign: "center"
            }}>
              Your Social Media Marketing & Branding Agency
            </h5>
            <div style={{ color: "#ccc", fontSize: "15px", lineHeight: "1.7",paddingLeft:'15%', }}>
              <p>☑ Struggling to grow on Instagram?</p>
              <p>☑ Download Proven Blueprint @ ₹11</p>
              <p>☑ Growth Starts with Just One Click</p>
              <p>☑ Reel Hooks | Hashtag Guide | Strategy</p>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{
              background: 'linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)',
              color: 'black',
              fontSize: isMobile ? '18px' : '20px',
              padding: isMobile ? '15px 60px' : '20px 80px',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: isMobile ? '100%' : 'auto',
            }}>
               Yes, I Want This for ₹ 11!
            </button>
            <p style={{
              marginTop: '10px',
              color: 'white',
              fontSize: '17px',
              fontFamily: 'outfit,sans-serif',
            }}>
              We're offering this powerful Blueprint because <br/>
              <span style={{color:'red'}}>we're packing 10 years of proven expertise into it</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div style={{
        textAlign: 'center',
        margin: '40px 20px 20px',
        fontSize: '16px',
        paddingTop: '20px'
      }}>
        5,000+ Downlaods& Counting  &nbsp; | &nbsp; Proven by 1000s of Instagram Creators  &nbsp; | &nbsp; 100% Result-Oriented.
      </div>

      {/* Tick Point List */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
        fontSize: '15px',
        paddingBottom: '40px',
        fontFamily: 'outfit,sans-serif',
      }}>
        {[
          'Without Any Coaching Knowledge',
          'Without Any Business Experience',
          'Without Investing a lot of Money'
        ].map((text, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              color: 'black',
              backgroundColor: '#fbbc04',
              borderRadius: '4px',
              padding: '1px 5px',
              marginRight: '8px'
            }}>✔</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeMasterclass;
