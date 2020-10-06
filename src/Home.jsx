import React from 'react';
import home_img from '../src/images/home.svg'
import Page from './Page';

const Home = () => {
	return(
		<>
			<Page h1="Grow your business with" btn="Getting Started" link="/about-us" img={home_img}/>
		</>
	);
}
export default Home;