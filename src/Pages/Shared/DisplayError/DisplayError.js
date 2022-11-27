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
        <div className='bg-slate-300 p-4'>
            <p className='text-red-500 bg-slate-400 p-2'>Something went wrong!!!</p>
            <p className='text-red-400 bg-slate-400 p-2'>{error.statusText || error.message}</p>
            <h4 className="text-3xl bg-slate-400 p-2"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;