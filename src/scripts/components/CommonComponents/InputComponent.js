import React from 'react';

export default class InputComponent extends React.Component {
	render() {
		const elementId = this.props.id || Math.floor(Math.random()*10000)
		return (
			<div className="input-field col s6">
				<input id={elementId}
					   type={this.props.type || 'text'}
					   placeholder={this.props.placeholder || ''}
					   className={this.props.classList || ''} />
                <label htmlFor={elementId}>{this.props.labelText}</label>
            </div>
		)
	}
}
