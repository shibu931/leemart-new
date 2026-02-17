import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Purification Services - Leemart",
  description: "Comprehensive water purification solutions for homes, offices, and industries. RO, UV, and alkaline systems with professional installation and maintenance.",
};

export default function Services() {
  const services = [
    {
      category: "Residential Solutions",
      icon: "🏠",
      description: "Perfect water purification systems for your home and family",
      solutions: [
        {
          name: "Home RO System",
          description: "Complete reverse osmosis system for kitchen use with 5-stage filtration",
          features: ["5-stage filtration", "10L storage tank", "Easy maintenance", "2-year warranty"]
        },
        {
          name: "Whole House Filter",
          description: "Comprehensive filtration for entire home water supply",
          features: ["Multi-stage filtration", "High flow rate", "Sediment removal", "Chlorine reduction"]
        },
        {
          name: "UV Water Sterilizer",
          description: "UV-C technology for eliminating bacteria and viruses",
          features: ["99.99% pathogen elimination", "Chemical-free", "Low maintenance", "Instant purification"]
        }
      ]
    },
    {
      category: "Commercial & Office",
      icon: "🏢",
      description: "Scalable water solutions for businesses and office environments",
      solutions: [
        {
          name: "Office Water Cooler System",
          description: "High-capacity purification with hot and cold water dispensing",
          features: ["Hot & cold water", "High capacity", "Energy efficient", "Professional installation"]
        },
        {
          name: "Restaurant Grade System",
          description: "Commercial-grade purification for food service industry",
          features: ["Food-grade materials", "High flow rate", "NSF certified", "24/7 support"]
        },
        {
          name: "Industrial RO Plant",
          description: "Large-scale reverse osmosis systems for manufacturing",
          features: ["High capacity", "Automated operation", "Quality monitoring", "Custom design"]
        },
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Installation & Setup",
      description: "Professional installation by certified technicians",
      icon: "🔧"
    },
    {
      title: "Maintenance & Support",
      description: "Regular maintenance and 24/7 technical support",
      icon: "🛠️"
    },
    {
      title: "Water Quality Testing",
      description: "Comprehensive water analysis and quality reports",
      icon: "🧪"
    },
    {
      title: "System Upgrades",
      description: "Upgrade existing systems with latest technology",
      icon: "⬆️"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Water Purification <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive water treatment solutions tailored for residential, commercial, and industrial needs. 
            From single-home systems to large-scale industrial plants.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <Card key={solutionIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{solution.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-blue-600 text-xs">✓</span>
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete support services to ensure your water purification system operates at peak performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Pure Water?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and customized water purification solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button variant="outline" className="border-white text-blue-600 hover:bg-white/10 px-8 py-3">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}