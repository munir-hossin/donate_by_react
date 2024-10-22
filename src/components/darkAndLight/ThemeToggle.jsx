

import React, { useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light'); // Default to light mode

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Switch the theme
  };

  return (
    <button onClick={toggleTheme} className="btn">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
