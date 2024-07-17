import React from 'react';
import '../styles.css';

const TwoColumnLayout = ({ children, totalAmount, onPrev, onNext }) => {
  return (
    <div className="two-column-layout">
      <div className="form-section">{children}</div>
      <div className="summary-section">
        <div className="total-amount">Total Amount: <span>{totalAmount}</span></div>
        <div className="button-container">
          <button className="prev-button" onClick={onPrev}>Previous</button>
          <button className="next-button" onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
