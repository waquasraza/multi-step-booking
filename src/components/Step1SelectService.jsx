import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';
import { services } from '../servicesData';

const Step1SelectService = ({ nextStep, selectedServiceItems, onSelectedItemsChange }) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {}, [selectedServiceItems]);

  const calculateTotalAmount = () => {
    return selectedServiceItems.reduce((total, item) => total + item.price, 0);
  };

  const handleItemChange = (item) => {
    onSelectedItemsChange(item);
    setErrorMessage(''); // Clear error message when items are changed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const totalAmount = calculateTotalAmount();

    if (selectedServiceItems.length === 0) {
      setErrorMessage('Please select at least one service before proceeding.');
      return;
    }

    if (totalAmount === 0) {
      setErrorMessage('Total amount cannot be zero. Please select services.');
      return;
    }

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="step">
      <h2>Select Service</h2>
      <Accordion services={services} selectedServiceItems={selectedServiceItems} onSelectedItemsChange={handleItemChange} />
      <div className="total-amount">
        Total Amount: <span id="totalAmountDisplay">₹{calculateTotalAmount()}</span>
      </div>
      {errorMessage && (
        <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
      <div className="button-container">
        <button
          type="submit"
          className="next-button"
          disabled={selectedServiceItems.length === 0}
          style={{
            padding: '10px 15px',
            backgroundColor: selectedServiceItems.length === 0 ? '#ccc' : '#AD8858',
            color: selectedServiceItems.length === 0 ? '#666' : 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: selectedServiceItems.length === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1SelectService;
