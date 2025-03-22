import React, { useState } from 'react';

const ShopProduct = () => {
    // State for search, sort, and pagination
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [sortBy, setSortBy] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Sample product data with updated image paths
    const products = [
        {
            id: 1,
            name: "Colorful Stylish",
            price: 123.00,
            oldPrice: 123.00,
            image: "src/assets/images (2).jpg"
        },
        {
            id: 2,
            name: "Colorful Stylish",
            price: 123.00,
            oldPrice: 123.00,
            image: "src/assets/images (2).jpg"
        },
        {
            id: 3,
            name: "Colorful Stylish",
            price: 123.00,
            oldPrice: 123.00,
            image: "src/assets/images (2).jpg"
        },
        {
            id: 4,
            name: "Colorful Stylish",
            price: 123.00,
            oldPrice: 123.00,
            image: "src/assets/images (2).jpg"
        },
        {
            id: 5,
            name: "Colorful Stylish",
            price: 123.00,
            oldPrice: 123.00,
            image: "src/assets/images (2).jpg"
        },
        {
            id: 6,
            name: "Colorful Stylish",
            price: 123.00,
            oldPrice: 123.00,
            image: "src/assets/images (2).jpg"
        }
    ];

    // Search and sort functionality
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products based on selected option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'Latest') {
            return b.id - a.id; // Assuming newer products have higher IDs
        } else if (sortBy === 'Popularity') {
            // This would usually be based on a popularity metric
            return b.id - a.id;
        } else if (sortBy === 'Best Rating') {
            // This would usually be based on ratings
            return b.id - a.id;
        }
        return 0;
    });

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    // Handle sort selection
    const handleSortSelect = (option) => {
        setSortBy(option);
        setSortDropdownOpen(false);
    };

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                </h2>

                {/* Search and Sort Section */}
                <div className="mb-6">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="relative w-full md:w-auto mb-4 md:mb-0">
                            <div className="flex items-center border border-[#d39c94] rounded-full overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search by name"
                                    className="w-full px-4 py-2 focus:outline-none"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="bg-[#d39c94] px-3 py-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative w-auto">
                            <button 
                                className="flex items-center border border-[#d39c94] rounded-full px-4 py-2 text-sm text-[#d39c94]"
                                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                            >
                                <span>Sort by: {sortBy}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {sortDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                                    <button onClick={() => handleSortSelect('Latest')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Latest</button>
                                    <button onClick={() => handleSortSelect('Popularity')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Popularity</button>
                                    <button onClick={() => handleSortSelect('Best Rating')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Best Rating</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProducts.map(product => (
                        <div key={product.id} className="bg-white">
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-base font-medium text-gray-800 mb-2">{product.name}</h3>
                                <div className="mb-4">
                                    <span className="text-base text-gray-800">${product.price.toFixed(2)}</span>
                                    <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between px-2">
                                    <a
                                        href={`/product/${product.id}`}
                                        className="flex items-center text-[#d39c94] hover:text-[#b77c75] transition-colors border border-[#d39c94] rounded px-3 py-1 mr-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                        View Detail
                                    </a>
                                    <a
                                        href="/cart"
                                        className="flex items-center text-[#d39c94] hover:text-[#b77c75] transition-colors border border-[#d39c94] rounded px-3 py-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                                            <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        Add To Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <nav className="flex items-center">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100"
                        >
                            «
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded mx-1 ${
                                    currentPage === page 
                                        ? 'bg-[#d39c94] text-white' 
                                        : 'border text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100"
                        >
                            »
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ShopProduct;