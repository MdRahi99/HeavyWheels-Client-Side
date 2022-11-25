import React from 'react';
import Title from '../../../Hooks/Title';
import AllCategories from '../../Categories/AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    Title('Home');

    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Reviews></Reviews>  
        </div>
    );
};

export default Home;