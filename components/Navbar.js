import React from 'react';
import requests from '../utils/requests';

const Navbar = () => {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2>{title}</h2>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
