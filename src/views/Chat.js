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
                                    To live chat βρίσκεται στο κανάλι <h3><a href="https://app.element.io/#/room/#rastapank-live:matrix.org">#rastapank-live:matrix.org</a></h3>. Θα χρειαστεί να εγγραφείτε δίνοντας username/password για να συμμετέχετε στη κουβέντα.
                                    <br/><br/>
                                    Στο ρασταπάνκ χρησιμοποιούμε το ανοιχτό πρωτόκολλο επικοινωνίας του <a href="https://matrix.org/">matrix</a>. Η πλατφόρμα ελεύθερου λογισμικού που υλοποιεί το πρωτόκολλο και φιλοξενεί το κανάλι μας ονομάζεται element. Σόρυ για το χάομα.
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
