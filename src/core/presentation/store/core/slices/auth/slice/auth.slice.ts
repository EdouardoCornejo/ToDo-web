import { Token, User } from "../../../../../../domain/entity/auth";
import type * as Redux from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AuthenticationStatus } from "../../../../../../domain/interface/auth";
import { FetchControl } from "../../../../../../domain/interface/http";

interface InitialState {
    user: User,
    token: string
    authStatus: AuthenticationStatus;
    fetchControl: FetchControl
}

const initialFetchControl: FetchControl = {
    isLoading: false,
    error: false,
    errorMessage: '',
};

const initialState: InitialState = {
    user: {
        id: '',
        email: '',
        name: ''
    },
    fetchControl: {
        ...initialFetchControl,
    },
    authStatus: AuthenticationStatus.noAuthenticated,
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, { payload }: Redux.PayloadAction<User & Token>) => {
            const { token, ...user } = payload; 
            state.user = user;
            state.token = token;
            localStorage.setItem('token', JSON.stringify(payload.token));
            state.authStatus = AuthenticationStatus.authenticated;
        },

        setLogout: (state) => {
            state.user = initialState.user;
            state.token = '';
            state.authStatus = AuthenticationStatus.noAuthenticated;
            localStorage.removeItem('token');
        },

        startLogin: (state): void => {
            state.authStatus = AuthenticationStatus.noAuthenticated;
        },

        setIsLoading: (state, { payload }: Redux.PayloadAction<boolean>) => {
            state.fetchControl.isLoading = payload;
          },

        setErrorState: (
            state,
            { payload }: Redux.PayloadAction<{ message: string }>,
        ) => {
            state.fetchControl.error = true;
            state.fetchControl.errorMessage = payload?.message;
        },

        resetErrorState: (state) => {
            state.fetchControl.error = false;
            state.fetchControl.errorMessage = '';
          },
    }
})

export const { setLogin, resetErrorState, setErrorState, setLogout, startLogin, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
