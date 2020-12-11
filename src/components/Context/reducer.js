import React, { useState, useReducer } from 'react';

let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : undefined;
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).auth_token
    : '';
let platosSeleccionados = localStorage.getItem('platosCarro')
    ? JSON.parse(localStorage.getItem('platosCarro'))
    : undefined;

let totalPago = localStorage.getItem('totalCarro')
    ? JSON.parse(localStorage.getItem('totalCarro'))
    : 0;

export const initialState = {
    user: undefined || user,
    token: '' || token,
    loading: false,
    errorMessage: null,
};

export const initialStateCarro = {
    platosSeleccionados: undefined || platosSeleccionados,
    totalPago: 0 || totalPago,
};

export const CarroReducer = (initialStateCarro, action) => {
    switch (action.type) {
        case 'ADD_PLATE':
            return {
                ...initialStateCarro,
                platosSeleccionados: action.payload.platosSeleccionados,
                totalPago: action.payload.totalPago,
            };
        case 'REMOVE_PLATE':
            return {
                ...initialStateCarro,
                platosSeleccionados: action.payload.platosSeleccionados,
                totalPago: action.payload.totalPago,
            };
        default:
            throw new Error(`Acción del tipo ${action.type} no manejada`);
    }
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