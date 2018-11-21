import React from 'react';
import user from 'config/user';
import validateUserShape from 'global/helpers/validateUserShape';
import UserProfile from './components/userProfile';
import UserContext from 'global/context/userContext';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.addComment = this.addComment.bind(this);
		this.addLike = this.addLike.bind(this);
		this.addFollow = this.addFollow.bind(this);

		this.state = {
			user: validateUserShape(user),
			addComment: this.addComment,
			addLike: this.addLike,
			addFollow: this.addFollow
		}
	}

	addComment(comment) {
		this.setState((prevState) => {
			const user = prevState.user;
			user.comments.push({
				comment,
				date: new Date
			});
			return {
				user: validateUserShape(user)
			}
		})
	}

	addLike() {
		this.setState((prevState) => {
			const user = prevState.user;
			user.stats.likes++;
			return {
				user: validateUserShape(user)
			}
		})
	}

	addFollow() {
		this.setState((prevState) => {
			const user = prevState.user;
			user.stats.followers++;
			return {
				user: validateUserShape(user)
			}
		})
	}

	render() {
		const template = (
			<UserContext.Provider value={this.state}>
				<UserProfile />
			</UserContext.Provider>
		);
		return template;
	}
}

export default App;