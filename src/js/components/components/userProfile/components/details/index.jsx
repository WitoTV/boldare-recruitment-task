import React from 'react';
import Info from './components/info';
import Stats from './components/stats';

class Details extends React.Component {
	render() {
		const template = (
			<div className={'user-profile__details'}>
				<Info />
				<Stats />
			</div>
		)
		return template;
	}
}

export default Details;