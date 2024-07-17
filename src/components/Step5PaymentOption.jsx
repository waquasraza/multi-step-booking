import React, { useEffect, useState } from 'react';

const Step5PaymentOption = ({ prevStep, selectedServiceItems }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [percentageAmount, setPercentageAmount] = useState(0);
  const [utrNumber, setUtrNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [utrError, setUtrError] = useState('');

  useEffect(() => {
    const total = calculateTotalAmount();
    setTotalAmount(total);
    setPercentageAmount((total * 0.3).toFixed(2)); // Calculate 30% of total
  }, [selectedServiceItems]);

  const calculateTotalAmount = () => {
    return selectedServiceItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleUtrChange = (e) => {
    setUtrNumber(e.target.value);
    setUtrError(''); // Clear error on change
  };

  const handleUtrSubmit = async () => {
    if (!utrNumber) {
      setUtrError('UTR Number is required.');
      return;
    }

    // Prepare email details
    const emailDetails = {
      email: 'thewaquas@gmail.com', // Replace with actual email from form
      name: 'Mamatha ks', // Replace with actual name from form
      booking_details: `Booking message goes here`,
    };

    try {
      const response = await fetch('https://craftbeautysalon.com/wp-json/booking/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailDetails),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setIsSubmitted(true); // Set submitted state
      } else {
        console.error(data);
        setUtrError('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setUtrError('An error occurred while sending the email.');
    }
  };

  return (
    <div className="step5" style={{ padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: '#AD8858' }}>Payment Option</h2>
      <div className="content-layout" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="amount-details" style={{ flex: '1', marginRight: '20px' }}>
          <div className="thirty-percent-amount" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
            Pay 30% Of Total Amount: <span id="thirtyPercentAmountDisplay">₹{percentageAmount}</span>
          </div>
          <div className="total-amount" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
            Pay Total Amount: <span id="totalAmountDisplay">₹{totalAmount}</span>
          </div>

          <p style={{ marginTop: '20px', marginBottom: '5px', fontSize: '12px' }}>
            ( Note: We need UTR number for payment verification, <br />You will get this UTR number from payment details. )
          </p>

          {!isSubmitted ? (
            <div className="utrWrapper" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="utr-input" style={{ marginRight: '10px' }}>
                <label htmlFor="utrNumber" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Enter UTR Number:
                </label>
                <input
                  type="text"
                  id="utrNumber"
                  value={utrNumber}
                  onChange={handleUtrChange}
                  placeholder="UTR Number"
                  style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '150px' }}
                />
                {utrError && <div style={{ color: 'red', marginTop: '5px' }}>{utrError}</div>}
              </div>
              <button
                className="submit-button"
                onClick={handleUtrSubmit}
                style={{
                  marginTop: '20px',
                  padding: '10px 15px',
                  backgroundColor: '#AD8858',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#9b6f4a')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#AD8858')}
              >
                Submit UTR Number
              </button>
            </div>
          ) : (
            <div style={{ fontSize: '1.2rem', marginTop: '20px', color: '#28a745' }}>
              Thank you for your order! We will contact you soon for confirmation.
            </div>
          )}
        </div>
        <div className="image-container" style={{ flex: '1', display: 'flex', marginTop: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <img width={200} src="https://craftbeautysalon.com/wp-content/uploads/2024/07/raza.jpg" alt="Payment Illustration" />
        </div>
      </div>
      <div className="button-container" style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <button
          className="prev-button"
          onClick={prevStep}
          style={{
            padding: '10px 15px',
            backgroundColor: '#ccc',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Step5PaymentOption;
