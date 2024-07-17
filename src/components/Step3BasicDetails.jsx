import React, { useState } from 'react';
import { statesData } from './../servicesData'; // Import the states data

const Step3BasicDetails = ({ prevStep, nextStep, selectedServiceItems, selectedSpecialists, details, handleDetailChange }) => {
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) error = 'Name is required.';
        break;
      case 'phoneNumber':
        if (!value) error = 'Phone number is required.';
        else if (!/^\d{10}$/.test(value)) error = 'Phone number must be 10 digits.';
        break;
      case 'email':
        if (!value) error = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid.';
        break;
      case 'address':
        if (!value) error = 'Address is required.';
        break;
      case 'state':
        if (!value) error = 'State is required.';
        break;
      case 'city':
        if (!value) error = 'City is required.';
        break;
      case 'pincode':
        if (!/^\d{6}$/.test(value)) error = 'Pincode must be 6 digits.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone number to 10 digits
    if (name === 'phoneNumber' && value.length > 10) {
      return;
    }

    handleDetailChange(name, value);

    // Validate the field on change
    const error = validate(name, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    handleDetailChange('state', selectedState);
    handleDetailChange('city', '');

    const error = validate('state', selectedState);
    setErrors(prevErrors => ({
      ...prevErrors,
      state: error,
      city: '', // Reset city error when state changes
    }));
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    handleDetailChange('city', selectedCity);

    const error = validate('city', selectedCity);
    setErrors(prevErrors => ({
      ...prevErrors,
      city: error
    }));
  };

  const validateAllFields = () => {
    const allErrors = {};
    Object.keys(details).forEach((field) => {
      const error = validate(field, details[field]);
      if (error) {
        allErrors[field] = error;
      }
    });
    return allErrors;
  };

  const handleNext = () => {
    // Validate all fields before proceeding
    const allErrors = validateAllFields();
  
    if (Object.keys(allErrors).length === 0) {
      nextStep();
    } else {
      setErrors(allErrors);
    }
  };

  return (
    <div className="step step3">
      <h2>Basic Details</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={details?.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={details?.phoneNumber} onChange={handleChange} />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={details?.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={details?.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="form-group" style={{ width: '48%' }}>
          <label>Country:</label>
          <select className="styled-select" name="country" value={details?.country} onChange={handleChange} disabled>
            <option value="India">India</option>
            {/* Add more countries if needed */}
          </select>
        </div>
        <div className="form-group" style={{ width: '48%' }}>
          <label>State:</label>
          <select className="styled-select" name="state" value={details?.state} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {Object.keys(statesData[details?.country]).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="error">{errors.state}</p>}
        </div>
      </div>
      <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="form-group" style={{ width: '48%' }}>
          <label>City:</label>
          <select className="styled-select" name="city" value={details?.city} onChange={handleCityChange} disabled={!details.state}>
            <option value="">Select a city</option>
            {details?.state && statesData[details?.country][details?.state].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <div className="form-group" style={{ width: '48%' }}>
          <label>Pincode:</label>
          <input type="text" className="pincodeInput" name="pincode" value={details?.pincode} onChange={handleChange} />
          {errors.pincode && <p className="error">{errors.pincode}</p>}
        </div>
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={prevStep}>Previous</button>
        <button className="next-button" onClick={handleNext} disabled={Object.values(errors).some(err => err)}>Next</button>
      </div>
    </div>
  );
};

export default Step3BasicDetails;
