import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import {Col, Container, Row} from "reactstrap";

class Chat extends Component {
    componentDidMount() {
        dispatchEvent(new Event('load'));
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Chat'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                <div className="section text-center">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title text-left">Chat</h2>
                                    <h5 className="description text-left">
                                    Για τη άμεση επικοινωνία μας χρησιμοποιούμε το ανοιχτό δίκτυο <a href="https://matrix.org/">matrix</a>.
                                    <br/><br/>
                                    Το δημόσιο κανάλι είναι το <a href="https://app.element.io/#/room/#rastapank-live:matrix.org">#rastapank-live:matrix.org</a>. Μπορείτε να κάνετε join με το matrix account σας ή δημιουργώντας έναν αν δε έχετε.
                                    </h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Chat;
