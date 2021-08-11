import { createSlice } from '@reduxjs/toolkit';

export const appUser = createSlice({
    name: 'user',
    initialState: {
        firstName: 'Hoang Toddy',
        lastName: 'Trinh Huu',
        email: 'hoang@123',
    },
    reducers: {
        editUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
    },
});
export const { editUser } = appUser.actions;
export const userInfo = (state) => state.user;
export default appUser.reducer;

