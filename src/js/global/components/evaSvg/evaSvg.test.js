import React from 'react'
import {render, mount} from 'enzyme';
import EvaSvg from './';

describe('(Component) <EvaSvg />', () => {
	test ('Should render svg element', () => {
		const wrapper = render(<EvaSvg icon={'checkmark-circle-outline'} />);
		expect(wrapper.find('svg').length).toBe(1);
	});
	test ('Should throw an error if icon prop is not supplied', () => {
		let error;
		try {
			shallow(<EvaSvg />)
		} catch (e) {
			error = e;
		}
		expect(error).toBeInstanceOf(Error);
	});
});
