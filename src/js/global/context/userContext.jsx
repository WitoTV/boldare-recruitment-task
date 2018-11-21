import React from 'react';
import validateUserShape from 'global/helpers/validateUserShape';

const UserContext = React.createContext(validateUserShape({}));

export default UserContext;