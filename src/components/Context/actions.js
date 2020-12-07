
import { addElment } from '../Comunes/Api';

const ROOT_URL = 'http://localhost:80';

const INVITADO = {
    user: 'INVITADO',
    token: '',
}



export function addPlate(dispatch, carroPayload) {
    dispatch({ type: 'ADD_PLATE', payload: { platosSeleccionados: carroPayload.platosSeleccionados, totalPago: carroPayload.totalPago} });
    localStorage.setItem('platosCarro', carroPayload.platosSeleccionados);
    let totalPago = localStorage.getItem('totalCarro')
    ? JSON.parse(localStorage.getItem('totalCarro'))
    : 0;
    localStorage.setItem('totalCarro', totalPago=totalPago+carroPayload.totalPago);
    console.log('tyoeoftotalPago');
    console.log(typeof totalPago);
    console.log('totalPago');
    console.log(totalPago);
    console.log('carroPayload.totalPago')
    console.log(carroPayload.totalPago)
    return {platosSeleccionados: carroPayload.platosSeleccionados, totalPago: totalPago}
}

export async function loginUser(dispatch, loginPayload) {

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let data = await addElment("/api/usuarios/authenticate", loginPayload)
        if (data) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data } });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        console.log(data.errors[0]);
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: "Contraseña/Usuario Incorrect@" });
        console.log("Contraseña Incorrecta");
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}

export async function loginInvitado(dispatch) {
    try {
        dispatch({ type: 'LOGIN_INVITADO', payload: INVITADO });
        localStorage.setItem('currentUser', JSON.stringify(INVITADO));
        return INVITADO;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }

}

export async function registerUser(dispatch, registerPayload) {

    try {
        dispatch({ type: 'REQUEST_REGISTER' });
        let data = await addElment("/api/clientes", registerPayload)

        if (data) {
            console.log(data)
            dispatch({ type: 'REGISTER_SUCCESS', payload: { user: data } });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'REGISTER_ERROR', error: data.errors[0] });
        console.log(data.errors[0]);
        return;
    } catch (error) {
        dispatch({ type: 'REGISTER_ERROR', error: error });
        console.log(error);
    }
}