import React from 'react';
import {NavLink} from 'react-router-dom';

const Page = (props) => {

    return(
        <>
            <section id="header" className="">
				<div className="container-fuild nav_bg">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-6 pt-10 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
									<h1>
										{props.h1}
										<strong className="brand-name"> Florebit Digital </strong>
									</h1>
									<h2 className="my-3">
										We are the team of expert website developers
									</h2>
									<div className="mt-3">
										<NavLink className="btn btn-success" to={props.link}>
                                            {props.btn}
										</NavLink>
									</div>
								</div>
								<div className="col-6 pt-5 pt-lg-0 order-1 order-lg-2">
									<img src={props.img} className="img-fuild animated" alt="Offer Image" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    );

}


export default Page;