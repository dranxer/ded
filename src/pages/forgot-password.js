import React from "react";
import Link from "next/link";
import styles from '../styles/ForgotPassword.module.css'; // Uncomment and create this CSS module for specific styling

export default function ForgotPassword() {

  return (
    <div className={styles.container}>
      {/* Basic styling can be applied here or using a CSS module */}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Recover Your Account</h1>
        
        <p>To recover your account, please sign in using your Google account associated with Think India.</p>

        {/* Reuse styling classes from Login page if applicable, or style using ForgotPassword.module.css */}
        <div className={styles.authSocial}>
          <button type="button" onClick={() => window.location.href = '/api/auth/google'}>
            <span role="img" aria-label="google">🌐</span> Sign in with Google
          </button>
        </div>

        <p className={styles.loginLink}>
          Remember your password?{' '}
          <Link href="/login" className={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
} 