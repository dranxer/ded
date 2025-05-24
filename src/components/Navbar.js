import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import UserIcon from "./UserIcon";
import useCurrentUser from "../hooks/useCurrentUser";
import { useRouter } from "next/router";

export default function Navbar({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading } = useCurrentUser();
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogin = () => {
    router.push('/login');
    setMenuOpen(false);
  };

  const handleSignup = () => {
    router.push('/signup');
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setMenuOpen(false);
      if (res.ok) {
        router.push('/');
        router.reload();
      }
    } catch (error) {
      console.error('Error logging out:', error);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <div className={`menu-icon ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-center">
        <div className="logo">
          <div className="circular-logo">
            <Image 
              src="/think-india-logo.png" 
              alt="Think India Logo" 
              width={40} 
              height={40} 
              priority={true}
            />
          </div>
          <span>Think India</span>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/" className={activeSection === "home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link href="#about" className={activeSection === "about" ? "active" : ""}>About</Link>
        </li>
        <li>
          <Link href="/internships">Internships</Link>
        </li>
        <li>
          <a href="https://thethinkindiablog.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</a>
        </li>
        {["events", "team", "contact"].map((id) => (
          <li key={id}>
            <Link 
              href={`#${id}`} 
              className={activeSection === id ? "active" : ""}
              onClick={() => {
                setActiveSection(id);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          </li>
        ))}
        <li className="auth-buttons">
          {loading ? null : user ? (
            <UserIcon />
          ) : (
            <>
              <button onClick={handleLogin} className="login-btn" type="button">Login</button>
              <button onClick={handleSignup} className="signup-btn" type="button">Sign Up</button>
            </>
          )}
        </li>
      </ul>
      <div className={`mobile-sidebar${menuOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          {user ? (
            <div className="sidebar-user">
              <div className="sidebar-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="sidebar-user-info">
                <span className="sidebar-user-name">{user.name || 'User'}</span>
                <span className="sidebar-user-email">{user.email || ''}</span>
              </div>
            </div>
          ) : (
            <span className="sidebar-title">Think India</span>
          )}
          <button className="sidebar-close" onClick={closeMenu} aria-label="Close menu">&times;</button>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link href="/" onClick={closeMenu} className={activeSection === "home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link href="#about" onClick={closeMenu} className={activeSection === "about" ? "active" : ""}>About</Link>
          </li>
          <li>
            <Link href="/internships" onClick={closeMenu}>Internships</Link>
          </li>
          <li>
            <a href="https://thethinkindiablog.wordpress.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Blog</a>
          </li>
          {["events", "team", "contact"].map((id) => (
            <li key={id}>
              <Link 
                href={`#${id}`} 
                className={activeSection === id ? "active" : ""}
                onClick={() => {
                  setActiveSection(id);
                  closeMenu();
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sidebar-auth">
          {loading ? null : user ? (
            <button className="sidebar-signout" onClick={handleLogout}>Sign out</button>
          ) : (
            <>
              <button onClick={handleLogin} className="sidebar-login">Login</button>
              <button onClick={handleSignup} className="sidebar-signup">Sign Up</button>
            </>
          )}
        </div>
      </div>
      {menuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
    </nav>
  );
} 