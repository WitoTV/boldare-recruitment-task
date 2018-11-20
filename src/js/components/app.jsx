import React from 'react';
import user from '../config/user';
import UserProfile from './components/userProfile';

class App extends React.Component {
	render() {
		const template = (
			<UserProfile user={user} />
		);
		return template;
	}
}

export default App;