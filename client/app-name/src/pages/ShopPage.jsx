import React from 'react';
import ShopSidebar from '../components/ShopSidebar';
import ShopProduct from '../components/ShopProduct';

const ShopPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <ShopSidebar />
                </div>
                <div className="w-full md:w-3/4 px-4">
                    <ShopProduct />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;