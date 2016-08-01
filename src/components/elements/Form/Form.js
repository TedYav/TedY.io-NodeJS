import React from 'react';

const Form = ({formClass = 'contact-form', action}) => (
	<form className={formClass}>
		Hey I'm a form!
	</form>
);

export default Form;