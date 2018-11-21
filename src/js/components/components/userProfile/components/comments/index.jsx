import React from 'react';
import UserContext from 'global/context/userContext';
import PerfectScrollbar from 'perfect-scrollbar';
import moment from 'moment';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commentsVisible: true
		}
		this.toggleComments = this.toggleComments.bind(this);
	}

	componentDidMount() {
		this.scrollbar = new PerfectScrollbar(this.scrollbarContainer);
	}

	toggleComments() {
		this.setState((prevState) => ({
			commentsVisible: !prevState.commentsVisible
		}));
		this.scrollbar.update();
	}

	addComment(e, saveContext) {
		e.preventDefault();
		const data = new FormData(e.target);
		if(!!data.get('comment')) {
			saveContext(data.get('comment'));
			e.target.reset();
		}
	}

	render() {
		const {commentsVisible} = this.state;
		const template = (
			<UserContext.Consumer>
				{({user, addComment})  => (
					<React.Fragment>
					<div className={'user-profile__comments'}>
						<div className={'user-profile__toggle-comments'} onClick={this.toggleComments}>
							{`${commentsVisible ? 'Hide' : 'Show'} comments (${user.comments.length})`}
						</div>
						<div style={{marginTop: !commentsVisible && 0, height: !commentsVisible && 0 }} ref={(node) => this.scrollbarContainer = node} className={'user-profile__comments-list'}>
							{user.comments.map((comment) => (
								<article className={'user-profile__single-comment single-comment'}>
									<figure style={{backgroundImage: `url(${comment.user.avatar})`}}  className={'single-comment__avatar'}></figure>
									<div className={'single-comment__comment'}>
										<div className={'single-comment__user'}>{comment.user.name}</div>
										{comment.comment}
									</div>
									<div className={'single-comment__date'}>{moment(comment.date).fromNow(true)}</div>
								</article>
							))}
							<form className={'user-profile__add-comment'} onSubmit={(e) => {this.addComment(e, addComment)}}>
								<input autoComplete={'off'} placeholder={'Add a comment'} type={'text'} name={'comment'} />
							</form>
						</div>
					</div>
					</React.Fragment>
				)}
			</UserContext.Consumer>
		)
		return template;
	}
}

export default Comments;