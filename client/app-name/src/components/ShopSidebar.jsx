import React, { useState } from 'react';

const ShopSidebar = () => {
    // State to track checked items for each category
    const [priceChecked, setPriceChecked] = useState("price-all");
    const [colorChecked, setColorChecked] = useState("color-all");
    const [sizeChecked, setSizeChecked] = useState("size-all");

    // Handle checkbox change
    const handleCheckboxChange = (category, id) => {
        if (category === 'price') {
            setPriceChecked(id);
        } else if (category === 'color') {
            setColorChecked(id);
        } else if (category === 'size') {
            setSizeChecked(id);
        }
    };

    return (
        <div className="w-full">
            {/* Price Filter */}
            <div className="mb-8 pb-5 border-b border-gray-200">
                <h5 className="text-lg font-normal mb-4 lowercase">price</h5>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="price-all" 
                                checked={priceChecked === "price-all"}
                                onChange={() => handleCheckboxChange('price', 'price-all')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="price-all" className="ml-2 text-sm text-gray-700">All Price</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">1000</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="price-1" 
                                checked={priceChecked === "price-1"}
                                onChange={() => handleCheckboxChange('price', 'price-1')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="price-1" className="ml-2 text-sm text-gray-700">$0 - $100</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">150</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="price-2" 
                                checked={priceChecked === "price-2"}
                                onChange={() => handleCheckboxChange('price', 'price-2')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="price-2" className="ml-2 text-sm text-gray-700">$100 - $200</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">295</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="price-3" 
                                checked={priceChecked === "price-3"}
                                onChange={() => handleCheckboxChange('price', 'price-3')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="price-3" className="ml-2 text-sm text-gray-700">$200 - $300</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">246</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="price-4" 
                                checked={priceChecked === "price-4"}
                                onChange={() => handleCheckboxChange('price', 'price-4')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="price-4" className="ml-2 text-sm text-gray-700">$300 - $400</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">145</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="price-5" 
                                checked={priceChecked === "price-5"}
                                onChange={() => handleCheckboxChange('price', 'price-5')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="price-5" className="ml-2 text-sm text-gray-700">$400 - $500</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">168</span>
                    </div>
                </div>
            </div>

            {/* Color Filter */}
            <div className="mb-8 pb-5 border-b border-gray-200">
                <h5 className="text-lg font-normal mb-4 lowercase">color</h5>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="color-all" 
                                checked={colorChecked === "color-all"}
                                onChange={() => handleCheckboxChange('color', 'color-all')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="color-all" className="ml-2 text-sm text-gray-700">All Color</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">1000</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="color-1" 
                                checked={colorChecked === "color-1"}
                                onChange={() => handleCheckboxChange('color', 'color-1')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="color-1" className="ml-2 text-sm text-gray-700">Black</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">150</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="color-2" 
                                checked={colorChecked === "color-2"}
                                onChange={() => handleCheckboxChange('color', 'color-2')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="color-2" className="ml-2 text-sm text-gray-700">White</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">295</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="color-3" 
                                checked={colorChecked === "color-3"}
                                onChange={() => handleCheckboxChange('color', 'color-3')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="color-3" className="ml-2 text-sm text-gray-700">Red</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">246</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="color-4" 
                                checked={colorChecked === "color-4"}
                                onChange={() => handleCheckboxChange('color', 'color-4')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="color-4" className="ml-2 text-sm text-gray-700">Blue</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">145</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="color-5" 
                                checked={colorChecked === "color-5"}
                                onChange={() => handleCheckboxChange('color', 'color-5')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="color-5" className="ml-2 text-sm text-gray-700">Green</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">168</span>
                    </div>
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-8 pb-5 border-b border-gray-200">
                <h5 className="text-lg font-normal mb-4 lowercase">size</h5>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="size-all" 
                                checked={sizeChecked === "size-all"}
                                onChange={() => handleCheckboxChange('size', 'size-all')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="size-all" className="ml-2 text-sm text-gray-700">All Size</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">1000</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="size-1" 
                                checked={sizeChecked === "size-1"}
                                onChange={() => handleCheckboxChange('size', 'size-1')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="size-1" className="ml-2 text-sm text-gray-700">XS</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">150</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="size-2" 
                                checked={sizeChecked === "size-2"}
                                onChange={() => handleCheckboxChange('size', 'size-2')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="size-2" className="ml-2 text-sm text-gray-700">S</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">295</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="size-3" 
                                checked={sizeChecked === "size-3"}
                                onChange={() => handleCheckboxChange('size', 'size-3')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="size-3" className="ml-2 text-sm text-gray-700">M</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">246</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="size-4" 
                                checked={sizeChecked === "size-4"}
                                onChange={() => handleCheckboxChange('size', 'size-4')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="size-4" className="ml-2 text-sm text-gray-700">L</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">145</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="size-5" 
                                checked={sizeChecked === "size-5"}
                                onChange={() => handleCheckboxChange('size', 'size-5')}
                                className="w-4 h-4 rounded border-gray-300 focus:ring-pink-300" 
                                style={{ accentColor: '#d39c94' }}
                            />
                            <label htmlFor="size-5" className="ml-2 text-sm text-gray-700">XL</label>
                        </div>
                        <span className="text-xs text-gray-500 border px-2 py-1 rounded">168</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;