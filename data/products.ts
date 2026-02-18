export const products = [
  {
    id: 1,
    name: "Leemart Robo",
    price: {
      current: 18999,
      original: 24500,
      currency: "₹",
      discountPercentage: 22,
    },
    category: "Residential",
    image: "/Products/Leemart Robo Water Purifer.jpg",
    description: "Robust automated purification with auto-flush technology ensures longer membrane life.",
    featured: true,
    feature: ["Intelligent Auto-Flush", "High Duty Membrane", "LED Operation Indicators"],
    techSpecs: {
      technology: ["RO", "UV", "UF", "TDS Controller"],
      stagesOfPurification: 6,
      storageCapacity: 8, 
      purificationCapacity: 15,
      maxTDS: 2000,
      material: "Food Grade ABS Plastic"
    },
    dimensions: {
      height: 48,
      width: 30,
      depth: 24,
      weight: 8.0 
    },
    tags: ["bestseller", "durable"]
  },
  {
    id: 2,
    name: "Leemart Auro Pro",
    price: {
      current: 23500,
      original: 29999,
      currency: "₹",
      discountPercentage: 21,
    },
    category: "Residential",
    image: "/Products/Leemart Auro Pro Water Purifier.jpg",
    description: "Premium alkaline technology that maintains pH balance (8.5+) for antioxidant-rich water.",
    featured: true,
    feature: ["Alkaline Booster Technology", "Fruit & Veggie Detoxifier", "Zero Water Wastage Mode"],
    techSpecs: {
      technology: ["RO", "UV", "Alkaline", "Copper"],
      stagesOfPurification: 8,
      storageCapacity: 10,
      purificationCapacity: 20, // Higher flow
      maxTDS: 2500,
      material: "Premium ABS + Glass Facade"
    },
    dimensions: {
      height: 50,
      width: 34,
      depth: 28,
      weight: 9.5
    },
    tags: ["premium", "alkaline"]
  },
  {
    id: 3,
    name: "Leemart Classic+",
    price: {
      current: 18200,
      original: 22000,
      currency: "₹",
      discountPercentage: 17,
    },
    category: "Residential",
    image: "/Products/Leemart Classic+ water purifier.jpg",
    description: "The reliable family choice with essential multi-stage filtration for municipal water sources.",
    featured: false,
    feature: ["Energy Saving Mode", "Transparent Water Level Indicator", "Compact Design"],
    techSpecs: {
      technology: ["RO", "UV", "Mineral Guard"],
      stagesOfPurification: 6,
      storageCapacity: 7,
      purificationCapacity: 12,
      maxTDS: 1500,
      material: "Food Grade Polycarbonate"
    },
    dimensions: {
      height: 42,
      width: 30,
      depth: 25,
      weight: 7.2
    },
    tags: ["budget", "classic"]
  },
  {
    id: 4,
    name: "Leemart Crome",
    price: {
      current: 21999,
      original: 26500,
      currency: "₹",
      discountPercentage: 17,
    },
    category: "Residential",
    image: "/Products/Leemart Crome Water Purifier.jpg",
    description: "Elegant metallic finish with a stainless steel internal tank for UV-sterile storage.",
    featured: true,
    feature: ["Stainless Steel Storage Tank", "UV LED in Tank", "Sleek Metallic Finish"],
    techSpecs: {
      technology: ["RO", "UV", "SS-Tank"],
      stagesOfPurification: 7,
      storageCapacity: 6, 
      purificationCapacity: 15,
      maxTDS: 2000,
      material: "ABS with Chrome Finish"
    },
    dimensions: {
      height: 46,
      width: 33,
      depth: 23, // Slimmer profile
      weight: 8.8
    },
    tags: ["design", "steel-tank"]
  },
  {
    id: 5,
    name: "Leemart Dolphin",
    price: {
      current: 19500,
      original: 24000,
      currency: "₹",
      discountPercentage: 18,
    },
    category: "Residential",
    image: "/Products/Leemart Dolphin Water Purifer.jpg",
    description: "Large capacity purifier with a visual tank, perfect for large families.",
    featured: false,
    feature: ["Extra Large 12L Storage", "Visual Water Level", "High Recovery Rate"],
    techSpecs: {
      technology: ["RO", "UV", "UF"],
      stagesOfPurification: 7,
      storageCapacity: 12, // Distinct feature
      purificationCapacity: 18,
      maxTDS: 2000,
      material: "Food Grade ABS Plastic"
    },
    dimensions: {
      height: 52,
      width: 36,
      depth: 30, // Deeper for tank
      weight: 9.0
    },
    tags: ["large-capacity"]
  },
  {
    id: 6,
    name: "Leemart Nexa Smart",
    price: {
      current: 23999,
      original: 31000,
      currency: "₹",
      discountPercentage: 22,
    },
    category: "Residential",
    image: "/Products/Leemart Nexa Smart Water Purifier.jpg",
    description: "IoT enabled purifier with real-time water quality tracking via mobile app.",
    featured: true,
    feature: ["WiFi Connectivity", "App Filter Alerts", "Touch Interface Sensor"],
    techSpecs: {
      technology: ["RO", "UV", "IoT", "Alkaline"],
      stagesOfPurification: 8,
      storageCapacity: 8,
      purificationCapacity: 20,
      maxTDS: 3000, // Handles high TDS
      material: "Smart Glass Panel + ABS"
    },
    dimensions: {
      height: 48,
      width: 35,
      depth: 27,
      weight: 10.5
    },
    tags: ["smart-home", "app-controlled"]
  },
  {
    id: 7,
    name: "Leemart Nova Digital",
    price: {
      current: 20800,
      original: 25900,
      currency: "₹",
      discountPercentage: 19,
    },
    category: "Residential",
    image: "/Products/Leemart Nova Digital Water Purifier.jpg",
    description: "Advanced digital display shows live TDS levels and filter life status.",
    featured: true,
    feature: ["Live TDS Display", "Filter Change Alarm", "Child Lock Function"],
    techSpecs: {
      technology: ["RO", "UV", "MTDS"],
      stagesOfPurification: 7,
      storageCapacity: 9,
      purificationCapacity: 15,
      maxTDS: 2000,
      material: "Food Grade ABS Plastic"
    },
    dimensions: {
      height: 47,
      width: 32,
      depth: 26,
      weight: 8.2
    },
    tags: ["digital", "new"]
  },
  {
    id: 8,
    name: "Leemart Undersink",
    price: {
      current: 22500,
      original: 28000,
      currency: "₹",
      discountPercentage: 19,
    },
    category: "Residential",
    image: "/Products/Leemart Undersink Water Purifier.jpg",
    description: "Space-saving design installs hidden under your kitchen counter with a dedicated faucet.",
    featured: true,
    feature: ["Hidden Installation", "High Pressure Faucet", "Hydro-Pneumatic Tank"],
    techSpecs: {
      technology: ["RO", "UV", "Post-Carbon"],
      stagesOfPurification: 6,
      storageCapacity: 8, // Pressure tank
      purificationCapacity: 20,
      maxTDS: 2500,
      material: "Metal Housing"
    },
    dimensions: {
      height: 38, // Shorter
      width: 28,
      depth: 40, // Deeper
      weight: 11.0 // Heavier tank
    },
    tags: ["modular-kitchen", "compact"]
  },
  {
    id: 9,
    name: "Leemart Vortex",
    price: {
      current: 19999,
      original: 24999,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Residential",
    image: "/Products/Leemart Vortex Water Purifier.jpg",
    description: "Engineered for high-flow purification with enhanced swirl technology for better membrane efficiency.",
    featured: false,
    feature: ["Vortex Flow Technology", "Scale Guard", "Fast Tank Refill"],
    techSpecs: {
      technology: ["RO", "UV", "UF", "Active Copper"],
      stagesOfPurification: 7,
      storageCapacity: 10,
      purificationCapacity: 18, // Fast flow
      maxTDS: 2000,
      material: "Reinforced ABS"
    },
    dimensions: {
      height: 49,
      width: 33,
      depth: 27,
      weight: 8.9
    },
    tags: ["high-flow", "efficient"]
  },
  {
    id: 10,
    name: "Leemart 50 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_50_lph_water_purifier.webp",
    description: "Compact cabinet-style RO system designed for high-demand environments like offices and small cafes.",
    featured: false,
    feature: [
      "Fully Stainless Steel Body",
      "Purification Technology : RO",
      "50 Liter Per Hour, Two 150 Gpd Booster Pump, Four Pices Membrane And One Activated Carbon Filter",
      "Max. Duty Cycle Per Day 500 Litre Suitable For Home, Office, Hotel, Restaurant, Cafe and Factory"
    ],
    techSpecs: {
      technology: ["RO", "Activated Carbon"],
      stagesOfPurification: 5,
      storageCapacity: "Optional External",
      purificationCapacity: "50 LPH",
      maxTDS: 1500,
      material: "Stainless Steel"
    },
    dimensions: {
      height: "90 cm",
      width: "30 cm",
      depth: "60 cm",
      weight: "50 kg"
    },
    tags: ["Commercial RO", "50 LPH", "Office Purifier"]
  },
  {
    id: 11,
    name: "Leemart 100 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_100_lph_water_purifier.webp",
    description: "Heavy-duty wall-mounted purifier with US-imported membranes for superior filtration up to 4000 TDS.",
    featured: false,
    feature: [
      "Multi stage water purification technology",
      "Hi Quality US Import RO Membrane 4 pcs works up to 4000 tds",
      "Stainless steel body with high performing 300 GPD booster pump",
      "Wall Mounted Product no need extra Stand for Installation."
    ],
    techSpecs: {
      technology: ["RO", "UV", "UF"],
      stagesOfPurification: 7,
      storageCapacity: "7 Liters (Internal buffer)",
      purificationCapacity: "100 LPH",
      maxTDS: 4000,
      material: "Stainless Steel / ABS"
    },
    dimensions: {
      height: "90 cm",
      width: "55 cm",
      depth: "30 cm",
      weight: "32 kg"
    },
    tags: ["High TDS", "100 LPH", "Wall Mounted"]
  },
  {
    id: 12,
    name: "Leemart 500 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_500_lph_water_purifier.webp",
    description: "Industrial grade RO plant with auto-flush function and NSF certified membranes for continuous operation.",
    featured: false,
    feature: [
      "Automatic 500 LPH RO Plant Industrial Machine with Auto-flush Function",
      "NSF Certified BW 4040 Reverse Osmosis Membrane 2 Nos",
      "Maximum Duty cycle per day: 11000 Ltr or 22 Hours Operation"
    ],
    techSpecs: {
      technology: ["Industrial RO", "Antiscalant Dosing"],
      stagesOfPurification: 6,
      storageCapacity: "External Tank Required",
      purificationCapacity: "500 LPH",
      maxTDS: 3000,
      material: "SS 304 / Powder Coated MS"
    },
    dimensions: {
      height: "150 cm",
      width: "120 cm",
      depth: "70 cm",
      weight: "250 kg"
    },
    tags: ["Industrial RO", "RO Plant", "Large Scale"]
  },
  {
    id: 13,
    name: "Leemart 1000 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_1000_lph_water_purifier.webp",
    description: "Fully automatic industrial plant featuring high-performance copper winded pumps and 8-stage filtration.",
    featured: false,
    feature: [
      "Fully automatic RO water purifier with AUTO SHUT OFF Function",
      "This filter removes objectionable Taste and Odors to enhance the quality of your drinking water.",
      "Fully Stainless Steel Body With Two 100 GPD High Performance Copper Winded Booster Pump"
    ],
    techSpecs: {
      technology: ["RO", "UV", "UF", "Carbon"],
      stagesOfPurification: 8,
      storageCapacity: "External Tank Required",
      purificationCapacity: "1000 LPH",
      maxTDS: 3500,
      material: "SS 304"
    },
    dimensions: {
      height: "184 cm",
      width: "197 cm",
      depth: "92 cm",
      weight: "400 kg"
    },
    tags: ["1000 LPH", "Automatic RO", "Industrial"]
  },
  {
    id: 14,
    name: "Leemart 2000 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_2000_lph_water_purifier.webp",
    description: "High-capacity pre-treatment and micron filtration system designed for 20-hour daily duty cycles.",
    featured: false,
    feature: [
      "Working Design Upto 18-20 hours",
      "Pre-treatment to remove organic impurities and dissolved gases",
      "Micron filtration to remove impurities up to 5 micron",
      "Low operation Cost And long life span",
      "Easy to control and maintain"
    ],
    techSpecs: {
      technology: ["Advanced RO", "Sand Filter", "Multi-Stage"],
      stagesOfPurification: 9,
      storageCapacity: "External Tank Required",
      purificationCapacity: "2000 LPH",
      maxTDS: 3000,
      material: "SS / FRP"
    },
    dimensions: {
      height: "195 cm",
      width: "490 cm",
      depth: "72 cm",
      weight: "660 kg"
    },
    tags: ["2000 LPH", "Heavy Industrial", "Continuous Operation"]
  },
  {
    id: 15,
    name: "Leemart 5000 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_5000_lph_water_purifier.webp",
    description: "Massive scale water purification for factories and townships with advanced PLC-based control systems.",
    featured: false,
    feature: [
      "Working Design Upto 18-20 hours",
      "Pre-treatment to remove organic impurities and dissolved gases",
      "Micron filtration to remove impurities up to 5 micron",
      "Low operation Cost And long life span",
      "Easy to control and maintain"
    ],
    techSpecs: {
      technology: ["RO", "Dosing", "Pre-treatment"],
      stagesOfPurification: 10,
      storageCapacity: "External Tank Required",
      purificationCapacity: "5000 LPH",
      maxTDS: 2500,
      material: "SS / FRP Skid"
    },
    dimensions: {
      height: "230 cm",
      width: "820 cm",
      depth: "95 cm",
      weight: "1350 kg"
    },
    tags: ["5000 LPH", "Township Purifier", "Plant"]
  },
  {
    id: 16,
    name: "Leemart 10000 LPH Water Purifier",
    price: {
      current: null,
      original: null,
      currency: "₹",
      discountPercentage: 20,
    },
    category: "Commercial",
    image: "/Products/Commercial/Leemart_10000_lph_water_purifier.webp",
    description: "Top-tier industrial RO plant for river and borewell water treatment at maximum efficiency.",
    featured: false,
    feature: [
      "Working Design Upto 18-20 hours",
      "Pre-treatment to remove organic impurities and dissolved gases",
      "Micron filtration to remove impurities up to 5 micron",
      "Low operation Cost And long life span",
      "Easy to control and maintain"
    ],
    techSpecs: {
      technology: ["RO", "PLC Control", "Industrial Filtration"],
      stagesOfPurification: 10,
      storageCapacity: "10000 Liter External Buffer",
      purificationCapacity: "10000 LPH",
      maxTDS: 2000,
      material: "SS / Industrial Composite"
    },
    dimensions: {
      height: "270 cm",
      width: "865 cm",
      depth: "120 cm",
      weight: "2050 kg"
    },
    tags: ["10000 LPH", "Industrial Grade", "Water Treatment"]
  }

];