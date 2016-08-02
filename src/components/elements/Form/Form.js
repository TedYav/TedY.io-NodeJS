import React from 'react';
import cx from 'classnames';

const Form = ({formClass = 'contact-form', action, children}) => (
	<form className={formClass} onSubmit={action}>
		{children}
	</form>
);


Form.Fieldset = ({className='', attributes={}, children}) => (
	<fieldset className={className} {...attributes}>
		<div className="row">
			{children}
		</div>
	</fieldset>
);

Form.ElementWrapper = ({classNames, children}) => (
	<div className={cx(classNames)}>
		<div className='form-group'>
			{children}
		</div>
	</div>
);

Form.Label = ({name, content}) => (
	(content ? <label htmlFor={name} className="sr-only">{content}</label> : null)
);

Form.Input = ({attributes, label=false, classNames=['col-sm-4', 'col-sm-push-2']}) => {
	return (
		<Form.ElementWrapper classNames={['col-sm-4', 'col-sm-push-2']}>
			<Form.Label name={attributes.name} content={label} />
			<input className='form-control' {...attributes} />
		</Form.ElementWrapper>
	);
};

Form.Textarea = ({attributes, label=false}) => {
	let labelOutput = (label ? <label htmlFor={attributes.name} className="sr-only">{label}</label> : null);
	return (
		<Form.ElementWrapper classNames={['col-sm-8', 'col-sm-push-2']}>
			<Form.Label name={attributes.name} content={label} />
			<textarea className='form-control' {...attributes}>
			</textarea>
		</Form.ElementWrapper>
	);
};

Form.Button = ({attributes={}, type, classNames=['btn', 'btn-primary'], children}) => (
	<div className={cx('form-group', 'text-right')}>
		<button type={type} {...attributes} className={cx(classNames)}>
			{children}
		</button>
	</div>
);


/*
<Form>
<Form.Fieldset className="topspace">
	<Form.Input attributes={name: "name", type: 'text', placeholder: 'Tyler Durden'} label="Your name:" />
	<Form.Input attributes={name: "email", type: 'email', placeholder: 'soap@ikea.com'} label="Your email:" />
</Form.Fieldset>
<Form.Fieldset>
	<Form.Textarea attributes={name: "message", rows: 5, cols: 40, placeholder: "Just ask, man."} label="Your message:" />
	<Form.Button type="submit">Email me.</Form.Button>
</Form.Fieldset>
</Form>
*/

export default Form;