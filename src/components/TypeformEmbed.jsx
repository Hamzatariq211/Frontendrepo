import React, { useEffect } from 'react';

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-tf-live="01J5WK0KJ19SZW6T8992210RPW"
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
};

export default TypeformEmbed;
