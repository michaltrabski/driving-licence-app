import React from 'react';

const Button = (props) => {
	return (
		<button 
			className="btn btn-primary"
			onClick={props.onNestQuestion}
			>
			następne
		</button>
		)
};

export default Button;