import React from 'react';

export default class InputComponent extends React.Component {
	render() {
		return (
			<input id={this.props.id}
			type={this.props.type}
			placeholder={this.props.placeholder} />
		)
	}
}
