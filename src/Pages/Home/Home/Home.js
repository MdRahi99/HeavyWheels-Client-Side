import React from 'react';
import Title from '../../../Hooks/Title';
import AllCategories from '../../Categories/AllCategories/AllCategories';

const Home = () => {

    Title('Home');

    return (
        <div>
          <AllCategories></AllCategories>  
        </div>
    );
};

export default Home;