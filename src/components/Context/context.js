import React, { createContext } from 'react';


const UserContext = createContext({
    usuario: null, 
    token: null
});

export default UserContext;