import React from 'react';
import UserContext from 'global/context/userContext';

class Stats extends React.Component {
	render() {
		const {stats} = this.props;
		const template = (
			<UserContext.Consumer>
				{({user, addFollow}) => (
					<React.Fragment>
						<div className={'user-profile__stats'}>
							<div className={'user-profile__single-stat'}>
								<p title={user.stats.likes}>{user.stats.likes}</p>
								<span>Likes</span>
							</div>
							<div className={'user-profile__single-stat'}>
								<p title={user.stats.following}>{user.stats.following}</p>
								<span>Following</span>
							</div>
							<div className={'user-profile__single-stat'}>
								<p title={user.stats.followers}>{user.stats.followers}</p>
								<span>Followers</span>
							</div>
						</div>
						<button onClick={addFollow} className={'user-profile__follow'} type={'button'}>
							follow
						</button>
					</React.Fragment>
				)}
			</UserContext.Consumer>
		)
		return template;
	}
}

export default Stats;