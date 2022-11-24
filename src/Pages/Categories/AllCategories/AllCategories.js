import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from "../../Shared/Loading/Loading";
import Title from "../../../Hooks/Title";
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const AllCategories = () => {

    Title('All Categories');
    const {data:categories, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-12 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center items-center p-1 rounded'>
           {categories.map(category => <CategoriesDetails
            key={category._id}
            category={category}
           ></CategoriesDetails>)} 
        </div>
    );
};

export default AllCategories;