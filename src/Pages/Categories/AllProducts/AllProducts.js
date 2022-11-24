import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const AllProducts = () => {

    const allProducts = useLoaderData();

    return (
        <div className='my-12 grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {
                allProducts.map(products => <ProductsDetails
                    key={products._id}
                    products={products}
                ></ProductsDetails>)
            }
        </div>
    );
};

export default AllProducts;