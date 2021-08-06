import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isLoading } from '../features/appAuth';
import Root from '../navigation/Root';
import Auth from '../navigation/Auth';
import { useDispatch } from 'react-redux';
import { reSignIn } from '../features/appAuth';


const CheckAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reSignIn({}));
    }, []);

    const isLoading1 = useSelector(isLoading);
    return (
        <>
            {isLoading1 ? <Auth /> : <Root />}
        </>
    )
}

export default CheckAuth
