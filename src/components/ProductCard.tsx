import React from 'react';
import { Product } from '../types/products';

interface Props {
  product: Product;
  onClick?: () => void; // ✅ Now optional
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${onClick ? 'hover:shadow-lg' : ''} bg-white shadow-md rounded-lg overflow-hidden transition-shadow`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-indigo-600 font-bold">${product.price}</span>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
