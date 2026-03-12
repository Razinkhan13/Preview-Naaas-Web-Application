import { Product } from "@/lib/mockData";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Tag badge */}
        {product.tag && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
              product.tag === "Sale"
                ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                : "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            }`}
          >
            {product.tag}
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-[10px] font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-bold text-neutral-900 dark:text-white">
            ৳{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-neutral-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
