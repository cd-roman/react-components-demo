import "./ProductCard.scss";

interface ProductCard {
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: ProductCard;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
};
