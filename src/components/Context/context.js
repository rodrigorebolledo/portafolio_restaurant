import React, { createContext, useContext, useReducer, } from 'react';
import { AuthReducer, initialState , CarroReducer, initialStateCarro } from './reducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
const CarroStateContext = createContext();
const CarroDispatchContext = createContext();

export function useCarroState() {
    const context = useContext(CarroStateContext);
    if (context === undefined){
        throw new Error("useCarroState debe ser usado dentro de un CarroProvider");
    }
    return context;
}

export function useCarroDispatch() {
    const context = useContext(CarroDispatchContext);
    if (context === undefined){
        throw new Error("useCarroDispatch debe ser usado dentro de un CarroProvider")
    }
    return context;
}

export function useAuthState() {
    const context = useContext(AuthStateContext);
    if (context === undefined){
        throw new Error("useAuthState debe ser usado dentro de un AuthProvider");
    }
    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined){
        throw new Error("useAuthDispatch debe ser usado dentro de un AuthProvider")
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )   
}

export const CarroProvider = ({ children }) => {
    const [carro, dispatch] = useReducer(CarroReducer, initialStateCarro);
    return (
        <CarroStateContext.Provider value={carro}>
            <CarroDispatchContext.Provider value={dispatch}>
                {children}
            </CarroDispatchContext.Provider>
        </CarroStateContext.Provider>
    )
}