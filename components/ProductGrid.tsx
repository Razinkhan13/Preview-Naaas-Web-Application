"use client";

import { useState } from "react";
import { products, categories } from "@/lib/mockData";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">
            Curated for You
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
            Our Collection
          </h2>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-neutral-400 dark:text-neutral-600">
            <p className="text-lg font-medium">No products found.</p>
          </div>
        )}

        {/* Load More (static) */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
