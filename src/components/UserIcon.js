import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/UserIcon.module.css';

export default function UserIcon() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include'
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { 
        method: 'POST',
        credentials: 'include'
      });
      if (res.ok) {
        router.push('/');
        router.reload();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!user) return null;

  // Debug log for user object
  console.log('UserIcon: user =', user);
  console.log('UserIcon: showDropdown =', showDropdown);

  return (
    <div className={styles.userIconContainer}>
      <button 
        className={styles.userIcon}
        onClick={() => {
          setShowDropdown(!showDropdown);
          console.log('UserIcon: button clicked, toggling dropdown');
        }}
        aria-label="User menu"
      >
        <span className={styles.avatar}>
          {(user && user.name && user.name.charAt(0).toUpperCase()) || '?'}
        </span>
      </button>
      
      {showDropdown && (
        <div className={styles.dropdown} style={{ border: '2px solid red', background: 'white', zIndex: 9999 }}>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name || 'No Name'}</span>
            <span className={styles.userEmail}>{user.email || 'No Email'}</span>
          </div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
} 