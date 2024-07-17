import React from 'react';

const Step4OrderDetails = ({ prevStep, nextStep, selectedServiceItems, selectedSpecialists, details }) => {
  const calculateTotalAmount = () => {
    return selectedServiceItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const groupedServices = selectedServiceItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="step">
      <h2>Order Details</h2>
      
      {/* Display selected services category-wise */}
      {Object.keys(groupedServices).map((category) => (
        <div key={category} className="category-section">
          <h3 style={{marginTop: '10px'}}>{category}</h3>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {groupedServices[category].map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display selected specialist for this category */}
          <div className="selected-specialist">
            <h4 style={{fontSize: '16px', display: 'inline'}}>Selected Specialist:</h4>
            {selectedSpecialists[category] ? (
              <p>{selectedSpecialists[category]}</p>
            ) : (
              <p style={{display: 'inline', marginLeft: '10px'}}>No specialist selected for this category</p>
            )}
          </div>
        </div>
      ))}
      
      {/* Show basic details */}
      <div className="basic-details">
        <h4>Basic Details:</h4>
        <p>Name: {details?.name}</p>
        <p>Phone Number: {details?.phoneNumber}</p>
        <p>Email: {details?.email}</p>
        <p>Address: {details?.address}</p>
        <p>Country: {details?.country}</p>
        <p>State: {details?.state}</p>
        <p>City: {details?.city}</p>
        <p>Pincode: {details?.pincode}</p>
      </div>

      {/* Display total amount */}
      <div className="total-amount">
        Total Amount: <span id="totalAmountDisplay">₹{calculateTotalAmount()}</span>
      </div>

      <div className="button-container">
        <button className="prev-button" onClick={prevStep}>Previous</button>
        <button className="next-button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Step4OrderDetails;
