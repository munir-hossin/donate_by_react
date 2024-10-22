

import React from 'react';
import ThemeToggle from './ThemeToggle';

function Toggle() {
    return (
        <div>
             <div className="p-6">
      <ThemeToggle />
      <div className="card bg-base-100 p-4 shadow-xl">
        <h2 className="card-title">DaisyUI Dark Mode</h2>
        <p>This card will switch between light and dark mode!</p>
      </div>
    </div>
        </div>
    );
}

export default Toggle;