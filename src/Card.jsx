import React from 'react';
import {NavLink} from 'react-router-dom';

const Card = () => {
    const img = 'https://picsum.photos/200/150';

    return (
        <>
            <div className="card" style={{style:"18rem"}}>
                <img src={img} className="card-img-top" alt="Service Image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/contant-us" className="btn btn-primary">Learn More</NavLink>
                </div>
            </div>
        </>
    );
}

export default Card;