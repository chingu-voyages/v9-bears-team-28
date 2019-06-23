import React from 'react';

export default function FormField(props) {
	let classFromProps = props.classFromProps ? props.classFromProps : 'form-control';
	console.log(props);
	return (
		<div className="form-group row">
			<label htmlFor="inputEmail3" className="offset-sm-2 col-sm-4 col-form-label">
				{props.title}
			</label>
			<div className="col-sm-5">
				{props.customComponent ? (
					props.customComponent
				) : (
					<input
						type={props.type}
						className={classFromProps}
						placeholder={props.placeholder}
						value={props.value}
						onChange={e => props.onChange(e.target.value)}
					/>
				)}
			</div>
		</div>
	);
}
