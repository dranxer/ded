import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Router from 'next/router';
import { initAnimations } from '../utils/animations';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
    const handleRouteChange = () => {
      AOS.refresh();
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // Initialize animations after the component mounts
    initAnimations();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
