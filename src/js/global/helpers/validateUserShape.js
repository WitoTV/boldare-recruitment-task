import * as yup from 'yup';

const validateUserShape = (user) => {
	const shape = yup.object().shape({
		'name': yup.string().default('Anonymous'),
		'location': yup.string().default(''),
		'avatar': yup.string().transform((value) => !value ? 'img/placeholder-avatar.jpg' : value ).default('img/placeholder-avatar.jpg'),
		'stats': yup.object().shape({
			'likes': yup.number().default(0),
			'followers': yup.number().default(0),
			'following': yup.number().default(0)
		}),
		'comments': yup.array().of(
			yup.object({
				'user': yup.object().shape({
					'name': yup.string().default('Anonymous'),
					'avatar': yup.string().transform((value) => !value ? 'img/placeholder-avatar.jpg' : value ).default('img/placeholder-avatar.jpg'),
				}),
				//'date': yup.date().default(() => new Date),
				'comment': yup.string().default('')
			})
		).default([])
	});

	return shape.cast(user);
}

export default validateUserShape;