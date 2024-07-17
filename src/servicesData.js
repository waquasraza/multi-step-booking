const services = [
  {
    name: 'Skin',
    subcategories: [
      {
        name: 'Bleach',
        items: [
          { name: 'Upper Lip', price: 100 },
          { name: 'Under Arms', price: 150 },
          { name: 'Feet', price: 200 },
          { name: 'Back of Palm', price: 150 },
          { name: 'Midriff', price: 500 },
          { name: 'Full Arms', price: 650 },
          { name: 'Half Arms', price: 550 },
          { name: 'Half Back', price: 550 },
          { name: 'Half Legs', price: 650 },
          { name: 'Full Legs', price: 900 },
          { name: 'Face Neck', price: 450 },
          { name: 'Full Back', price: 700 },
          { name: 'Full Front', price: 700 },
          { name: 'Face + Neck Blouse line', price: 500 },
          { name: 'Full Body', price: 2500 },
        ],
      },
      {
        name: 'D-Tan',
        items: [
          { name: 'Under Arms', price: 200 },
          { name: 'Feet', price: 250 },
          { name: 'Face + Neck', price: 550 },
          { name: 'Half Back', price: 650 },
          { name: 'Midriff', price: 600 },
          { name: 'Half Arms', price: 650 },
          { name: 'Full Arms', price: 650 },
          { name: 'Full Back', price: 700 },
          { name: 'Face + Neck + Back', price: 600 },
          { name: 'Half Legs', price: 750 },
          { name: 'Full Legs', price: 1000 },
          { name: 'Full Body', price: 2800 },
        ],
      },
      {
        name: 'Clean up',
        items: [
          { name: 'Classic', price: 650 },
          { name: 'Fruit', price: 850 },
          { name: 'Deep Cleanse', price: 1200 },
          { name: 'Clear skin', price: 1100 },
        ],
      },
    ],
  },
  {
    name: 'Facial',
    subcategories: [
      {
        name: 'ECO',
        items: [
          { name: 'Exotic/ tropical fresh Fruit Facial', price: 1300 },
          { name: 'Blueberry Detan', price: 1500 },
          { name: 'Age-Defying Facial', price: 1800 },
          { name: 'Clear skin', price: 1100 },
        ],
      },
      {
        name: 'ECO Plus',
        items: [
          { name: 'Teasing Sparkle Facial', price: 2000 },
          { name: 'Innovative Soulful Skin Therapy', price: 2300 },
        ],
      },
      {
        name: 'Add-on Mask',
        childCategories: [
          {
            name: 'ECO',
            items: [
              { name: 'Charcoal', price: 500 },
              { name: 'Choco indulgence', price: 550 },
            ],
          },
          {
            name: 'ECO Plus',
            items: [
              { name: 'Brightening Peel Off', price: 650 },
              { name: 'Rose Peel off', price: 600 },
            ],
          },
          {
            name: 'Grande',
            items: [
              { name: 'Gold Collagen', price: 800 },
              { name: 'Remulare', price: 850 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Body',
    subcategories: [
      {
        name: 'Polishing',
        items: [
          { name: 'Full Arms', price: 2000 },
          { name: 'Full Back', price: 2500 },
          { name: 'Full Body', price: 4500 },
        ],
      },
      {
        name: 'Massage',
        items: [
          { name: 'Full Back', price: 1000 },
          { name: 'Full Body', price: 2500 },
        ],
      },
      {
        name: 'Bio-Oil',
        items: [
          { name: 'Full Back', price: 1500 },
          { name: 'Midriff', price: 1200 },
          { name: 'Buttocks', price: 800 },
          { name: 'Full Body', price: 3500 },
        ],
      },
    ],
  },
  {
    name: 'Hair Removal',
    subcategories: [
      {
        name: 'Waxing',
        childCategories: [
          {
            name: 'Classic',
            items: [
              { name: 'Under Arms', price: 100 },
              { name: 'Forehead', price: 100 },
              { name: 'Half Arms', price: 200 },
              { name: 'Midriff', price: 300 },
              { name: 'Full Arms', price: 350 },
              { name: 'Half Legs', price: 300 },
              { name: 'Blouse Line', price: 250 },
              { name: '3/4 Legs', price: 400 },
              { name: 'Full Legs', price: 500 },
              { name: 'Full Back', price: 400 },
              { name: 'Upper Lips', price: 50 },
              { name: 'Lower Lips', price: 50 },
              { name: 'Chin', price: 50 },
              { name: 'Side Locks', price: 100 },
              { name: 'Bikini Line', price: 350 },
              { name: 'Full Face', price: 300 },
              { name: 'Buttocks', price: 300 },
              { name: 'Full Front', price: 400 },
              { name: 'Full Body', price: 1500 },
              { name: 'Full Arms + Full Legs + Under Arms', price: 700 },
            ],
          },
          {
            name: 'Flavored',
            items: [
              { name: 'Blouse Line', price: 350 },
              { name: 'Midriff', price: 400 },
              { name: 'Half Arms', price: 300 },
              { name: 'Full Arms', price: 450 },
              { name: 'Half Legs', price: 400 },
              { name: '3/4 Legs', price: 500 },
              { name: 'Full Legs', price: 600 },
              { name: 'Full Back', price: 500 },
              { name: 'Full Front', price: 500 },
              { name: 'Full Body', price: 1700 },
              { name: 'Full Arms + Full Legs', price: 800 },
            ],
          },
          {
            name: 'Argon',
            items: [
              { name: 'Blouse Line', price: 450 },
              { name: 'Midriff', price: 500 },
              { name: 'Half Arms', price: 400 },
              { name: 'Full Arms', price: 550 },
              { name: 'Half Legs', price: 500 },
              { name: '3/4 Legs', price: 600 },
              { name: 'Full Legs', price: 700 },
              { name: 'Full Back', price: 600 },
              { name: 'Full Front', price: 600 },
              { name: 'Full Body', price: 1900 },
              { name: 'Full Arms + Full Legs', price: 1000 },
            ],
          },
          {
            name: 'Peel Off',
            items: [
              { name: 'Under Arms', price: 175 },
              { name: 'Fore Head', price: 150 },
              { name: 'Upper Lip', price: 100 },
              { name: 'Lower lip', price: 100 },
              { name: 'Chin', price: 100 },
              { name: 'Side Locks', price: 150 },
              { name: 'Full Face', price: 450 },
              { name: 'Neck', price: 150 },
              { name: 'Buttock Cracks', price: 500 },
              { name: 'Brazilian', price: 1700 },
            ],
          },
        ],
      },
      {
        name: 'Threading',
        items: [
          { name: 'Eyebrows', price: 60 },
          { name: 'Lower Lip', price: 50 },
          { name: 'Upper Lip', price: 60 },
          { name: 'Chin', price: 50 },
          { name: 'Forehead', price: 60 },
          { name: 'Neck', price: 80 },
          { name: 'Side Locks', price: 70 },
          { name: 'Full Face', price: 200 },
        ],
      },
    ],
  },
  {
    name: 'Hair',
    subcategories: [
      {
        name: 'Hair Wash And Styling',
        items: [
          { name: 'L’oreal Up to Shoulder', price: 400 },
          { name: 'L’oreal Up to Midback', price: 450 },
          { name: 'L’oreal Up to Waist', price: 500 },
        ],
      },
      {
        name: 'Coloring',
        items: [
          { name: 'L’oreal Global', price: 350 },
          { name: 'L’oreal Re-Growth', price: 350 },
          { name: 'L’oreal Highlights', price: 450 },
          { name: 'L’oreal Dazzling Blonde', price: 350 },
        ],
      },
      {
        name: 'Smoothening/ Perming',
        items: [
          { name: 'L’oreal Short Length', price: 2500 },
          { name: 'L’oreal Medium Length', price: 3500 },
          { name: 'L’oreal Long Length', price: 4500 },
          { name: 'L’oreal Extra Length', price: 5500 },
        ],
      },
    ],
  },
  {
    name: 'Makeup',
    subcategories: [
      {
        name: 'Engagement Makeup',
        items: [
          { name: 'HD', price: 8000 },
          { name: 'Airdon (Stegn)', price: 10000 },
          { name: 'HD + (Stegn)', price: 11000 },
        ],
      },
      {
        name: 'Pre-Bridal Makeup',
        items: [
          { name: 'Makeup & Hair + Trial', price: 19000 },
          { name: 'Makeup & Hair', price: 16000 },
          { name: 'Makeup', price: 10000 },
        ],
      },
      {
        name: 'Bridal Makeup',
        items: [
          { name: 'Makeup & Hair + Trial', price: 23000 },
          { name: 'Makeup & Hair', price: 19000 },
          { name: 'Makeup', price: 12000 },
        ],
      },
    ],
  },
];

const categorySpecialists = {
  Skin: ['Srikanth', 'Haseena Shaikh', 'Dharni', 'Tushar'],
  Facial: ['Srikanth', 'Haseena Shaikh', 'Dharni', 'Tushar'],
  Body: ['Srikanth', 'Haseena Shaikh', 'Dharni', 'Tushar'],
  "Hair Removal": ['Srikanth', 'Haseena Shaikh', 'Dharni', 'Tushar'],
  Hair: ['Srikanth', 'Haseena Shaikh', 'Dharni', 'Tushar'],
  Makeup: ['Srikanth', 'Haseena Shaikh', 'Dharni', 'Tushar'],
};


const statesData = {
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    Delhi: ["New Delhi", "Delhi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    // Add more states and cities as needed
  },
  // Add more countries if needed
};

export { services, categorySpecialists,statesData };
