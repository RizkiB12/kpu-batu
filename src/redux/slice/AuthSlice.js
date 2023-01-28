import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authUser: null,
    isAuth: false,
    token: null,
}

const authSlice  = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log({state, action});
            state.isAuth = true;
            const {user} = action.payload;
            state.authUser = user
            state.token = user.access_token;
            localStorage.setItem('access_token', user.access_token);
        },
        logout: (state) => {
            state.isAuth = false;
            state.authUser = null;
            state.token = null;
            localStorage.removeItem('access_token');
        },
    },

})

export const {login, logout } = authSlice.actions;
export default authSlice.reducer;