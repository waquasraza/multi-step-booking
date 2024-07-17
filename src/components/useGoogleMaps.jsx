import { useEffect } from 'react';

const useGoogleMaps = (apiKey) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      const script = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [apiKey]);
};

export default useGoogleMaps;
