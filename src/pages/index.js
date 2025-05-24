import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import UserIcon from "../components/UserIcon";
import AboutSection from '../components/AboutSection';

const eventsData = [
  {
    title: "Think India Convention 3.0",
    description: "A workshop focused on developing leadership skills among students.",
    images: ["/1.1.JPG", "/1.2.JPG", "/1.3.JPG", "/1.4.JPG"],
  },
  {
    title: "Chhatrapati Shivaji Jayanti",
    description: "An insightful session on India's rich cultural and historical heritage.",
    images: ["/2.1.JPG", "/2.2.JPG", "/2.3.JPG"],
  },
  {
    title: "Rastramshala Workshop",
    description: "A community outreach program to bring positive change.",
    images: ["/3.1.jpg", "/3.2.jpg"],
  },
];

const carouselImages = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg"
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Events data for the slideshow
  const [eventSlides, setEventSlides] = useState(eventsData.map(() => 0));
  const [isPlaying, setIsPlaying] = useState(eventsData.map(() => true));
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "gallery", "events", "team", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition <= offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle slideshow timers for all events
  useEffect(() => {
    const timers = eventsData.map((_, index) => {
      if (!isPlaying[index]) return null;
  
      return setInterval(() => {
        setEventSlides(prev => {
          const newSlides = [...prev];
          newSlides[index] = (newSlides[index] + 1) % eventsData[index].images.length;
          return newSlides;
        });
      }, 5000);
    });
  
    return () => timers.forEach(timer => timer && clearInterval(timer));
  }, [isPlaying, eventsData]);  

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Helper function to change slide for a specific event
  const changeSlide = (eventIndex, newSlide) => {
    setEventSlides(prev => {
      const newSlides = [...prev];
      newSlides[eventIndex] = newSlide;
      return newSlides;
    });
  };

  // Helper function to toggle play/pause for a specific event
  const togglePlayPause = (eventIndex) => {
    setIsPlaying(prev => {
      const newIsPlaying = [...prev];
      newIsPlaying[eventIndex] = !newIsPlaying[eventIndex];
      return newIsPlaying;
    });
  };

  const goToPrev = () => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const goToNext = () => setCarouselIndex((prev) => (prev + 1) % carouselImages.length);

  return (
    <div>
      <Head>
        <title>Think India IIT Roorkee</title>
        <meta name="description" content="Empowering students to build a stronger India." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      {/* Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section with Tricolor Theme */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="motto-container">
            <h2 className="motto-heading">Igniting Minds</h2>
            <h3 className="motto-subheading">Transforming India</h3>
            <p className="motto-text">
              Empowering students to build a nation rooted in culture, driven by innovation, and united in purpose.
            </p>
            <button className="cta-button">Join Our Mission</button>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Events Section - Full Width Slideshow */}
      <section id="events" style={{ width: '100vw', position: 'relative', overflow: 'hidden', margin: 0, padding: 0, background: '#111c2e' }}>
        <div style={{ width: '100%', textAlign: 'center', padding: '48px 0 24px 0' }}>
          <h2 style={{ color: '#FF9933', fontSize: '2.7rem', fontWeight: 800, marginBottom: 8, letterSpacing: '1.5px', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif', lineHeight: 1.1 }}>Events</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ width: 48, height: 5, background: '#FF9933', borderRadius: 2 }}></span>
            <span style={{ width: 48, height: 5, background: '#fff', borderRadius: 2, boxShadow: '0 0 3px rgba(0,0,0,0.12)' }}></span>
            <span style={{ width: 48, height: 5, background: '#138808', borderRadius: 2 }}></span>
          </div>
        </div>
        <FullWidthEventsSlideshow />
      </section>

      {/* Team Section */}
      <section className="members-section" id="team">
        <div className="section-heading">
          <h2 style={{ color: '#fff', background: 'none', WebkitTextFillColor: 'unset', fontWeight: 800 }}>Our Team</h2>
          <div className="heading-underline">
            <span className="saffron-line"></span>
            <span className="white-line"></span>
            <span className="green-line"></span>
          </div>
        </div>
          <div className="members-container">
          {[
            { name: "Sumit Pandey", position: "National Incharge", img: "/sumit.jpg"},
            { name: "Akhansha Warade", position: "National Convenor", img: "/akhansha.jpg"},
            { name: "Sarthak Agrawal", position: "National Co-Convenor", img: "/sarthak_agrawal.png"},
            { name: "Sarthak Pandya", position: "National Co-Convenor", img: "/sarthak_pandya.jpg"},
            { name: "Muskan Lakhwani", position: "National Co-Convenor", img: "/muskan.jpg"},
            { name: "Mridul Thaplu", position: "Internship Coordinator", img: "/mridul.png"},
            { name: "Abhishek Mourya", position: "Incharge", img: "/abhishek.jpeg"},
            { name: "Shrinivas", position: "Incharge", img: "/shrinivas.jpg"},
          ].map((member, idx) => (
            <div key={idx} className="member-card">
              <div className="member-img-container">
                <Image src={member.img} alt={member.name} width={200} height={200} className="member-img" />
                <div className="tricolor-border">
                  <div className="border-saffron"></div>
                  <div className="border-white"></div>
                  <div className="border-green"></div>
                </div>
              </div>
              <h3 className="member-name" style={{ color: '#1a237e' }}>{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <div className="member-social">
                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section with Tally Form Integration */}
      <section id="contact" style={{ background: '#0a1033', color: '#fff', padding: '32px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 900, margin: '0 auto', gap: 24, justifyContent: 'center' }}>
          {/* Left Column: Info */}
          <div style={{ flex: 1, minWidth: 260, maxWidth: 400 }}>
            <div style={{ marginBottom: 18 }}>
              <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: 6, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Poppins, sans-serif', lineHeight: 1.1 }}>Get In Touch</h2>
              <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                <span style={{ width: 32, height: 4, background: '#FF9933', borderRadius: 2 }}></span>
                <span style={{ width: 32, height: 4, background: '#fff', borderRadius: 2, boxShadow: '0 0 3px rgba(0,0,0,0.12)' }}></span>
                <span style={{ width: 32, height: 4, background: '#138808', borderRadius: 2 }}></span>
              </div>
            </div>
            <p style={{ fontSize: '1rem', marginBottom: 18, color: '#fff' }}>
              Interested in joining us but do not know where to start? Do you have a mind-blowing idea that you need help with? Reach out to us, we are happy to help!
            </p>
            <h3 style={{ color: '#FF9933', fontWeight: 700, fontSize: '1.2rem', marginBottom: 6 }}>Visit us</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: 10, color: '#fff' }}>Say hello at the Think India office in Multi Activity Center</p>
            <div style={{ marginBottom: 16 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0887372548386!2d77.89016591511927!3d29.865863781947895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3648148b7bd%3A0x784abf10032f4ea!2sStudents%20Activity%20Centre%20-%20SAC!5e0!3m2!1sen!2sin!4v1616000000000!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                title="IIT Roorkee Map"
              ></iframe>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <a href="https://www.linkedin.com/in/tic-iitr/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/thinkindia_iitr/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          {/* Right Column: Form */}
          <div style={{ flex: 1, minWidth: 260, maxWidth: 400, background: '#fff', borderRadius: 14, boxShadow: '0 4px 16px rgba(10,16,51,0.10)', padding: '20px 12px', margin: '0 8px', minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <iframe
              src="https://tally.so/embed/mZD7xA"
              width="100%"
              height="320"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
              style={{ border: "none", minHeight: "320px", height: "320px", background: "transparent" }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer with Tricolor Theme - Fixed to match CSS structure */}
      <footer className="footer" style={{ background: '#111c2e', color: '#fff', padding: '18px 0 8px', fontSize: '0.95rem' }}>
        <div className="tricolor-footer" style={{ height: 4, marginBottom: 16 }}>
          <div className="footer-saffron" style={{ height: '100%' }}></div>
          <div className="footer-white" style={{ height: '100%' }}></div>
          <div className="footer-green" style={{ height: '100%' }}></div>
        </div>
        <div className="footer-container" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 24, padding: '0 12px' }}>
          <div className="footer-logo" style={{ flex: 1, minWidth: 180, marginBottom: 8 }}>
            <Image src="/logo.png" alt="Think India Logo" width={32} height={32} />
            <h2 style={{ fontSize: '1.2rem', margin: '8px 0 4px', fontWeight: 700 }}>Think India</h2>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>Empowering students to shape the future of India.</p>
          </div>
          <div className="footer-links" style={{ flex: 1, minWidth: 120, marginBottom: 8 }}>
            <h4 style={{ fontSize: '1rem', marginBottom: 8, fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#events">Events</Link></li>
              <li><Link href="#team">Team</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links" style={{ flex: 1, minWidth: 120, marginBottom: 8 }}>
            <h4 style={{ fontSize: '1rem', marginBottom: 8, fontWeight: 600 }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="https://thethinkindiablog.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><Link href="/internships">Internships</Link></li>
            </ul>
          </div>
          <div style={{ flex: '1 1 120px', minWidth: 120, marginBottom: 8, marginLeft: 'auto' }} className="footer-links">
            <h4 style={{ fontSize: '1rem', marginBottom: 8, fontWeight: 600 }}>Follow Us</h4>
            <div className="social-links" style={{ display: 'flex', gap: 8 }}>
              <a href="https://www.linkedin.com/in/tic-iitr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/thinkindia_iitr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com/thinkindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/thinkindia" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ fontSize: '0.85rem', marginTop: 8, textAlign: 'center' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Think India. All rights reserved.</p>
          <div className="tricolor-line" style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 4 }}>
            <span className="saffron-line" style={{ width: 24, height: 3, background: '#FF9933', borderRadius: 2 }}></span>
            <span className="white-line" style={{ width: 24, height: 3, background: '#fff', borderRadius: 2 }}></span>
            <span className="green-line" style={{ width: 24, height: 3, background: '#138808', borderRadius: 2 }}></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FullWidthEventsSlideshow() {
  // Map each image to its event title
  const imageTitleMap = [
    { image: "/1.1.JPG", title: "Think India Convention 3.0" },
    { image: "/1.2.JPG", title: "Think India Convention 3.0" },
    { image: "/1.3.JPG", title: "Think India Convention 3.0" },
    { image: "/2.1.JPG", title: "Chhatrapati Shivaji Jayanti" },
    { image: "/2.2.JPG", title: "Chhatrapati Shivaji Jayanti" },
    { image: "/2.3.JPG", title: "Chhatrapati Shivaji Jayanti" },
    { image: "/3.1.jpg", title: "Rastramshala Workshop" },
    { image: "/3.2.jpg", title: "Rastramshala Workshop" }
  ];
  const images = imageTitleMap.map(obj => obj.image);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, images.length]);

  const goToPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <div style={{ width: '100vw', height: '80vw', maxHeight: '90vh', position: 'relative', background: '#000' }}>
      <Image
        src={images[current]}
        alt={`Event ${current + 1}`}
        fill
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        priority
      />
      {/* Event Title Overlay at Top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(10,16,51,0.7)',
        color: '#fff',
        padding: '24px 48px 16px 48px',
        borderBottomLeftRadius: '18px',
        borderBottomRightRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        fontSize: '2.2rem',
        fontWeight: 800,
        letterSpacing: '1.5px',
        textAlign: 'center',
        zIndex: 3,
        maxWidth: '90vw',
        minWidth: '320px',
        lineHeight: 1.2,
        fontFamily: 'Poppins, sans-serif',
        textShadow: '0 2px 8px rgba(0,0,0,0.25)'
      }}>
        {imageTitleMap[current].title}
      </div>
      {/* Controls */}
      <button onClick={goToPrev} style={{ position: 'absolute', top: '50%', left: 24, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none', borderRadius: '50%', width: 56, height: 56, fontSize: 28, cursor: 'pointer', zIndex: 2 }}>
        &#8592;
      </button>
      <button onClick={goToNext} style={{ position: 'absolute', top: '50%', right: 24, transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none', borderRadius: '50%', width: 56, height: 56, fontSize: 28, cursor: 'pointer', zIndex: 2 }}>
        &#8594;
      </button>
      <button onClick={togglePlayPause} style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,153,51,0.8)', color: '#fff', border: 'none', borderRadius: '50%', width: 56, height: 56, fontSize: 28, cursor: 'pointer', zIndex: 2 }}>
        {isPlaying ? '❚❚' : '►'}
      </button>
      {/* Indicators */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 16, zIndex: 2 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: idx === current ? '#ff9933' : 'rgba(255,255,255,0.7)',
              border: idx === current ? '2px solid #fff' : '2px solid #ff9933',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'background 0.2s, border 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
