import { ProductCard } from "../ProductCard";
import { useState, useEffect, useCallback } from "react";
import "./ProductList.scss";

interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((imageUrl: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageUrl));
  }, []);

  const areAllImagesLoaded = products.every((product) =>
    loadedImages.has(product.imageUrl)
  );

  useEffect(() => {
    // Pre-load images
    products.forEach((product) => {
      const img = new Image();
      img.src = product.imageUrl;
      img.onload = () => handleImageLoad(product.imageUrl);
    });
  }, [products, handleImageLoad]);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setProducts([
          {
            name: "Product 1",
            price: 99.99,
            imageUrl:
              "https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Product 2",
            price: 199.99,
            imageUrl:
              "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Product 3",
            price: 299.99,
            imageUrl:
              "https://images.unsplash.com/photo-1635684542893-69b525ca4fca?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="section-title">Products list</h2>

      <div className="product-list">
        {isLoading || !areAllImagesLoaded
          ? Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="product-card skeleton">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text-short"></div>
                </div>
              ))
          : products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
      </div>
    </>
  );
};
