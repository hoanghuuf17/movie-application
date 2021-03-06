import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appAuth';
import appFavorite from '../features/appFavorite';
import appUser from '../features/appUser';

export default configureStore({
  reducer: {
    app: appReducer,
    favorite: appFavorite,
    user: appUser,
  },
});
