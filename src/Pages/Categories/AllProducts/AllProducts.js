import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ProductsModal from '../../ProductsModal/ProductsModal';
import Loading from '../../Shared/Loading/Loading';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const AllProducts = () => {

    const allProducts = useLoaderData();
    const navigation = useNavigation();
    const [selectedProduct, setSelectedProduct] = useState(null);

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div className='my-12 grid grid-cols-1 bg-base-200 p-8 gap-8 lg:grid-cols-3'>
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