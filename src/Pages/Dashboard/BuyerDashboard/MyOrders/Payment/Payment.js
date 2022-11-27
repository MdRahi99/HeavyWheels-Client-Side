import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm";
import Title from '../../../../../Hooks/Title';
import Loading from '../../../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    Title('Payment');

    const orders = useLoaderData();
    const navigation = useNavigation();
    const { itemName, resalePrice } = orders;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div className='bg-slate-900 p-4 text-slate-200 flex flex-col lg:flex-row gap-10 items-center justify-center'>
            <div>
            <h3 className="text-3xl my-8">Payment for<span className='bg-slate-600 mx-3 font-bold p-2 text-2xl'>{itemName}</span></h3>
            <p className="text-2xl">Please pay <strong className='text-2xl bg-slate-600 p-2 mx-3'>${resalePrice}</strong></p>
            </div>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <PaymentForm
                        orders={orders}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;