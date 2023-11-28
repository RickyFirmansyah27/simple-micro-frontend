import React from 'react';
import './App.css';
import Button from './Button';

function Card() {
  return (
    <div className="card">
      <h2>Feature 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo non metus ultrices
        sagittis. Duis venenatis auctor urna, non tincidunt eros posuere eu. Integer ullamcorper
        massa sit amet elit luctus, ut lacinia lacus fermentum.
      </p>
      <Button buttonName="Click Me" />
    </div>
  );
}

export default Card;
