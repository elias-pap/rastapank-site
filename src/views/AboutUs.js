// @flow
import React, {Component} from "react";
import "assets/css/social_bar.css";
import {Col, Container, Row} from "reactstrap";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";

import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'



class OSMComponent extends Component{
    state = {
        lat: 35.30846,
        lng: 25.08119,
        zoom: 20,
      }

    render() {
    const position = [this.state.lat, this.state.lng]

    return (
            <Map center={position} zoom={this.state.zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker  position={position}>
          <Popup>
            Lounge & studio του ρασταπανκ
          </Popup>
        </Marker>
            </Map>
      );
    }
}

class AboutUs extends Component {

    render() {
        return (
            <DocumentMeta {...get_default_meta({title: 'AboutUs'})}>
                {window.dispatchEvent(new CustomEvent('new_page'))}
                <div className="main">
                    <div className="section text-center">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title text-left">About Us</h2>
                                    <h5 className="description text-left">
                                    Ο ρα.στα.πάν.κ 96,7 (ΡΑδιοφωνικός ΣΤΑθμός του ΠΑΝεπιστημίου Κρήτης) είναι αυτοδιαχειριζόμενη ομάδα που μεταξύ άλλων λειτουργεί ραδιοφωνικό σταθμό στο Ηράκλειο της Κρήτης. Στεγάζεται στο ΦΚ, ένα κτίριο στους πρόποδες του κάμπου(ς) του Πανεπιστημίου στις Βούτες, και είναι κομμάτι ενός ευρύτερου πυρήνα που δραστηριοποιείται στο χώρο.
                                    <br/><br/>
                                    Η λειτουργία του βασίζεται στην αφιλοκερδή πρωτοβουλία, η οργάνωση και λήψη αποφάσεων γίνεται σε άτακτη ανοιχτή γενική συνέλευση, και η οικονομική ανατροφοδότηση του εγχειρήματος επιτυγχάνεται από τις δωρεές των μελών του και από συνεισφορές του κόσμου στις διάφορες εκδηλώσεις που οργανώνει. Ξεκίνησε το 2012 εκπέμποντας διαδικτυακά και από το 2017 το Πανεπιστήμιο χορηγεί την ενοικίαση και την ηλεκτροδότηση οικίσκου στο πάρκο κεραιών της Ρογδιάς, όπου έχει εγκατασταθεί εξοπλισμός για εκπομπή σήματος FM.
                                    <br/><br/>
                                    Η ομάδα επιδιώκει το πειραματισμό, την απο-εμπορευματοποίηση, και ενεργά χρησιμοποιεί, σχεδιάζει και συνεισφέρει ελεύθερο λογισμικό και ανοιχτά δεδομένα. Στην ίδια λογική η καθημερινή αλληλεπίδραση και ανταλλαγή εμπειριών, εργαλείων και αγαθών γίνεται ένας τρόπος επέκτασης των κοινών, ενώ η παρέμβαση μέσα από τα ερτζιανά προσδοκά στην ανάδειξη της αισθητικής ποικιλομορφίας και στην εξερεύνηση της γνώσης μέσα από το πολύμορφο διάλογο.
                                    </h5>

                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto mr-auto" md="8">
                                    <h2 className="title">Βρείτε μας
                                    </h2>
                                    <div className="description">
                                        <h6>ΔΙΕΥΘΥΝΣΗ</h6>
                                        <span>Πανεπιστημιούπολη Βουτών, Φοιτητικό Κέντρο</span>
                                        <br/> <br/>
                                        <div style={{width: "100%", height: "100%"}}>
                                            <OSMComponent/>
                                        </div>
                                        <h6>ΕΠΙΚΟΙΝΩΝΙΑ</h6>
                                        <span className="">studio: &nbsp;</span>
                                        <span className="text-muted subscribe-line">< a target="_blank" href="callto:+302810394894">2810-394894</a></span>
                                        <br/>
                                        <span className="">email: &nbsp;</span>
                                        <span className="text-muted subscribe-line">< a target="_blank" href="mailto:radio@culture.uoc.gr">radio@culture.uoc.gr</a></span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-sm-12">
                                    <div className="middle">
                                        <a className="btn2" target="_blank" href="https://www.facebook.com/rastapank967">
                                            <i className="fa fa-facebook-f"/>
                                        </a>
                                        <a className="btn2" target="_blank" href="https://github.com/UoC-Radio">
                                            <i className="fa fa-github"/>
                                        </a>
                                        <a className="btn2" target="_blank" href="https://gitlab.com/rastapank/public">
                                            <i className="fa fa-gitlab"/>
                                        </a>

                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </DocumentMeta>
        )
    }
}

export default AboutUs;
