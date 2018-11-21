import React from 'react';
import Details from './components/details';
import Comments from './components/comments';

import './style.scss';

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const template = (
			<div className={'user-profile'}>
				<Details/>
			</div>
		);
		return template;
	}
}

export default UserProfile;