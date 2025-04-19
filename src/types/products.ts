import headphonesImg from '../assets/images/headphones.jpg';
import smartphoneImg from '../assets/images/smartphone.jpg';
import laptopImg from '../assets/images/laptop.jpg';
import coffeeMakerImg from '../assets/images/coffee-maker.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  section: string;
  rating: number;
}

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Noise cancelling wireless headphones with 30hr battery life",
    image: headphonesImg,
    category: "Headphones",
    section: "Electronics",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Smartphone Pro Max",
    price: 999.99,
    description: "Latest generation smartphone with triple camera system",
    image: smartphoneImg,
    category: "Smartphones",
    section: "Electronics",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Ultra Laptop 15\"",
    price: 1499.99,
    description: "High performance laptop for work and play",
    image: laptopImg,
    category: "Laptops",
    section: "Electronics",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    description: "Programmable coffee maker with thermal carafe",
    image: coffeeMakerImg,
    category: "Kitchen",
    section: "Home & Living",
    rating: 4.3,
  },
];
