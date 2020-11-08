import React, {Component, useState, useCallback} from "react";
import "assets/css/social_bar.css";
import {Col, Container, Row} from "reactstrap";
import EventsGrid from "components/Grids/EventsGrid";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/eventsData";


function App() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
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

class Events extends Component {
    state = {
        events: [],
        meta: get_default_meta()
    };

    /*componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_events')
            .then(res => res.json())
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }*/

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Events'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                <Container>
                    <h2 className="title text-left">Events</h2>
                    <App/>
                </Container>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Events;
