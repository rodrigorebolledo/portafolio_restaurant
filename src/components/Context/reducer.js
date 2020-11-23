import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : '';
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).auth_token
    : '';

export const initialState = {
    user: '' || user,
    token: '' || token,
    loading: false,
    errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.auth_token,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                user: '',
                token: '',
            };
        case 'LOGIN_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };
        case 'LOGIN_INVITADO':
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.token,
            }
        case 'REQUEST_REGISTER':
            return {
                ...initialState,
                loading: true,
            }
        case 'REGISTER_SUCCESS':
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
            }
        case 'REGISTER_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            }
        default:
            throw new Error(`Acción del tipo ${action.type} no manejada`);
    }
};