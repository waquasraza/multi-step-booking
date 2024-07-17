import React from 'react';

const Step4OrderDetails = ({ prevStep, nextStep, selectedServiceItems, basicDetails }) => {
  
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
          <h3>{category}</h3>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {groupedServices[category].map((item) => (
                <tr key={item.id}> {/* Use unique id instead of index */}
                  <td>{item.name}</td>
                  <td>₹{item.price.toFixed(2)}</td> {/* Format price */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      
      {/* Show basic details */}
      {/* <div className="basic-details">
        <h4>Basic Details:</h4>
        <p>Name: {basicDetails?.name}</p>
        <p>Phone Number: {basicDetails?.phoneNumber}</p>
        <p>Email: {basicDetails?.email}</p>
        <p>Address: {basicDetails?.address}</p>
        <p>Country: {basicDetails?.country}</p>
        <p>State: {basicDetails?.state}</p>
        <p>City: {basicDetails?.city}</p>
        <p>Pincode: {basicDetails?.pincode}</p>
      </div> */}

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
