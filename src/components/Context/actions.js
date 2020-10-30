const ROOT_URL = '';

const INVITADO = {
    user: 'INVITADO',
    token: '',
}
export async function loginUser(dispatch, loginPayload) {

    const requestOption = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(`${ROOT_URL}/login`, requestOption);
        let data = await response.json();

        if (data.user) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data});
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0]});
        console.log(data.errors[0]);
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}


export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}

export  async function loginInvitado(dispatch) {
    try{
        dispatch({ type: 'LOGIN_INVITADO', payload: INVITADO});
        localStorage.setItem('currentUser', JSON.stringify(INVITADO));
        return INVITADO;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }

}