import React from 'react';
import { CustomStar } from './CustomStar';
import './style.css';

// import { StarSimple } from './SimpleStar';

export default function App() {
  return (
    <div>
      <h2>npm 'react-simple-star-rating</h2>
      {/* <StarSimple rating="30" /> */}
      *======================================*
      <h2>Custom Star In React</h2>
      <CustomStar />
    </div>
  );
}
