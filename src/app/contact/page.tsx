'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";

// Note: This would normally be in a separate file for metadata
// export const metadata: Metadata = {
//   title: "Contact Leemart - Get Your Water Purification Quote",
//   description: "Contact Leemart for water purification solutions. Get a free quote, schedule consultation, or reach our support team.",
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Placeholder API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate API response
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      value: "info@leemart.com",
      icon: "📧",
      link: "mailto:info@leemart.com"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📞",
      link: "tel:+15551234567"
    },
    {
      title: "Address",
      value: "123 Water Street, Clean City, CC 12345",
      icon: "📍",
      link: "https://maps.google.com/?q=123+Water+Street+Clean+City+CC+12345"
    },
    {
      title: "Business Hours",
      value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      icon: "🕒",
      link: null
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Leemart</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience pure water? Get in touch with our experts for a free consultation and customized solution.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your water purification needs..."
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800">✅ Thank you! Your message has been sent successfully. We'll contact you soon.</p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800">❌ Sorry, there was an error sending your message. Please try again.</p>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our water purification systems? Our team of experts is here to help you find the perfect solution for your needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Emergency Contact */}
              <Card className="border-0 shadow-md bg-gradient-to-r from-red-50 to-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🚨</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Emergency Service</h3>
                      <p className="text-gray-600 mb-2">24/7 emergency water system support</p>
                      <a href="tel:+15551234567" className="text-red-600 hover:text-red-800 font-semibold">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Come see our water purification systems in action at our showroom</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Leemart Office Location"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leemart Headquarters</h3>
                  <p className="text-blue-100">123 Water Street, Clean City, CC 12345</p>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  <a href="https://maps.google.com/?q=123+Water+Street+Clean+City+CC+12345" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions about our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does installation take?</h3>
                <p className="text-gray-600">Most residential systems can be installed within 2-4 hours. Commercial and industrial installations vary based on system complexity.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer maintenance services?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive maintenance packages including regular filter changes, system checks, and 24/7 support.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in the warranty?</h3>
                <p className="text-gray-600">All our systems come with a 2-year comprehensive warranty covering parts, labor, and system performance.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get a free water test?</h3>
                <p className="text-gray-600">Absolutely! We offer free water quality testing to help determine the best purification solution for your specific needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}