import React, { useState } from 'react';
import './styles.css';
import Step1SelectService from './components/Step1SelectService';
import Step2ChooseSpecialist from './components/Step2ChooseSpecialist';
import Step3BasicDetails from './components/Step3BasicDetails';
import Step4OrderDetails from './components/Step4OrderDetails';
import Step5PaymentOption from './components/Step5PaymentOption';

const App = () => {


  const [step, setStep] = useState(1);
  const [selectedServiceItems, setSelectedServiceItems] = useState([]);
  const [selectedSpecialists, setSelectedSpecialists] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSelectedItemsChange = (items) => {
    setSelectedServiceItems(items);
  };

  const handleSelectedSpecialistsChange = (specialists) => {
    setSelectedSpecialists(specialists);
  };

  return (
    <div className="booking-container">
      {step === 1 && (
        <Step1SelectService
          nextStep={nextStep}
          selectedServiceItems={selectedServiceItems}
          onSelectedItemsChange={handleSelectedItemsChange}
        />
      )}
      {step === 2 && (
        <Step2ChooseSpecialist
          prevStep={prevStep}
          nextStep={nextStep}
          selectedServiceItems={selectedServiceItems}
          selectedSpecialists={selectedSpecialists}
          onSelectedSpecialistsChange={handleSelectedSpecialistsChange}
        />
      )}
      {step === 3 && <Step3BasicDetails prevStep={prevStep} nextStep={nextStep} />}
      {step === 4 && (
        <Step4OrderDetails
          prevStep={prevStep}
          nextStep={nextStep}
          selectedServiceItems={selectedServiceItems}
          selectedSpecialists={selectedSpecialists}
          />
        )}
      {step === 5 && 
        <Step5PaymentOption 
        prevStep={prevStep} 
        selectedServiceItems={selectedServiceItems}
        />}
    </div>
  );
};

export default App;
