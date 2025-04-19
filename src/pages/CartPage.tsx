// src/pages/CartPage.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
            <Link to="/shop" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <li key={item.id} className="flex py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-500">${item.price} x {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h2 className="text-lg font-medium">Total: ${totalPrice.toFixed(2)}</h2>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  onClick={() => alert('Cart cleared (implement functionality).')}
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Go to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
