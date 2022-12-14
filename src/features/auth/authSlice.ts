import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser, User } from "models";
export interface LoginPayload extends LoginUser {

}
export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}
const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },
        logout(state) {
            state.isLoggedIn = true;
            state.currentUser = undefined;
        },
    }
})

//Action 
export const authActions = authSlice.actions;
//Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;