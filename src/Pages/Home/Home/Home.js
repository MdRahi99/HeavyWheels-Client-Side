import React from 'react';
import Title from '../../../Hooks/Title';
import Blogs from '../../Blogs/Blogs';
import AllCategories from '../../Categories/AllCategories/AllCategories';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    Title('Home');

    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Reviews></Reviews>  
          <Blogs></Blogs>
          <AdvertisedProduct></AdvertisedProduct>
        </div>
    );
};

export default Home;