import React, { Component } from 'react';
import CommentsBlock from 'simple-react-comments';

class Comments extends Component {
	state = {
		comments: [
			{
				avatarUrl: "#",
				authorUrl: "#",
				fullName: "Anshul Dubey",
				createdAt: new Date(),
				text: "Demo comment here",
			},
		],
	};
	render() {
		return (
			<CommentsBlock
                comments={this.state.comments}
                isLoggedIn={true}
				onSubmit={text => {
					if (text.length > 0) {
						this.setState({
							comments: [
								...this.state.comments,
								{
									authorUrl: '#',
									avatarUrl: '#avatarUrl',
									createdAt: new Date(),
									fullName: 'Name',
									text,
								},
							],
						});
						console.log('submit:', text);
					}
				}}
			/>
		);
	}
}

export default Comments;