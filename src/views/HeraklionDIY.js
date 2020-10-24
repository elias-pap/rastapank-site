// @flow
import React, {Component, useState, useCallback} from "react";
import "assets/css/social_bar.css";
import {Col, Container, Row} from "reactstrap";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/tileData";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log('I was triggered during componentDidMount'+photo.site)
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}


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
                                    <App/>
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
