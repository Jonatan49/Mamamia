import { useState, useEffect } from 'react';

export const useAccessibility = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (invertColors) {
      document.body.style.filter = 'invert(1)';
    } else {
      document.body.style.filter = 'none';
    }
  }, [invertColors]);

  useEffect(() => {
    if (underlineLinks) {
      document.body.style.setProperty('--link-decoration', 'underline');
    } else {
      document.body.style.removeProperty('--link-decoration');
    }
  }, [underlineLinks]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 150));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 80));
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const toggleInvertColors = () => {
    setInvertColors(prev => !prev);
  };

  const toggleUnderlineLinks = () => {
    setUnderlineLinks(prev => !prev);
  };

  const resetAccessibility = () => {
    setFontSize(100);
    setHighContrast(false);
    setInvertColors(false);
    setUnderlineLinks(false);
  };

  return {
    fontSize,
    highContrast,
    invertColors,
    underlineLinks,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleInvertColors,
    toggleUnderlineLinks,
    resetAccessibility
  };
};
