const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
                <div className="lg:text-center">
                  <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">About Us</h2>
                  <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Our Story
                  </h1>
                  <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    We're redefining online shopping with quality and simplicity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Quality First",
                  description: "We source only the finest materials and products for our customers.",
                  icon: "✅"
                },
                {
                  name: "Customer Focus",
                  description: "Your satisfaction is our top priority at every step.",
                  icon: "❤️"
                },
                {
                  name: "Simple Shopping",
                  description: "We've removed all the complexity from online shopping.",
                  icon: "🛒"
                }
              ].map((value) => (
                <div key={value.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-2xl">
                          {value.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;