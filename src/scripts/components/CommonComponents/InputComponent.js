import React from 'react';

export default class InputComponent extends React.Component {
	render() {
		return (
			<div className="input-field col s6">
				<input id={this.props.id}
					   type={this.props.type}
					   placeholder={this.props.placeholder}
					   className={this.props.classList} />
                <label htmlFor={this.props.id}>First Name</label>
            </div>
		)
	}
}
