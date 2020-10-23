// @flow
import React, {Component} from "react";
import "assets/css/social_bar.css";
import {Col, Container, Row} from "reactstrap";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import TitlebarGridList from '../components/Cards'

class HeraklionDIY extends Component {

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'HeraklionDIY'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <div className="section text-center">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title text-left">Heraklion DIY affiliate projects</h2>
                                    <TitlebarGridList />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </DocumentMeta>
        )
    }
}

export default HeraklionDIY;
