import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import ShowsGrid from "components/Grids/ShowsGrid";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import {shows} from "../data/shows"
import { Link } from "react-router-dom";

function App(props) {
    return (
      <div>
        <h5 className="description">
            {props.title}:&nbsp;
            <a href={props.stream_url} target="_blank">html5</a>,&nbsp;
            <a href={props.stream_url + '.m3u'} target="_blank">m3u</a>
        </h5>
      </div>
    );
  }

class Streams extends Component {
    state = {
        shows: []
    };

    componentDidMount() {
        /*fetch('https://matzore-shows.herokuapp.com/api/get_shows')
            .then(res => res.json())
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);*/
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Streams'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                <div className="section text-center">
                        <h2>Alternative streams</h2>
                        <Container><Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h5 className="description text-left">
                                    Mπορείτε να ακούσετε από τα διαφορετικά streams, είτε από το browser (html5 links) είτε από κάποιο player, όπως ο VLC (m3u links).  
                                    </h5>

                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <App title={'mp3/64kbps'} stream_url={'https://rs.radio.uoc.gr:8001/uoc_64.mp3'}/>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <App title={'mp3/128kbps'} stream_url={'https://rs.radio.uoc.gr:8001/uoc_128.mp3'}/>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <App title={'opus/64kbps'} stream_url={'https://rs.radio.uoc.gr:8001/uoc_64.ogg'}/>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <App title={'opus/128kbps'} stream_url={'https://rs.radio.uoc.gr:8001/uoc_128.ogg'}/>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col>
                                    <App title={'opus/256kbps'} stream_url={'https://rs.radio.uoc.gr:8001/uoc_256.ogg'}/>
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

export default Streams;
