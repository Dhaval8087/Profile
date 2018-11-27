import React, { Component } from 'react'
import { Card, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Description.css';
export default class Description extends Component {
    render() {
        return (
            <Row>
                <Col md={9}>
                    <Card body style={{ outline: "none" }}>
                        <Row>
                            <Col md={7} className="descriptionleft">
                                <Row>
                                    <div className="float-left">
                                        <h2 className="descriptioncolor">DHVAL K PATEL</h2>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="float-left">
                                        <h4 className="descriptioncolor">FullStack Developer</h4>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="float-left">
                                        <h6 className="address">Ahmedabad, Gujarat, India</h6>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <div className="float-right">
                                        <FontAwesomeIcon icon={faLink} /> <a href="http://localhost:3000/">http://localhost:3000/</a>
                                    </div>

                                </Row>
                                <Row>
                                    <div className="float-right">
                                        <FontAwesomeIcon icon={faPhone} /> 9427857321
                            </div>
                                </Row>
                                <Row>
                                    <div className="float-right">
                                        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:erdhavalpatel@yahoo.com" target="blank">erdhavalpatel@yahoo.com</a>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}
