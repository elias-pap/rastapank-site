import React, {Component, useState, useCallback} from "react";
import {Col, Container, Row} from "reactstrap";
import ArticlesGrid from "components/Grids/ArticlesGrid";
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {articles} from "../data/articles"
import { photos } from "../data/paintsData";

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

class Articles extends Component {
    state = {
        articles: articles,
        category: {},
    };

    /*componentDidMount() {
        const params = this.props.match.params;
        fetch((params.id ? 'https://matzore-shows.herokuapp.com/api/get_category/' + params.id : 'https://matzore-shows.herokuapp.com/api/get_articles'))
            .then(res => res.json())
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }*/

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Άρθρα'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <ArticlesGrid articles={this.state.articles} category={this.state.category}/>
                    <div className='m-5 justify-content-center'>
                    <div className='m-4'>
                    <h2 className="title text-left">Ζωγραφιές</h2>
                    <App/>
                    </div></div>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Articles;
