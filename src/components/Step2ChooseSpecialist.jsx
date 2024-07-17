import React, { useEffect, useState } from 'react';
import { categorySpecialists } from '../servicesData';
import './Step2ChooseSpecialist.css';

const Step2ChooseSpecialist = ({ prevStep, nextStep, selectedServiceItems, selectedSpecialists, onSelectedSpecialistsChange }) => {
  const [specialistsByCategory, setSpecialistsByCategory] = useState({});
  const [selected, setSelected] = useState({});
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    const selectedCategories = selectedServiceItems.map(item => item.category);
    const uniqueCategories = [...new Set(selectedCategories)];
    const groupedSpecialists = uniqueCategories.reduce((acc, category) => {
      acc[category] = categorySpecialists[category] || [];
      return acc;
    }, {});
    setSpecialistsByCategory(groupedSpecialists);
  }, [selectedServiceItems]);

  useEffect(() => {
    setAllSelected(Object.keys(specialistsByCategory).every(category => selected[category]));
  }, [specialistsByCategory, selected]);

  const handleSelectionChange = (category, specialist) => {
    const updatedSelected = { ...selected, [category]: specialist };
    setSelected(updatedSelected);
    onSelectedSpecialistsChange(updatedSelected);
  };

  const handleNextStep = () => {
    if (allSelected) {
      nextStep();
    }
  };

  return (
    <div className="step">
      <h2>Choose Specialist</h2>
      <div className="specialists-list">
        {Object.keys(specialistsByCategory).map((category) => (
          <div key={category} className="specialist-dropdown">
            <label>{category}</label>
            <select
              value={selected[category] || ''}
              onChange={(e) => handleSelectionChange(category, e.target.value)}
            >
              <option value="">Select a specialist</option>
              {specialistsByCategory[category].map((specialist, index) => (
                <option key={index} value={specialist}>{specialist}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={prevStep}>Previous</button>
        <button
          className="next-button"
          onClick={handleNextStep}
          disabled={!allSelected}
          style={{
            backgroundColor: allSelected ? '#000' : '#ccc',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2ChooseSpecialist;
