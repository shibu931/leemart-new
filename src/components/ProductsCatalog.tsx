"use client";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Home, Building2, Factory } from "lucide-react";
import Image from "next/image";
import { ContactDialog } from "@/components/ContactDialog";

type Product = {
  name: string;
  slug: string;
  image: string;
  description: string;
  bulletPoints: string[];
  category: string;
  price: {
    current: number;
    original: number;
    currency: string;
    discountPercentage: number;
  };
  tags?: string[];
  featured?: boolean;
};

export default function ProductsCatalog({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"name_asc" | "name_desc" | "price_asc" | "price_desc">("name_asc");
  const [categories, setCategories] = useState<Record<Product["category"], boolean>>({
    Residential: true,
    Commercial: true,
  });

  const filtered = useMemo(() => {
    const activeCats = Object.entries(categories)
      .filter(([, v]) => v)
      .map(([k]) => k as Product["category"]);
    let list = products.filter(
      (p) =>
        activeCats.includes(p.category) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()))
    );
    list = [...list].sort((a, b) => {
      switch (sort) {
        case "name_asc":
          return a.name.localeCompare(b.name);
        case "name_desc":
          return b.name.localeCompare(a.name);
        case "price_asc":
          return a.price.current - b.price.current;
        case "price_desc":
          return b.price.current - a.price.current;
      }
    });
    return list;
  }, [products, search, sort, categories]);

  const sortLabel = {
    name_asc: "Name A–Z",
    name_desc: "Name Z–A",
    price_asc: "Price Low–High",
    price_desc: "Price High–Low",
  }[sort];

  const Filters = (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label>Search</Label>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products"
          />
        </div>
        <div className="space-y-2">
          <Label>Sort</Label>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" className="justify-between w-full">
                <span>{sortLabel}</span>
                <svg
                  className="size-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              className="bg-popover text-popover-foreground border rounded-md shadow-md p-1 min-w-56"
              side="bottom"
              align="start"
            >
              {[
                { value: "name_asc", label: "Name A–Z" },
                { value: "name_desc", label: "Name Z–A" },
                { value: "price_asc", label: "Price Low–High" },
                { value: "price_desc", label: "Price High–Low" },
              ].map((opt) => (
                <DropdownMenu.Item
                  key={opt.value}
                  onSelect={() =>
                    setSort(
                      opt.value as
                        | "name_asc"
                        | "name_desc"
                        | "price_asc"
                        | "price_desc"
                    )
                  }
                  className="text-sm px-2 py-1.5 rounded-sm cursor-pointer outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent"
                >
                  {opt.label}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <div className="flex flex-wrap gap-2">
            {[
              {
                key: "Residential" as const,
                label: "Residential",
                icon: <Home className="size-4" />,
              },
              {
                key: "Commercial" as const,
                label: "Commercial",
                icon: <Building2 className="size-4" />,
              },
            ].map((opt) => {
              const selected = categories[opt.key];
              return (
                <Button
                  key={opt.key}
                  variant={selected ? "default" : "outline"}
                  className="gap-2"
                  onClick={() =>
                    setCategories((prev) => ({ ...prev, [opt.key]: !prev[opt.key] }))
                  }
                >
                  {opt.icon}
                  {opt.label}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Showing {filtered.length} of {products.length}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:hidden mb-6">
        <details className="bg-white border rounded-lg shadow-sm">
          <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-gray-900 flex items-center justify-between">
            Filters & Sort
            <span className="text-gray-500">▾</span>
          </summary>
          <div className="p-4">{Filters}</div>
        </details>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 relative gap-8">
        <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">{Filters}</div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {filtered.map((product) => (
              <Card
                key={product.slug}
                className="group bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={320}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.tags?.includes("new") && (
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <CardContent className="px-5 pt-5 pb-3 flex flex-col h-[calc(100%-12rem)]">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price.currency}{product.price?.current.toLocaleString()}
                    </span>
                    {product.price.original > product.price.current && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.price.currency}{product.price.original.toLocaleString()}
                      </span>
                    )}
                    {product.price.discountPercentage > 0 && (
                      <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-[3px] rounded shadow-sm">
                        -{product.price.discountPercentage}% OFF
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 mb-6 flex-1">
                    {product.bulletPoints.slice(0, 3).map((bp, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span className="line-clamp-1">{bp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                    <ContactDialog productName={product.name}>
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-all hover:shadow-md" size="sm">
                        Order Now
                      </Button>
                    </ContactDialog>
                    <Button variant="outline" className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800" size="sm">
                      <Link href={`/products/${product.slug}`} className="w-full text-center">Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
