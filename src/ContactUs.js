import React from 'react';
import HeaderNav from './components/HeaderNav';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

class ContactUs extends React.Component{
	render()
	{
		return(
			<React.Fragment>
			<HeaderNav/>
			<ContactForm/>
            <Footer/>
			</React.Fragment>
			)

	}
}

export default ContactUs;