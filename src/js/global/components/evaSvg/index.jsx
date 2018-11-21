import React from 'react';
import * as eva from 'eva-icons';

import './style.scss';

class EvaSvg extends React.Component {
	render() {
		const {icon} = this.props;
		if (!icon) {
			throw new Error('icon prop is required for this component to work');
		}
		const template = (
			<figure className={'eva-icon'} dangerouslySetInnerHTML={{__html: eva.icons[icon].toSvg()}} />
		);
		return template;
	}
}

export default EvaSvg;