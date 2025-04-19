const Footer = () => {
  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', url: '/shop' },
        { name: 'New Arrivals', url: '/shop?sort=newest' },
        { name: 'Best Sellers', url: '/shop?sort=popular' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', url: '/contact' },
        { name: 'FAQs', url: '/faqs' },
        { name: 'Shipping Info', url: '/shipping' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Careers', url: '/careers' },
        { name: 'Privacy Policy', url: '/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
