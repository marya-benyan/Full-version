import React from "react";

const ShopDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white py-5 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Shop Detail</h1>
          <div className="flex justify-center">
            <p className="text-gray-600">
              <a href="/" className="hover:text-blue-500">
                Home
              </a>{" "}
              - <span className="text-gray-800">Shop Detail</span>
            </p>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://via.placeholder.com/500"
                    alt="Product"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Colorful Stylish Shirt
            </h2>
            <div className="flex items-center mb-4">
              <div className="text-yellow-400">
                ★★★★☆
              </div>
              <span className="text-gray-600 ml-2">(50 Reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
              diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
              magna lorem ut.
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">$150.00</h3>

            {/* Sizes */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Sizes:</p>
              <div className="flex space-x-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Colors:</p>
              <div className="flex space-x-2">
                {["Black", "White", "Red", "Blue", "Green"].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-blue-500"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex items-center mb-6">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
                  -
                </button>
                <input
                  type="text"
                  className="w-12 text-center border-0"
                  value="1"
                  readOnly
                />
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
                  +
                </button>
              </div>
              <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="ml-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Add to Wishlist
              </button>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center">
              <p className="text-gray-700 font-medium mr-2">Share on:</p>
              <div className="flex space-x-2">
                {["facebook", "twitter", "linkedin", "pinterest"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex space-x-4 border-b mb-6">
            <button className="text-blue-500 font-medium pb-2 border-b-2 border-blue-500">
              Description
            </button>
            <button className="text-gray-600 hover:text-blue-500 font-medium pb-2">
              Additional Information
            </button>
            <button className="text-gray-600 hover:text-blue-500 font-medium pb-2">
              Reviews (0)
            </button>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Product Description
            </h4>
            <p className="text-gray-700 mb-4">
              Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
              Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam
              ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed
              sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Product"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Colorful Stylish Shirt
              </h3>
              <p className="text-gray-700 mb-4">$123.00</p>
              <div className="flex justify-center space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  View Detail
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;