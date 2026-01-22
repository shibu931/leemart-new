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
];