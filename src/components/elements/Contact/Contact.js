import React from 'react';
import cx from 'classnames';
import DummyContainer from '../DummyContainer';
import InnerHeader from '../InnerHeader';
import Section from '../Section';
import Form from '../Form';

const submitAction = (event) => {event.preventDefault(); console.log("I HIT SUBMIT!")};

const form = {
	formClass: "contact-form",
	action: submitAction,
	inputs: [
		[
			{

				props: {
					type: 'text',
					label: 'Your name:',
					attributes: {
						placeholder: 'Tyler Durden'
					}
				}
			},
			{
				name: 'email',
				label: 'Your email:',
				type: 'email',
				attributes: {
					placeholder: 'soap@ikea.com'
				}
			}
		],
		[
			{
				name: 'message',
				label: 'Your message:',
				type: 'textarea',
				attributes: {
					placeholder: 'Just ask man.',
					cols: '40',
					rows: '5'
				}
			},
			{
				name: 'submit',
				type: 'button',
				text: 'Get in touch'
			}
		]
	]
};

const Contact = (props) => {
	return (
		<Section classNames={['head-simple', 'topspace-0']}>
			<InnerHeader bigText="Send me an email." littleText="I'm always interested in learning about new job opportunities, ideas, or just to have an intellectual conversation." />
			<Form>
				<Form.Fieldset className="topspace">
					<Form.Input attributes={{name: "name", type: 'text', placeholder: 'Tyler Durden'}} label="Your name:" />
					<Form.Input attributes={{name: "email", type: 'email', placeholder: 'soap@ikea.com'}} label="Your email:" />
				</Form.Fieldset>
				<Form.Fieldset>
					<Form.Textarea attributes={{name: "message", rows: 5, cols: 40, placeholder: "Just ask, man."}} label="Your message:" />
					<Form.Button type="submit">Email me.</Form.Button>
				</Form.Fieldset>
			</Form>
		</Section>
	);
};

export default Contact;