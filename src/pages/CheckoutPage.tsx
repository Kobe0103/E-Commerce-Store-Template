import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

// Define reusable types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutPage = () => {
  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState<string>('stripe');
  
  // Access cart items from Redux state
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle payment submission (placeholder)
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add custom payment logic here (e.g., redirect to Stripe, PayPal, etc.)
    alert(`Proceeding with ${paymentMethod} payment.`);
  };

  // Render the page
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Billing and Payment */}
          <div className="lg:col-span-2">
            <CheckoutForm
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              onSubmit={handlePaymentSubmit}
            />
          </div>

          {/* Right Column: Order Summary */}
          <div>
            <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

// ----------------------
// Modular Components
// ----------------------

// Checkout Form Component
interface CheckoutFormProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  paymentMethod,
  setPaymentMethod,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-lg font-bold text-gray-900 mb-6">Billing Information</h2>
    <div className="grid grid-cols-1 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
        />
      </div>
    </div>

    <div className="mt-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h2>
      <div className="space-y-4">
        <div>
          <input
            type="radio"
            id="stripe"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === 'stripe'}
            onChange={() => setPaymentMethod('stripe')}
            className="mr-2"
          />
          <label htmlFor="stripe" className="text-gray-700">
            Stripe
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
            className="mr-2"
          />
          <label htmlFor="paypal" className="text-gray-700">
            PayPal
          </label>
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700"
    >
      Proceed to Payment
    </button>
  </form>
);

// Order Summary Component
interface OrderSummaryProps {
  cartItems: CartItem[];
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems, totalPrice }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
    <ul className="divide-y divide-gray-200 mb-4">
      {cartItems.map((item) => (
        <li key={item.id} className="flex justify-between py-4">
          <div>
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">
              {item.quantity} x ${item.price.toFixed(2)}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </li>
      ))}
    </ul>
    <div className="border-t border-gray-200 pt-4">
      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
);
