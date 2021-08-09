import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const appFavorite = createSlice({
    name: 'favorite',
    initialState: {
        list: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.list = [...state.list, {
                name: action.payload.name,
                image: action.payload.image,
                info: action.payload.info,
                description: action.payload.description,
                actors: action.payload.actors
            }]
        },
        unFavorite: (state, action) => {
            state.list = state.list.filter(function (obj){
                return obj.name !== action.payload.name;
            });
        },
    },
});
export const { addFavorite, unFavorite } = appFavorite.actions;
export const favorite = (state) => state.favorite.list;
export default appFavorite.reducer;

