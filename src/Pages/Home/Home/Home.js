import React from 'react';
import Title from '../../../Hooks/Title';
import AllCategories from '../../Categories/AllCategories/AllCategories';
import Banner from '../Banner/Banner';

const Home = () => {

    Title('Home');

    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>  
        </div>
    );
};

export default Home;