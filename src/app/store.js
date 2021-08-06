import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appAuth';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
