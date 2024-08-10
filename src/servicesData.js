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
      {
        name: 'Targated Treatment',
        items: [
          { name: 'Under Eye', price: 650 },
          { name: 'Dermatological Pro Flash Eye Treatment', price: 1000 },
          { name: 'Under Arm Treatment ', price: 800 },
          { name: 'Dermalogical Under Arms', price: 1000 },
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
        name: 'Makeup List',
        items: [
          { name: 'Saree Draping', price: 500 },
          { name: 'Eye Makeup', price: 800 },
          { name: 'Normal Makeup', price: 2000 },
          { name: 'Party Makeup', price: 2500 },
          { name: 'Engagement Makeup', price: 5000 },
          { name: 'Pre Bridal Package', price: 5000 },
          { name: 'Bridal Makeup', price: 15000 },
        ],
      },
      // {
      //   name: 'Pre-Bridal Makeup',
      //   items: [
      //     { name: 'Makeup & Hair + Trial', price: 19000 },
      //     { name: 'Makeup & Hair', price: 16000 },
      //     { name: 'Makeup', price: 10000 },
      //   ],
      // },
      // {
      //   name: 'Bridal Makeup',
      //   items: [
      //     { name: 'Makeup & Hair + Trial', price: 23000 },
      //     { name: 'Makeup & Hair', price: 19000 },
      //     { name: 'Makeup', price: 12000 },
      //   ],
      // },
    ],
  },
];

const categorySpecialists = {
  Skin: ['Srikanth', 'Haanika', 'Dharani', 'Tushar', 'Rakesh', 'Rajitha', 'Mamatha'],
  Facial: ['Srikanth', 'Haanika', 'Dharani', 'Tushar', 'Rakesh', 'Rajitha', 'Mamatha'],
  Body: ['Srikanth', 'Haanika', 'Dharani', 'Tushar', 'Rakesh', 'Rajitha', 'Mamatha'],
  "Hair Removal": ['Srikanth', 'Haanika', 'Dharani', 'Tushar', 'Rakesh', 'Rajitha', 'Mamatha'],
  Hair: ['Srikanth', 'Haanika', 'Dharani', 'Tushar', 'Rakesh', 'Rajitha', 'Mamatha'],
  Makeup: ['Srikanth', 'Haanika', 'Dharani', 'Tushar', 'Rakesh', 'Rajitha', 'Mamatha'],
};


const statesData = {
  India: {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "YSR Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "Sri Potti Sriramulu Nellore", "Vizianagaram", "Parvathipuram Manyam", "Alluri Sitharama Raju", "Anakapalli", "Kakinada", "Konaseema", "NTR", "Palnadu", "Bapatla", "Sri Sathya Sai", "Annamayya", "Tirupati"],
    "Arunachal Pradesh": [ "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
    Assam: [ "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    Bihar: [ "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    Chhattisgarh: ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
    Goa: ["North Goa", "South Goa"],
    Gujarat: ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dang (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda (Nadiad)","Kutch","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"],
    Haryana: ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram (Gurgaon)","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
    "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"],
    Jharkhand: ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"],
    Karnataka: ["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"],
    Kerala: ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
    "Madhya Pradesh": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Ratlam","Rewa","Sagar","Satna","Sehore","Senapati","Shahdol","Shajapur","Sheopur","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
    Maharashtra: ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalna","Jalgaon","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nasik","Osmanabad","Palghar","Parbhani","Pune","Ratnagiri","Raigad","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
    Manipur: [ "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Ukhrul", "West Imphal"],
    Meghalaya: [ "East Garo Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Khasi Hills"],
    Mizoram: [ "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    Nagaland: [ "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    Odisha: [ "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Bolangir", "Cuttack", "Dhenkanal", "Ganjam", "Gajapati", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khurda", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sudurpashchim", "Nayagarh"],
    Punjab: [ "Amritsar", "Barnala", "Bathinda", "Fatehgarh Sahib", "Fazilka", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Patiala", "Roopnagar (Rupnagar)", "Sangrur", "SAS Nagar (Mohali)", "Tarn Taran"],
    Rajasthan: [ "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Kota", "Nagaur", "Pali", "Rajsamand", "Sawai Madhopur", "Sikar", "Tonk", "Udaipur"],
    Sikkim: [ "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    TamilNadu: [ "Ariyalur", "Chengalpattu", "Chennai", "Chirangudi", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivagangai", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Vellore", "Viluppuram", "Virudhunagar"],
    Telangana: [ "Adilabad", "Hyderabad", "Jagtiyal", "Jagtial", "Kamareddy", "Karimnagar", "Khammam", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Nalgonda", "Nizamabad", "Peddapalli", "Rangareddy", "Sangareddy", "Siddipet", "Vikarabad", "Wanaparthy", "Warangal (Rural)", "Warangal (Urban)", "Yadadri Bhuvanagiri"],
    Tripura: [ "Dhalai", "Gomati", "North Tripura", "South Tripura", "Unakoti", "West Tripura"],
    "Uttar Pradesh": [ "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad (Ayodhya)", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Ravidas Nagar (Bhadohi)", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    Uttarakhand: [ "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "West Bengal": [ "Alipurduar", "Bankura", "Birbhum", "Burdwan", "Cooch Behar", "Darjeeling", "Dedinagore", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
  },
  // Add more countries if needed
};

export { services, categorySpecialists,statesData };
