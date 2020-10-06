import React from 'react';
import Page from './Page';
import about from '../src/images/about-us.svg'

const About = () => {
	return(
		<>
			<h2>
				<Page h1="Welcome to" btn="Contact Us" link="/contact-us" img={about}/>
			</h2>
		</>
	);
}
export default About;