import React from 'react';
import CertificateCard from "./CertificateCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Certificate = ({certificates}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {certificates.heading}
                    </h2>
                    <Row>
                        {
                            certificates.data.map(data => {
                                return <CertificateCard key={data.link} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Certificate;