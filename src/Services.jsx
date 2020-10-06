import React from 'react';
import Card from './Card';

const Services = () => {
	return(
		<>
			<div className="my-5">
				<div className="text-center">
					<h3>
						Our Services
					</h3>
				</div>
			</div>
			<div className="container-fluid mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-md-4 mb-5">
								<Card/>
							</div>
							<div className="col-md-4 mb-5">
								<Card/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Services;