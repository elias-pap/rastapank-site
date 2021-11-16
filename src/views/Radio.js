import React, {Component} from "react";
import MediaQuery from 'react-responsive';
import IndexFooter from "../components/Footers/IndexFooter";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import {Col, Container, Row} from "reactstrap";
import SubsectionsGrid from "../components/Grids/SubsectionsGrid"

const default_cover = "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

const subsections = [
    {
        title: 'Αυτόματος πιλότος',
        cover: require('assets/img/covers/autopilot_cover.jpg'),
        short_description: 'αυτά που ακούτε όταν δε παίζουν εκπομπές',
        page: '/schedule_autopilot'
    },
    {
        title: 'Εκπομπές',
        cover: require('assets/img/covers/εκπομπές_cover.jpg'),
        short_description: 'τακτικές και έκτακες παρεμβάσεις στη ροή',
        page: '/shows'
    },
    /*{
        title: 'Το studio',
        cover: require('assets/img/covers/smash_repetition_cover.png'),
        //short_description: '',
        page: 'https://rastapank.gitlab.io/repetition/'
    },*/
    {
        title: 'Documentation',
        cover: require('assets/img/covers/rastawiki_cover.jpg'),
        short_description: 'αυτά που δεν ακούτε...',
        page: 'https://gitlab.com/rastapank/public/-/wikis/home'
    },
    {
        title: 'Streams',
        cover: require('assets/img/covers/icecast.png'),
        short_description: 'εναλλακτικά streams',
        page: '/streams'
    }
]

class Radio extends Component {
    componentDidMount() {
        dispatchEvent(new Event('load'));
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Ραδιόφωνο'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <div className="section text-center">
                        <SubsectionsGrid header='Ραδιόφωνο' subsections={subsections}/>
                    </div>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Radio;
