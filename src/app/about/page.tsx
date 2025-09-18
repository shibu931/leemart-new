import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Leemart - Our Story & Mission",
  description: "Learn about Leemart's commitment to providing safe, pure water through advanced purification technologies. Our story, mission, and values.",
};

export default function About() {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our water purification systems and services.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Continuously advancing our technology to provide the most effective purification solutions.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable water treatment solutions.",
      icon: "🌱"
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction and health are at the center of everything we do.",
      icon: "❤️"
    },
    {
      title: "Reliability",
      description: "Dependable systems and support you can count on, 24/7.",
      icon: "🛡️"
    },
    {
      title: "Expertise",
      description: "Decades of combined experience in water treatment and purification technology.",
      icon: "🎓"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Technology Officer",
      description: "15+ years in water treatment technology with PhD in Environmental Engineering.",
      image: "👩‍🔬"
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Operations",
      description: "Expert in large-scale water system implementation and industrial solutions.",
      image: "👨‍💼"
    },
    {
      name: "Dr. James Wilson",
      position: "Quality Assurance Director",
      description: "Specialist in water quality testing and regulatory compliance.",
      image: "👨‍🔬"
    },
    {
      name: "Lisa Thompson",
      position: "Customer Success Manager",
      description: "Dedicated to ensuring exceptional customer experience and satisfaction.",
      image: "👩‍💼"
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started with a vision to make pure water accessible to everyone"
    },
    {
      year: "2015",
      title: "Industrial Expansion",
      description: "Expanded services to include large-scale industrial water treatment"
    },
    {
      year: "2018",
      title: "Technology Innovation",
      description: "Introduced advanced UV-C and alkaline enhancement technologies"
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Launched eco-friendly water treatment solutions"
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Recognized as a leading provider of water purification solutions"
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Leemart</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of water purification with cutting-edge technology and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2010, Leemart began with a simple yet powerful mission: to ensure everyone has access to pure, safe drinking water. 
                  What started as a small team of water treatment specialists has grown into a leading provider of advanced purification solutions.
                </p>
                <p className="text-lg">
                  Our journey has been driven by continuous innovation and an unwavering commitment to quality. We&apos;ve pioneered the integration of 
                  RO, UV, and alkaline technologies to create comprehensive water treatment systems that exceed industry standards.
                </p>
                <p className="text-lg">
                  Today, we serve thousands of satisfied customers across residential, commercial, and industrial sectors, maintaining our 
                  reputation for excellence and reliability in every project we undertake.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">💧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pure Water, Pure Trust</h3>
                <p className="text-gray-700">
                  Over 14 years of excellence in water purification, serving communities and industries with innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg">
                  To deliver crystal-clear, safe water through innovative purification technologies, 
                  ensuring the health and well-being of communities while maintaining the highest 
                  standards of quality and environmental responsibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be the global leader in water purification technology, creating a world where 
                  everyone has access to pure, healthy water through sustainable and innovative solutions 
                  that protect both people and the planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our commitment to advancing water purification technology
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Leemart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering the best water purification solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            Ready to Experience Pure Water?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Leemart for their water purification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}