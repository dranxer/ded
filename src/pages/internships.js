import Head from 'next/head';
import { useState } from 'react';

// Example data structure for internships
const internshipsData = [
  {
    title: 'Web Development Intern',
    description: 'Work on our main website and help build new features.',
    location: 'Remote',
    deadline: '2024-07-15',
    applyLink: 'mailto:apply@thinkindia.com?subject=Web%20Development%20Intern',
  },
  // Uncomment and add objects like this to show postings:
  // {
  //   title: 'Web Development Intern',
  //   description: 'Work on our main website and help build new features.',
  //   location: 'Remote',
  //   deadline: '2024-07-15',
  //   applyLink: 'mailto:apply@thinkindia.com?subject=Web%20Development%20Intern',
  // },
];

export default function Internships() {
  const [internships] = useState(internshipsData);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
      color: '#222',
      fontFamily: 'Poppins, sans-serif',
      paddingBottom: 40
    }}>
      <Head>
        <title>Internships | Think India</title>
        <meta name="description" content="Explore internship opportunities at Think India" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 1rem 30px 1rem', textAlign: 'center' }}>
        <h1 style={{ color: '#1a237e', fontSize: '2.5rem', fontWeight: 800, marginBottom: 6, letterSpacing: 0.5 }}>Internships</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
          <span style={{ width: 80, height: 4, borderRadius: 2, background: '#2563eb', display: 'block' }}></span>
        </div>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: 36, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', fontWeight: 500 }}>
          Explore our latest internship opportunities and join Think India in making a difference. All roles are open to passionate, driven students.
        </p>
        <div style={{ padding: '0', minHeight: 200, margin: '0 auto', maxWidth: 1100 }}>
          <h2 style={{ color: '#2563eb', fontSize: '1.25rem', marginBottom: 24, fontWeight: 700, letterSpacing: 0.2 }}>Current Openings</h2>
          {internships.length === 0 ? (
            <p style={{ color: '#888', opacity: 0.9, fontSize: '1.1rem', margin: '40px 0' }}>No internship postings for now.</p>
          ) : (
            <>
              <div className="internships-table-wrapper">
                <div className="internships-table-desktop">
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', minWidth: 900, borderCollapse: 'separate', borderSpacing: 0, background: '#fff', fontSize: '1.04rem', borderRadius: 12, boxShadow: '0 4px 24px rgba(30,41,59,0.07)', border: '1px solid #e5e7eb', margin: '0 auto' }}>
                      <thead>
                        <tr style={{ background: '#f1f5f9', color: '#1a237e', borderBottom: '1px solid #e5e7eb' }}>
                          <th style={{ padding: '15px 12px', borderTopLeftRadius: 12, fontWeight: 700, fontSize: '1.08rem', letterSpacing: 0.2, textAlign: 'left' }}>Title</th>
                          <th style={{ padding: '15px 12px', fontWeight: 700, fontSize: '1.08rem', textAlign: 'left' }}>Description</th>
                          <th style={{ padding: '15px 12px', fontWeight: 700, fontSize: '1.08rem', textAlign: 'left' }}>Location</th>
                          <th style={{ padding: '15px 12px', fontWeight: 700, fontSize: '1.08rem', textAlign: 'left' }}>Deadline</th>
                          <th style={{ padding: '15px 12px', borderTopRightRadius: 12, fontWeight: 700, fontSize: '1.08rem', textAlign: 'left' }}>Apply</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internships.map((intern, idx) => (
                          <tr key={idx} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e5e7eb', transition: 'background 0.2s' }}>
                            <td style={{ padding: '13px 12px', fontWeight: 600, color: '#1a237e', minWidth: 160 }}>{intern.title}</td>
                            <td style={{ padding: '13px 12px', minWidth: 280 }}>{intern.description}</td>
                            <td style={{ padding: '13px 12px', minWidth: 110 }}>
                              <span style={{ background: '#e0e7ef', color: '#2563eb', padding: '4px 14px', borderRadius: 14, fontWeight: 600, fontSize: '0.97rem', letterSpacing: 0.1 }}>{intern.location}</span>
                            </td>
                            <td style={{ padding: '13px 12px', minWidth: 110 }}>
                              <span style={{ background: '#f1f5f9', color: '#b45309', padding: '4px 14px', borderRadius: 14, fontWeight: 600, fontSize: '0.97rem', letterSpacing: 0.1 }}>{intern.deadline}</span>
                            </td>
                            <td style={{ padding: '13px 12px', minWidth: 110 }}>
                              <a href={intern.applyLink} target="_blank" rel="noopener noreferrer" style={{ background: '#2563eb', color: '#fff', padding: '8px 22px', borderRadius: 7, fontWeight: 600, textDecoration: 'none', fontSize: '1.01rem', letterSpacing: 0.1, border: 'none', boxShadow: 'none', transition: 'background 0.2s, transform 0.2s', display: 'inline-block' }}
                                onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'}
                                onMouseOut={e => e.currentTarget.style.background = '#2563eb'}
                              >Apply</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Mobile cards version */}
                <div className="internships-cards-mobile">
                  {internships.map((intern, idx) => (
                    <div className="internship-card" key={idx}>
                      <div className="internship-card-title">{intern.title}</div>
                      <div className="internship-card-desc">{intern.description}</div>
                      <div className="internship-card-row">
                        <span className="internship-card-label">Location:</span>
                        <span className="internship-card-location">{intern.location}</span>
                      </div>
                      <div className="internship-card-row">
                        <span className="internship-card-label">Deadline:</span>
                        <span className="internship-card-deadline">{intern.deadline}</span>
                      </div>
                      <a href={intern.applyLink} target="_blank" rel="noopener noreferrer" className="internship-card-apply">Apply</a>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
} 