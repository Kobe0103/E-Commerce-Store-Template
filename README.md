# E-Commerce Store Template

This repository provides a complete, customizable e-commerce store template built with React, Redux, and Tailwind CSS. It includes essential features like product listing, cart functionality, and a checkout system, making it a perfect starting point for developers to create their own e-commerce projects.

---

## **Table of Contents**

1. [Features](#features)
2. [Project Setup](#project-setup)
3. [File Structure](#file-structure)
4. [Key Features and Customization](#key-features-and-customization)
   - [Navbar](#navbar)
   - [Footer](#footer)
   - [Home Page](#home-page)
   - [Shop Page](#shop-page)
   - [Cart Page](#cart-page)
   - [Checkout Page](#checkout-page)
   - [Product Detail Page](#product-detail-page)
5. [Extending the Template](#extending-the-template)
6. [FAQ](#faq)
7. [Contributing](#contributing)

---

## **Features**

- Dynamic product display with category filtering.
- Add-to-cart functionality integrated with Redux.
- Modular components for easy customization.
- Responsive and mobile-friendly layout with Tailwind CSS.
- Extendable payment integration logic.
- Clean and intuitive user interface.

---

## **Project Setup**

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Kobe0103/E-Commerce-Store-Template.git
   cd E-Commerce-Store-Template
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## **File Structure**

```
src/
├── App.tsx
├── index.tsx
├── index.css
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
├── pages/
│   ├── AboutPage.tsx
│   ├── CartPage.tsx
│   ├── CategoryPage.tsx
│   ├── CheckoutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── ProductDetailPage.tsx
│   ├── ShopPage.tsx
├── store/
│   ├── cartSlice.ts
│   ├── store.ts
├── types/
│   ├── products.ts
```

---

## **Key Features and Customization**

### Navbar

**File:** `src/components/Navbar.tsx`

- **Purpose:** Displays navigation links, a category dropdown menu, and the cart icon with item count.
- **How to Customize:**
  - **Categories:** Update the `menuSections` array in the component to add or modify categories.
  - **Logo and Links:** Replace the logo image and update the `Link` components for custom navigation.

### Footer

**File:** `src/components/Footer.tsx`

- **Purpose:** Displays footer sections dynamically based on the `footerLinks` array.
- **How to Customize:**
  - Edit the `footerLinks` array in the component:
    ```javascript
    const footerLinks = [
      {
        title: 'Shop',
        links: [
          { name: 'All Products', url: '/shop' },
          { name: 'New Arrivals', url: '/shop?sort=new' },
        ],
      },
    ];
    ```

### Home Page

**File:** `src/pages/HomePage.tsx`

- **Purpose:** Landing page featuring a hero section, featured categories, and products.
- **How to Customize:**
  - **Hero Section:** Update the text and background image in the JSX.
  - **Featured Categories:** Modify the `featuredCategories` array to include new categories or images.

### Shop Page

**File:** `src/pages/ShopPage.tsx`

- **Purpose:** Displays all products with filtering options by category.
- **How to Customize:**
  - **Products:** Update the `sampleProducts` array in `src/types/products.ts` to add or modify products.
  - **Category Dropdown:** Adjust the logic for filtering categories in the JSX.

### Cart Page

**File:** `src/pages/CartPage.tsx`

- **Purpose:** Displays products added to the cart and calculates the total price.
- **How to Customize:**
  - Modify Redux logic in `src/store/cartSlice.ts` to implement additional cart functionality.
  - Customize the "Go to Checkout" button to match your checkout flow.

### Checkout Page

**File:** `src/pages/CheckoutPage.tsx`

- **Purpose:** Collects billing and payment information and displays an order summary.
- **How to Customize:**
  - Update the `handlePaymentSubmit` function to integrate with your payment gateway (e.g., Stripe, PayPal):
    ```javascript
    const handlePaymentSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Replace with your payment gateway logic
      fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems }),
      })
        .then(res => res.json())
        .then(data => {
          window.location.href = data.checkoutUrl;
        });
    };
    ```

### Product Detail Page

**File:** `src/pages/ProductDetailPage.tsx`

- **Purpose:** Displays detailed information about a single product.
- **How to Customize:**
  - Modify the product layout to include additional details like reviews or specifications.

---

## **Extending the Template**

### Add New Pages

1. Create a new file in the `src/pages/` directory.
2. Add a route in `App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```

### Connect to a Backend

- Replace the `sampleProducts` array in `src/types/products.ts` with API calls to fetch data dynamically.
- Example:
  ```javascript
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  ```

### Customize Styles

- Use Tailwind CSS classes for layout and styling.
- Add global styles in `src/index.css`.

---

## **FAQ**

### 1. How do I change the logo?
- Replace the image in the `Navbar.tsx` component and adjust the `alt` text as needed.

### 2. How do I add a payment gateway?
- Implement your payment logic in the `CheckoutPage.tsx` file within the `handlePaymentSubmit` function.

### 3. How do I fetch products from an API?
- Replace the `sampleProducts` array with a dynamic API call in the `ShopPage.tsx` file.

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

---

For questions or support, please contact `youremail@example.com`. Feel free to contribute or suggest improvements!

