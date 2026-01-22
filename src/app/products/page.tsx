import ProductsCatalog from "@/components/ProductsCatalog";
import Link from "next/link";
import type { Metadata } from "next";
import { products as dataProducts } from "../../../data/products";

export const metadata: Metadata = {
  title: "Products - Leemart",
  description:
    "Explore Leemart water purification products for homes, offices, and industries.",
};

export default function Products() {
  const slugify = (s: string) =>
    s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const products = dataProducts.map((p) => ({
    name: p.name,
    slug: slugify(p.name),
    image: p.image,
    description: p.description,
    bulletPoints: p.feature ?? [],
    category: p.category,
    price: p.price ?? {
      current: 0,
      original: 0,
      currency: "₹",
      discountPercentage: 0,
    },
    tags: p.tags,
    featured: p.featured,
  }));

  return (
    <div className="">
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Water Purification{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore systems for homes, offices, and industries. Built for
            reliability, safety, and great taste.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <ProductsCatalog products={products} />
      </section>
    </div>
  );
}
