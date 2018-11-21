import React from 'react';
import * as eva from 'eva-icons';

import './style.scss';

class EvaSvg extends React.Component {
	render() {
		const {icon} = this.props;
		const template = (
			<figure className={'eva-icon'} dangerouslySetInnerHTML={{__html: eva.icons[icon].toSvg()}} />
		);
		return template;
	}
}

export default EvaSvg;