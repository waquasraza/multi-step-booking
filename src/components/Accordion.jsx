import React, { useState, useEffect } from 'react';

const Accordion = ({ services, selectedServiceItems, onSelectedItemsChange }) => {
  const [openSections, setOpenSections] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotalAmount();
  }, [selectedServiceItems]);

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const updateSelectedItems = (event) => {
    const { name, price, category, subcategory, childCategory } = event.target.dataset;
    const updatedItems = [...selectedServiceItems];

    // Create a unique identifier for the item
    const uniqueName = `${category}-${subcategory}-${name}`;

    if (event.target.checked) {
      // Add the item with the unique identifier
      updatedItems.push({ name, price: parseInt(price), category, subcategory, childCategory, uniqueName });
    } else {
      // Remove the item based on the unique identifier
      const index = updatedItems.findIndex((item) => item.uniqueName === uniqueName);
      if (index > -1) {
        updatedItems.splice(index, 1);
      }
    }

    onSelectedItemsChange(updatedItems);
  };

  const calculateTotalAmount = () => {
    const total = selectedServiceItems.reduce((acc, item) => acc + item.price, 0);
    setTotalAmount(total);
  };

  return (
    <div className="accordion-container">
      {services.map((service, serviceIndex) => (
        <div key={serviceIndex} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleSection(service.name)}>
            <div>{service.name}</div>
            <div className="arrow">{openSections[service.name] ? '▼' : '▶'}</div>
          </div>
          {openSections[service.name] && (
            <div className="accordion-content">
              {service.subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex} className="nested-accordion-item">
                  <div className="accordion-header" onClick={() => toggleSection(`${service.name}-${subcategory.name}`)}>
                    <div>{subcategory.name}</div>
                    <div className="arrow">{openSections[`${service.name}-${subcategory.name}`] ? '▼' : '▶'}</div>
                  </div>
                  {openSections[`${service.name}-${subcategory.name}`] && (
                    <div className="accordion-content">
                      {subcategory.items ? (
                        subcategory.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="item">
                            <label className="checkbox-label">
                              <input
                                type="checkbox"
                                data-name={item.name}
                                data-price={item.price}
                                data-category={service.name}
                                data-subcategory={subcategory.name}
                                onChange={updateSelectedItems}
                                checked={selectedServiceItems.some(selectedItem => selectedItem.uniqueName === `${service.name}-${subcategory.name}-${item.name}`)}
                              />
                              <span>{item.name}</span>
                            </label>
                            <span className="price">₹{item.price}</span>
                          </div>
                        ))
                      ) : (
                        subcategory.childCategories.map((childCategory, childIndex) => (
                          <div key={childIndex} className="nested-accordion-item">
                            <div className="accordion-header" onClick={() => toggleSection(`${service.name}-${subcategory.name}-${childCategory.name}`)}>
                              <div>{childCategory.name}</div>
                              <div className="arrow">{openSections[`${service.name}-${subcategory.name}-${childCategory.name}`] ? '▼' : '▶'}</div>
                            </div>
                            {openSections[`${service.name}-${subcategory.name}-${childCategory.name}`] && (
                              <div className="accordion-content">
                                {childCategory.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="item">
                                    <label className="checkbox-label">
                                      <input
                                        type="checkbox"
                                        data-name={item.name}
                                        data-price={item.price}
                                        data-category={service.name}
                                        data-subcategory={subcategory.name}
                                        data-child-category={childCategory.name}
                                        onChange={updateSelectedItems}
                                        checked={selectedServiceItems.some(selectedItem => selectedItem.uniqueName === `${service.name}-${subcategory.name}-${item.name}`)}
                                      />
                                      <span>{item.name}</span>
                                    </label>
                                    <span className="price">₹{item.price}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
