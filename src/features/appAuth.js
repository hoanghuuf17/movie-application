import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const appAuth = createSlice({
  name: 'app',
  initialState: {
    email: null,
    userToken: null,
    isLoading: true,
    oldToken: null
  },
  reducers: {
    signIn: (state, action) => {
      const save = async (state, action) => {
        if (action.payload.email === 'hoang@123') {
          state.email = action.payload.email;
          state.userToken = `Token-Login-with-email ${action.payload.email}`;
          state.isLoading = false;
          try {
            await AsyncStorage.setItem('userToken', state.userToken)
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log('wrong infomation')
        }
      }
      save(state, action);
    },
    signUp: (state, action) => {
      const save = async (state, action) => {
        state.email = action.payload.email;
        state.userToken = `Token-Login-with-email ${action.payload.email}`;
        state.isLoading = false;
        try {
          await AsyncStorage.setItem('userToken', state.userToken)
        } catch (error) {
          console.log(error)
        }
      }
      save(state, action);
    },
    signOut: (state, action) => {
      const save = async (state, action) => {
        state.email = null;
        state.userToken = null;
        state.isLoading = true;
        try {
          await AsyncStorage.removeItem('userToken')
        } catch (error) {
          console.log(error)
        }
      }
      save(state, action);
    },
    reSignIn: (state, action) => {
      const save = async () => {
        try {
          const oldToken = await AsyncStorage.getItem('userToken');
          return oldToken !== null ? oldToken : null;
        } catch (error) {
          console.log(error)
        }
      }
      let token;
      save().then(oldToken => {
        console.log(oldToken)
        token = oldToken;
      }).catch(error => {
        console.log(error)
      })
      token !== null ? state.isLoading = false : state.isLoading = true;
    }
  },
});
export const { signIn, signUp, signOut, reSignIn, retrieve } = appAuth.actions;
export const userToken = (state) => state.app.userToken;
export const isLoading = (state) => state.app.isLoading;
export default appAuth.reducer;

