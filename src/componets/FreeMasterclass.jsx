import React, { useEffect, useState } from 'react';
import coachImage from '../Assest/purushotam-coach-easily.webp';

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
          2 Hours Free Live Masterclass Reveals
        </div>

        <h1 style={{ color: 'white', fontSize: isMobile ? '26px' : '36px', lineHeight: 1.4 }}>
          Build A <span style={{ color: '#fbbc04' }}>Profitable Online Coaching Business Roadmap</span><br />
          with AI In Just 30 Minutes!
        </h1>
        <p style={{ fontSize: isMobile ? '16px' : '18px', marginTop: '10px' }}>
          And Start making 1-3 Lakhs/month without investing a lot of money
        </p>
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
          }}>
            <h2 style={{ margin: 0, color: 'white', fontSize: '18px' }}>
              Founder of <span style={{ color: '#fbbc04' }}>CoachEasily.com</span>
            </h2>
            <p style={{ marginTop: '10px', fontSize: '14px' }}>
              Built a 10 Crore Course Business Empire & taught 5170+<br />
              people to launch & scale their online course business
            </p>
          </div>
        </div>

        {/* Right Info Boxes */}
        <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '20px'
          }}>
            {[
              { icon: '📅', label: 'Date', value: '23rd June' },
              { icon: '⏰', label: 'Time', value: '11:00 AM' },
              { icon: '🎥', label: 'Venue', value: 'Zoom' },
              { icon: '🌐', label: 'Language', value: 'English' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '20px',
                  padding: '15px',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <span style={{ fontSize: '24px', color: '#fbbc04', marginRight: '10px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', color: 'white' }}>{item.label}</div>
                  <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button style={{
              background: 'linear-gradient(49.12deg, #FFC74B 0%, #E39600 22%)',
              color: 'black',
              fontSize: isMobile ? '18px' : '20px',
              padding: isMobile ? '15px 60px' : '20px 160px',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: isMobile ? '100%' : 'auto',
            }}>
              Join Now For FREE!
            </button>
            <p style={{
              marginTop: '10px',
              color: 'white',
              fontSize: '16px',
              fontFamily: 'outfit,sans-serif',
            }}>
              Registrations End on <span style={{ fontWeight: 'bold', color: 'red' }}>22 JUN</span>
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
        Rated 4.9 out of 2,949 Reviews &nbsp; | &nbsp; 5,170+ Students &nbsp; | &nbsp; 715+ Live Sessions
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
