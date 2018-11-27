import React, { Component } from 'react'
import { Card, Row, Col } from 'reactstrap';
import './Summary.css';
export default class Summary extends Component {
    render() {
        return (
            <Row>
                <Col md={9}>
                    <Card body style={{ border: "1px solid white" }}>
                        <Row>
                            <Col md={9}>
                                <div className="float-left sectiontitle">
                                    Summary
                          </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={9}>
                                <p className="p">
                                    Results-oriented, resourceful and problem-solving software engineer professional specialising in large scale software design and development for a wide variety of companies.
                                    High level of involvement in the advancement of the industry and adherence to best practice.
                                    <br />
                                    I am offering 7+ Years of experience in C#.NET, ASP.NET, HTML5, Xamarin, React, Redux, Flux, Different ORM, MVC, WPF and Silverlight (MVVM pattern), Out Systems and excellent learning skills for adapting new technologies.
                                    <br />
                                    <br />
                                    I have been consistently recognized for:
                                    <br />
                                    ● Demonstrated experience in project management in a software/IT environment: Extensive experience in project management in software and IT environments across varied clients in the last 6+ years. Have managed client networks, government security systems, productivity software, and anti-virus solutions.
                                    <br />
                                    ● Excellent documentation and communication skills: Successfully documented processes, workflows, procedures and research to the finest detail. Exceptional communication and interpersonal skills with the ability to negotiate effectively with both internal and external stakeholders at all levels.
                                    <br />
                                    <br />
                                    PERSONAL ATTRIBUTES
                                    <br />
                                    -------------------------------
                                    <br />
                                    ● Strong written and verbal communication skills
                                    <br />
                                    ● Excellent coding and digital development abilities
                                    <br />
                                    ● The confidence to express ideas as part of a creative team
                                    <br />
                                    ● A clear and genuine interest in technological trends
                                    <br />
                                    ● The ability to meet deadlines and think strategically
                                    <br />
                                    ● A passionate approach to work with a desire to push boundaries
                                    <br />
                                    ● The ability to explain technical jargon to peers and The ability to build a website from start to finish to the highest standard

                    </p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}
