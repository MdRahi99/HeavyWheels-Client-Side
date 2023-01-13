import React from 'react';
import Title from '../../../Hooks/Title';
import AllCategories from '../../Categories/AllCategories/AllCategories';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Contact from '../../Contact/Contact';

const Home = () => {

    Title('Home');

    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Reviews></Reviews>  
          <AdvertisedProduct></AdvertisedProduct>
          <Contact></Contact>
        </div>
    );
};

export default Home;