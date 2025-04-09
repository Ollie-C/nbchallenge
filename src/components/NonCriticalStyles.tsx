import { useEffect } from 'react';

const NonCriticalStyles = () => {
  useEffect(() => {
    // Add non-critical styles dynamically after initial render
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/_next/static/css/main.css';
    document.head.appendChild(link);
  }, []);

  return null;
};

export default NonCriticalStyles;
