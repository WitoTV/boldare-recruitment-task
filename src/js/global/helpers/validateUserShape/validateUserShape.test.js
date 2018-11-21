import validateUserShape from './';

describe('ValidateUserShape', () => {
	test('Is name property is not provided should set it to "Anonymous"', () => {
		const parsedUser = validateUserShape({});
		expect(parsedUser.name).toBe('Anonymous');
	});
	test('Is name property is provided should have passed it in parsed object', () => {
		const parsedUser = validateUserShape({'name': 'Testing'});
		expect(parsedUser.name).toBe('Testing');
	});
	test('Is location is not provied should set it to empty string', () => {
		const parsedUser = validateUserShape({});
		expect(parsedUser.location).toBe('');
	})
	test('Is location is not provied should have passed it in parsed object', () => {
		const parsedUser = validateUserShape({'location': 'Testing'});
		expect(parsedUser.location).toBe('Testing');
	})
	test('If comments array is not provided, should set it to empty array', () => {
		const parsedUser = validateUserShape({});
		expect(Array.isArray(parsedUser.comments)).toBe(true);
	});
	test('If comments array is provided, should validate and convert every element', () => {
		const parsedUser = validateUserShape({
			comments: [
				{},
				{'user': {'name': 'Testing name'}},
				{'user': {'avatar': 'Testing avatar'}, 'comment': 'Testing comment'}
			]
		});
		expect(parsedUser.comments[0].user.name).toBe('Anonymous');
		expect(parsedUser.comments[0].user.avatar).toBe('img/placeholder-avatar.jpg');
		expect(parsedUser.comments[0].comment).toBe('');

		expect(parsedUser.comments[1].user.name).toBe('Testing name');
		expect(parsedUser.comments[1].user.avatar).toBe('img/placeholder-avatar.jpg');
		expect(parsedUser.comments[1].comment).toBe('');

		expect(parsedUser.comments[2].user.name).toBe('Anonymous');
		expect(parsedUser.comments[2].user.avatar).toBe('Testing avatar');
		expect(parsedUser.comments[2].comment).toBe('Testing comment');
	});
});