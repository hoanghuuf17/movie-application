import {createContext} from 'react';

export const AuthContext = createContext();

  // const initialLoginState = {
  //   isLoading: true,
  //   email: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case 'RELOGIN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       }
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         email: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       }
  //     case 'SIGNOUT':
  //       return {
  //         ...prevState,
  //         email: null,
  //         userToken: null,
  //         isLoading: false,
  //       }
  //     case 'SIGNUP':
  //       return {
  //         ...prevState,
  //         email: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       }
  //   }
  // };

  // const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)


  // const authContext = useMemo(() => ({
  //   signIn: async (email, password) => {
  //     let userToken;
  //     userToken = null
  //     if (email == 'hoang@123' && password == '123') {
  //       userToken = 'tokenABCLogin'
  //       try {
  //         await AsyncStorage.setItem('userToken', userToken)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     dispatch({ type: 'LOGIN', id: email, token: userToken })
  //   },
  //   signOut: async () => {
  //     try {
  //       await AsyncStorage.removeItem('userToken')
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     dispatch({ type: 'SIGNOUT' })
  //   },
  //   signUp: async (email) => {
  //     let userToken;
  //     userToken = 'tokenXYZSignUp'
  //     try {
  //       await AsyncStorage.setItem('userToken', userToken)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     dispatch({ type: 'SIGNUP', id: email, token: userToken })
  //   },
  // }), []);

  // console.log('token' + loginState.userToken)

  // useEffect(() => {
  //   setTimeout(async () => {
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken')
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     if (!userToken) {
  //       dispatch({ type: 'SIGNOUT', token: 'tokenABC' })
  //     } else {
  //       dispatch({ type: 'RELOGIN', token: userToken })
  //     }
  //   }, 1000);
  // }, [])

  // if (loginState.isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size='large' />
  //     </View>
  //   )
  // }

// Bỏ