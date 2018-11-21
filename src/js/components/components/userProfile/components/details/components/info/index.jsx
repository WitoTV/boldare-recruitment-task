import React from 'react';
import EvaSvg from 'global/components/evaSvg';
import UserContext from 'global/context/userContext';

class Info extends React.Component {
	render() {
		const template = (
			<UserContext.Consumer>
				{({user, addLike}) => (
					<div className={'user-profile__info'}>
						<figure style={{backgroundImage: `url(${user.avatar})`}} className={'user-profile__avatar'} />
						<div>
							<h1>{user.name} <i onClick={addLike}><EvaSvg icon={'heart-outline'} /></i></h1>
							{!!user.location && <span>{user.location}</span>}
						</div>
					</div>
				)}
			</UserContext.Consumer>
		)
		return template;
	}
}

export default Info;