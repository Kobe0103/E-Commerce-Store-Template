import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../types/products';

const ShopPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedCategory(category || null);
  }, [category]);

  const allSections = Array.from(new Set(sampleProducts.map(p => p.section)));

  const selectedProducts = selectedCategory
    ? sampleProducts.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
    : sampleProducts;

  const sectionName = selectedProducts[0]?.section;
  const sectionProducts = sectionName
    ? sampleProducts.filter(p => p.section === sectionName && !selectedProducts.includes(p))
    : [];

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat);
    navigate(cat ? `/shop/${cat}` : '/shop');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedCategory ? selectedCategory : 'All Products'}
            </h1>

            <select
              className="mt-4 md:mt-0 block w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={selectedCategory || 'All'}
              onChange={(e) =>
                handleCategoryChange(e.target.value === 'All' ? null : e.target.value)
              }
            >
              <option value="All">All</option>
              {[...new Set(sampleProducts.map(p => p.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Main filtered products */}
          {selectedProducts.length === 0 ? (
            <p className="text-gray-500">No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {selectedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))}
            </div>
          )}

          {/* Other products from same section */}
          {sectionProducts.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                More in {sectionName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sectionProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
