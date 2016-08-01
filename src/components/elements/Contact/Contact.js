import React from 'react';
import cx from 'classnames';
import DummyContainer from '../DummyContainer';
import InnerHeader from '../InnerHeader';
import Section from '../Section';
import Form from '../Form';

const Contact = (props) => {
	const submitAction = () => (console.log("I HIT SUBMIT!"));

	const form = {formClass: "contact-form"};

	return (
		<DummyContainer>
			<Section classNames={['head-simple', 'topspace-0']}>
				<InnerHeader bigText="Get in Touch" littleText="I'm always interested in learning about new job opportunities, ideas, or just to have an intellectual conversation." />
				<Form {...form} />
			</Section>
		</DummyContainer>
	);
};

export default Contact;