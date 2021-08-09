import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appAuth';
import appFavorite from '../features/appFavorite';

export default configureStore({
  reducer: {
    app: appReducer,
    favorite : appFavorite,
  },
});
