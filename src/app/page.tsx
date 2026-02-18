import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import { ContactDialog } from "@/components/ContactDialog";

export default function Home() {
  const technologies = [
    {
      name: "RO Purification",
      description:
        "Advanced Reverse Osmosis technology removes 99.9% of contaminants",
      icon: "💧",
    },
    {
      name: "UV Sterilization",
      description: "Ultraviolet light eliminates harmful bacteria and viruses",
      icon: "☀️",
    },
    {
      name: "Alkaline Enhancement",
      description: "Balances pH levels for healthier, mineral-rich water",
      icon: "⚖️",
    },
  ];

  const clients = [
    "/clients/client001.jpg",
    "/clients/client002.png",
    "/clients/client003.jpeg",
    "/clients/client004.jpeg",
    "/clients/client005.png",
    "/clients/client006.jpeg",
    "/clients/client007.png",
    "/clients/client008.jpeg",
    "/clients/client009.png",
    "/clients/client010.png",
    "/clients/client011.jpg",
    "/clients/client012.jpg",
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-12 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <p className="text-xs md:text-sm text-blue-600 font-semibold mb-4 tracking-wider flex items-center justify-center lg:justify-start">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">✓</span>
                </span>
                Trusted by 10,000+ Customers
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Safe, Pure &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Sustainable
                </span>
                Water Solutions
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none">
                Leemart delivers crystal-clear water with cutting-edge RO, UV,
                and alkaline purification technologies. We serve both
                residential and industrial clients, ensuring the highest safety
                standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">Get Free Consultation →</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-blue-500 text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Column */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background decorative circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 transform scale-110"></div>

                {/* Hero Image */}
                <div className="relative z-10 w-80 h-96 lg:w-[540px] lg:h-[500px]">
                  <Image
                    src="/leemart_banner.webp"
                    alt="Woman holding a clean glass of water"
                    width={384}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Floating elements around the image */}
                <div className="absolute top-10 -left-5 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-32 -right-8 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute bottom-20 -left-8 w-5 h-5 bg-blue-500 rounded-full opacity-35 animate-bounce delay-300"></div>
                <div className="absolute bottom-40 right-5 w-4 h-4 bg-cyan-300 rounded-full opacity-25 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background floating water drops animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute top-60 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-18 animate-bounce delay-300"></div>
        </div>
      </section>

      {/* Residential Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Residential Water Purifiers
            </h2>
            <p className="text-lg text-gray-600">
              Discover our best-selling residential water purification systems
              designed for families and homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products
              .filter((product) => product.category === "Residential")
              .slice(0, 4)
              .map((product) => (
                  <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    <CardContent className="p-0">
                      <div className="relative w-full h-64 bg-gray-100 rounded-t-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {product.price.discountPercentage && (
                          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            -{product.price.discountPercentage}%
                          </div>
                        )}
                      </div>
                      <div className="p-4 pb-0">
                        <Link href={`/products/${product.name.replace(/\s+/g, "-").toLowerCase()}`}><h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3></Link>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-blue-600">
                              {product.price.currency}
                              {product.price.current}
                            </span>
                            <span className="text-sm text-gray-400 line-through ml-2">
                              {product.price.currency}
                              {product.price.original}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <ContactDialog productName={product.name}>
                            <Button
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-all hover:shadow-md rounded-sm"
                              size="sm"
                            >
                              Order Now
                            </Button>
                          </ContactDialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/products?category=Residential">
                View More Residential Products →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Water Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Industrial-grade water purification systems for businesses,
              factories, and commercial establishments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products
              .filter((product) => product.category === "Commercial")
              .slice(0, 4)
              .map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.name.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    <CardContent className="p-0">
                      <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <ContactDialog>
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                              Get Quote
                            </Button>
                          </ContactDialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/products?category=Commercial">
                View More Commercial Products →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Purification Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our cutting-edge systems combine multiple purification methods to
              deliver the purest water possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Leemart Leads the Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique selling propositions that set us apart from the
              competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600">
                Trusted expertise in water purification solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Award Winning
              </h3>
              <p className="text-gray-600">
                Recognized for excellence in water treatment technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lab Tested
              </h3>
              <p className="text-gray-600">
                All products undergo rigorous quality testing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Sustainable solutions for a greener future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Water Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features that make our water purification systems the
              best choice for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multi-Stage Filtration
                </h3>
                <p className="text-gray-600">
                  Advanced 7-stage purification process removes all contaminants
                  while retaining essential minerals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-cyan-600 text-xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Smart Monitoring
                </h3>
                <p className="text-gray-600">
                  IoT-enabled systems with real-time water quality monitoring
                  and mobile app control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Energy Efficient
                </h3>
                <p className="text-gray-600">
                  Low power consumption with automatic shut-off and
                  energy-saving modes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Safety Certified
                </h3>
                <p className="text-gray-600">
                  NSF, WQA, and ISO certified products ensuring the highest
                  safety standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Easy Maintenance
                </h3>
                <p className="text-gray-600">
                  Self-cleaning technology and easy filter replacement with
                  indicator alerts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Tailored water treatment solutions for specific industrial and
                  residential needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Trusted Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to serve a diverse range of clients, from residential
              homes to large industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied customers who trust Leemart for
              their water purification needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;The water quality has improved dramatically since
                  installing Leemart&apos;s RO system. Our family feels much
                  safer drinking the water now. Excellent service and
                  support!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-semibold">RS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Rajesh Sharma
                    </h4>
                    <p className="text-gray-500 text-sm">Homeowner, Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;Leemart&apos;s industrial water treatment solution has
                  significantly reduced our operational costs while ensuring
                  consistent water quality. Highly recommended for
                  businesses!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-semibold">AP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anita Patel</h4>
                    <p className="text-gray-500 text-sm">
                      Factory Manager, Delhi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;The smart monitoring feature is amazing! I can check
                  water quality from my phone. The installation was professional
                  and the team was very knowledgeable.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-semibold">MK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manoj Kumar</h4>
                    <p className="text-gray-500 text-sm">
                      IT Professional, Noida
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-4 transition-all duration-300"
            >
              <Link href="/about">Read More Reviews</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Brand Description */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Leemart?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-lg">
                    99.9% contaminant removal efficiency
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-lg">
                    Certified for residential and industrial use
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-lg">
                    24/7 customer support and maintenance
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-lg">
                    Eco-friendly and energy-efficient systems
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <p className="mb-6">
                Contact us today for a free consultation and quote tailored to
                your needs.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/contact">Contact Us Now →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
