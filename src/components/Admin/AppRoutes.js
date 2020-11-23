import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../Context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
	const userDetails = useAuthState();
	let esAdmin = false;
	if (userDetails.user !== "" && userDetails.user !== undefined) {
		if (userDetails.user.perfil !== undefined) {
			if (userDetails.user.perfil.idPerfil === 2) {
				esAdmin = true;
			}
		} else {
			if (userDetails.user.usuario.perfil.idPerfil === 2) {
				esAdmin = true;
			}
		}
	}
	return (

		<Route
			path={path}
			render={(props) =>
				isPrivate && !esAdmin ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
						<Component {...props} />
					)
			}
			{...rest}
		/>
	);
};

export default AppRoutes;