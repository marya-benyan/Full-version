import React, { useState } from "react";

const CreateCustomProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ تم إنشاء المنتج المخصص بنجاح!");
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-opacity-30" style={{ backgroundColor: "white", filter: "blur(60px)", transform: "translate(-30%, -30%)" }}></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-opacity-30" style={{ backgroundColor: "white", filter: "blur(70px)", transform: "translate(30%, 30%)" }}></div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative z-10 border-t-4 border-[#d39c94] rtl">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#bc7265" }}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#b8e0ec] text-[#bc7265] mr-2">
            ✨
          </span>
          اصنع منتجك الخاص
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#b8e0ec] text-[#bc7265] ml-2">
            ✨
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-right">
          {/* Product Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium" style={{ color: "#bc7265" }}>
              اسم المنتج
            </label>
            <div className="relative">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                className="w-full p-3 bg-gray-50 border-b-2 rounded-lg focus:outline-none text-gray-800 placeholder-gray-400 transition-all duration-300"
                style={{ borderColor: "#b8e0ec" }}
                placeholder="أدخل اسم المنتج"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#bc7265" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium" style={{ color: "#bc7265" }}>
              الوصف
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border-b-2 rounded-lg focus:outline-none text-gray-800 placeholder-gray-400 min-h-32 resize-y transition-all duration-300"
              style={{ borderColor: "#b8e0ec" }}
              placeholder="صف منتجك هنا"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium" style={{ color: "#bc7265" }}>
              اختر صورة
            </label>
            <div className="relative bg-gray-50 rounded-lg border-2 border-dashed p-6" style={{ borderColor: "#b8e0ec" }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12"
                  style={{ color: "#bc7265" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <p className="mt-1 text-sm text-gray-600">
                  اسحب الصورة هنا أو انقر للتحميل
                </p>
              </div>
            </div>
            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  alt="معاينة المنتج"
                  className="max-w-full h-auto rounded-lg border-2"
                  style={{ borderColor: "#d39c94" }}
                />
              </div>
            )}
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="block text-sm font-medium" style={{ color: "#bc7265" }}>
              السعر
            </label>
            <div className="relative">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full p-3 bg-gray-50 border-b-2 rounded-lg focus:outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 pl-10"
                style={{ borderColor: "#b8e0ec" }}
                placeholder="أدخل السعر"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(to right, #bc7265, #d39c94)` }}
          >
            <span>🚀 إنشاء المنتج</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomProduct;