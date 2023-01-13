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
        <div className='my-6 grid grid-cols-1 lg:grid-cols-3 lg:mx-0 mx-2 gap-4'>
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