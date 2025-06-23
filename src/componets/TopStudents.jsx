import React from 'react';
import sauravImg from '../Assest/img1.webp';
import aditiImg from '../Assest/img2.webp';
import sachinImg from '../Assest/img3.webp';

const students = [
  {
    name: 'Saurav Pal',
    title: 'Salary Hike Specialist',
    image: sauravImg,
    earnings: '5 CRORE EARNED'
  },
  {
    name: 'Aditi Gupta',
    title: 'Data Analytics Mentor',
    image: aditiImg,
    earnings: '6 CRORE EARNED'
  },
  {
    name: 'Sachin Shetty',
    title: 'Money Manifestations Coach',
    image: sachinImg,
    earnings: '1 CRORE EARNED'
  }
];

const TopStudents = () => {
  return (
    <div style={{ background: '#f1e7e7', padding: '60px 20px' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: '',
        marginBottom: '70px',
        color: '#000'
      }}>
        Top Performing Students
      </h2>

      <div style={{
        
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px'
      }}>
        {students.map((student, index) => (
          <div key={index} style={{
            width: '280px',
            backgroundColor: '#0c1530',
            borderRadius: '20px',
            color: 'white',
            overflow: 'hidden',
            textAlign: 'center',
            paddingBottom: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            position: 'relative',
            overflow: 'visible' 
          }}>
            {/* Image with full border radius */}
            <img
              src={student.image}
              alt={student.name}
              style={{
                width: '90%',
                height: 'auto',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                borderBottomLeftRadius: '20px',
                marginTop: '-40px',
                borderBottomRightRadius: '20px'
              }}
            />

            <h3 style={{ margin: '20px 0 10px', fontSize: '20px' }}>{student.name}</h3>
            <p style={{ margin: '0 0 20px', fontSize: '14px', color: '#fff' }}>{student.title}</p>
            <div style={{
              border: '1px dashed rgba(255,255,255,0.4)',
              borderRadius: '12px',
              margin: '0 auto',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#0c1530'
            }}>
              <span role="img" aria-label="money bag">💰</span> {student.earnings}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudents;
