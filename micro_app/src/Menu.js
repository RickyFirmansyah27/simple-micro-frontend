import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <h2>Feature Menu</h2>
      <ul>
        <li>
          <Link to="/feature1">Feature 1</Link>
        </li>
        <li>
          <Link to="/feature2">Feature 2</Link>
        </li>
        <li>
          <Link to="/feature3">Feature 3</Link>
        </li>
      </ul>
    </div>
  );
}
