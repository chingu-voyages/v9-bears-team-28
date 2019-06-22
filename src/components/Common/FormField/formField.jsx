import React from 'react';

export default function FormField(props) {
	let classFromProps = props.classFromProps ? props.classFromProps : 'form-control';
	return (
		<div class="form-group row">
			<label for="inputEmail3" class="offset-sm-2 col-sm-4 col-form-label">
				{props.title}
			</label>
			<div class="col-sm-6">
				{props.customComponent ? (
					props.customComponent
				) : (
					<input type={props.type} className={classFromProps} placeholder={props.placeholder} />
				)}
			</div>
		</div>
	);
}
