import React from 'react';

import { 
    Col,
 } from "react-bootstrap";
const CertificateCard = ({data}) => {
    return ( 
        <Col lg="3">
            <div className="pb-5 text-center">
                <a href={data.link} target='_blank' rel="noopener noreferrer">
                    <img className=" bg-white mb-3" src={data.issuer} alt=""/>
                    <p className="lead">
                        {data.title}<br/>
                    </p>
                </a>
                Issued: {data.date}
            </div>
        </Col>
     );
}
 
export default CertificateCard;