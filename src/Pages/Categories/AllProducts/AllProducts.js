import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsModal from '../../ProductsModal/ProductsModal';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const AllProducts = () => {

    const allProducts = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className='my-12 grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {
                allProducts.map(products => <ProductsDetails
                    key={products._id}
                    products={products}
                    setSelectedProduct={setSelectedProduct}
                ></ProductsDetails>)
            }
            {
                selectedProduct &&
                <ProductsModal 
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                ></ProductsModal>
            }
        </div>
    );
};

export default AllProducts;