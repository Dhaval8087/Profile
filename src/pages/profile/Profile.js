import React, { Component } from 'react'
import Description from '../../components/Description/Description';
import Summary from '../../components/Summary/Summary';
import { Container, Row } from 'reactstrap';
export default class Profile extends Component {
    render() {
        return (
            <div className="descriptionTop">
                <Container>
                    <Description />
                    <br />
                    <Summary />
                </Container>
            </div>
        )
    }
}
