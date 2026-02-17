import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactDialog } from "@/components/ContactDialog";

const products = [
  {
    slug: "home-ro-system",
    name: "Home RO System",
    icon: "💧",
    description:
      "Advanced reverse osmosis system for clean, safe drinking water at home.",
    features: ["7-stage filtration", "Mineral retention", "Smart monitoring"],
  },
  {
    slug: "uv-sterilizer-unit",
    name: "UV Sterilizer Unit",
    icon: "☀️",
    description:
      "Ultraviolet sterilization to eliminate bacteria and viruses effectively.",
    features: ["UV-C lamp", "Low maintenance", "Energy efficient"],
  },
  {
    slug: "alkaline-purifier",
    name: "Alkaline Purifier",
    icon: "⚖️",
    description:
      "Balances pH and enriches water with essential minerals for better taste.",
    features: ["pH balancing", "Mineral cartridge", "Great taste"],
  },
  {
    slug: "commercial-ro-plant",
    name: "Commercial RO Plant",
    icon: "🏢",
    description:
      "High-capacity RO systems designed for restaurants, offices, and schools.",
    features: ["High flow rate", "NSF compliant", "24/7 support"],
  },
  {
    slug: "whole-house-filter",
    name: "Whole-House Filter",
    icon: "🏠",
    description:
      "Point-of-entry filtration delivering clean water to every tap at home.",
    features: ["Sediment removal", "Carbon filtering", "Easy servicing"],
  },
  {
    slug: "industrial-treatment-system",
    name: "Industrial Treatment System",
    icon: "🏭",
    description:
      "Heavy-duty purification for manufacturing and process water requirements.",
    features: ["Custom design", "Automated control", "Quality monitoring"],
  },
];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found - Leemart",
      description: "The requested product could not be found.",
    };
  }
  return {
    title: `${product.name} - Leemart`,
    description: product.description,
  };
}

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="">
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {product.description}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button variant="outline">
              <Link href="/products">All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">{product.icon}</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Key Features
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-semibold bg-blue-50 text-blue-600 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <ContactDialog productName={product.name}>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Request a Quote
                  </Button>
                </ContactDialog>
                <Button variant="outline">
                  <Link href="/services">Related Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
