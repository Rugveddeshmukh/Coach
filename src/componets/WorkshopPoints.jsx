import React from 'react';
import { FaGem } from 'react-icons/fa';

const points = [
  "Are looking for a consistent and a high paying source of income.",
  "Want to have a first-mover advantage in the course creator economy.",
  "Are searching for a fail-proof method to launch and sell your online course.",
  "Already have a packaged course but need help to sell and monetize it.",
  "Want to know the secrets of successful course creators in the industry.",
  "Want to know how to create a course from scratch without any prior experience.",
  `Want my “Sell Before You Create” Model to get their first 100 customers.`
];

const WorkshopPoints = () => {
  return (
    <div style={{ backgroundColor: '#f1e7e7', padding: '60px 20px' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '34px',
        fontWeight: 'bold',
        marginBottom: '40px',
        fontFamily: 'outfit, sans-serif'
      }}>
        This Workshop Is For You If You
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          maxWidth: '1000px',
          margin: '0 auto',
          paddingTop: '10px'
        }}
      >
        {points.slice(0, 6).map((point, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#e8fff0',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '20px',
              fontSize: '15px',
              lineHeight: '1.6',
              border: '1px solid #c4ebd6',
              fontFamily: 'poppins, sans-serif'
            }}
          >
            <FaGem style={{ color: '#27c36f', fontSize: '20px', marginTop: '5px' }} />
            <span>{point}</span>
          </div>
        ))}

        {/* Last full-width point */}
        <div
          style={{
            gridColumn: '1 / -1',
            backgroundColor: '#e8fff0',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '20px',
            fontSize: '15px',
            lineHeight: '1.6',
            border: '1px solid #c4ebd6',
            fontFamily: 'poppins, sans-serif',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <FaGem style={{ color: '#27c36f', fontSize: '12px' }} />
          <span>{points[6]}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPoints;
