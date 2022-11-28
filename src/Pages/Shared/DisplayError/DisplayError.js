import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }

    return (
        <div className='bg-slate-300 p-10 my-40 text-center'>
            <p className='text-red-500 bg-slate-800 p-8'>Something went wrong!!!</p>
            <p className='text-red-400 bg-slate-800 p-8'>{error.statusText || error.message}</p>
            <h4 className="text-3xl bg-slate-800 text-slate-200 p-8"> Please <button className='btn btn-info hover:bg-success' onClick={handleLogOut}>Sign out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;