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
        title: 'Μακροβούτες',
        cover: require('assets/img/covers/μακροβούτες_cover.jpg'),
        //short_description: 'Εκθέσεις, φεστιβάλ και λοιπά καλλιτεχνικά δρώμενα',
        page: 'https://foukou.gitlab.io/makrovoutes/'
    },
    {
        title: 'Events',
        cover: require('assets/img/covers/events_cover.jpg'),
        //short_description: 'Εκθέσεις, φεστιβάλ και λοιπά καλλιτεχνικά δρώμενα',
        page: '/events'
    },
    {
        title: 'Smash repetition',
        cover: require('assets/img/covers/smash_repetition_cover.png'),
        //short_description: 'Εκθέσεις, φεστιβάλ και λοιπά καλλιτεχνικά δρώμενα',
        page: 'https://rastapank.gitlab.io/repetition/'
    },
    {
        title: 'Παρεμβάσεις',
        cover: require('assets/img/covers/παρεμβάσεις_cover.jpg'),
        //short_description: 'Εκθέσεις, φεστιβάλ και λοιπά καλλιτεχνικά δρώμενα',
        page: '/acts'
    },
    {
        title: 'ΦΚ βούτες',
        cover: require('assets/img/covers/foukou.jpg'),
        //short_description: 'Εκθέσεις, φεστιβάλ και λοιπά καλλιτεχνικά δρώμενα',
        page: 'https://gitlab.com/foukou/space/-/wikis/home'
    }
]

class Misc extends Component {
    componentDidMount() {
        dispatchEvent(new Event('load'));
    }

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'Δράσεις & αντιδράσεις'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <div className="section text-center">
                        <SubsectionsGrid header='Δράσεις & αντιδράσεις' subsections={subsections}/>
                    </div>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Misc;
