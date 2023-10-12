import React from 'react';
import './style.css'

function GridComponent() {
  return (
    <div className="grid-container">
      <div className="grid-item"><h1>The grid layout</h1>
      <p>It is a responsive layout of six items which created using grid, it get's adjusted according to the device width</p>
      
      </div>
      <div className="grid-item">2</div>
      <div className="grid-item">3</div>
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
    </div>
  );
}

export default GridComponent;
