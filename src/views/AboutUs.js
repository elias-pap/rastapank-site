import React, {Component} from "react";
import "assets/css/social_bar.css";
import {Col, Container, Row} from "reactstrap";
import {get_default_meta} from "../default_meta";
import DocumentMeta from "react-document-meta";
import GoogleMapReact from "google-map-react";

const renderMarkers = (map, maps, lat, lng) => {
    let marker = new maps.Marker({
        position: {lat: lat, lng: lng},
        map,
        title: ''
    });
    return marker;
};

function GMapReact() {
    let defaultProps = {
        center: {lat: 35.30846, lng: 25.08119},
        zoom: 16,
    };

    return (
        <div style={{height: '35vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBWGv5gzLoXbCnknnoa0V0MOMfBwcUtpik'}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={defaultProps.center}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps, defaultProps.center.lat, defaultProps.center.lng)}>
            </GoogleMapReact>
        </div>
    )
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
                                    Ο ρα.στα.πάν.κ (ΡΑδιοφωνικός ΣΤΑθμός του ΠΑΝεπιστημίου Κρήτης) είναι μία αυτοδιαχειριζόμενη κοινότητα που στεγάζεται σ’ ένα κτίριο στους πρόποδες του κάμπου(ς) του πανεπιστημίου.
                                    <br/><br/>
                                    Η ομάδα είναι ανοιχτή σε άτομα εντός και εκτός πανεπιστημίου, σε όποιον αποδέχεται την διαφορετικότητα και την ελεύθερη έκφραση της, ενώ η οργάνωση και λήψη αποφάσεων γίνεται σε εβδομαδιαία γενική συνέλευση.
                                    <br/><br/>
                                    Η οικονομική επιβίωση και ανατροφοδότηση του εγχειρήματος επιτυγχάνεται μέσω εκδηλώσεων και δωρεών. Από το 2017 το πανεπιστήμιο χορηγεί την ενοικίαση και την ηλεκτροδότηση οικίσκου στο πάρκο κεραιών της Ρογδιάς, όπου έχει εγκατασταθεί εξοπλισμός για εκπομπή σήματος FM προς τους ραδιοφωνικούς δέκτες του Ηρακλείου.
                                    <br/><br/>
                                    Η ομάδα επιδιώκει την απο-εμπορευματοποίηση και ενεργά χρησιμοποιεί, σχεδιάζει και συνεισφέρει ελεύθερο και ανοιχτό λογισμικό. Με την δημόσια έκφραση, η φιλοδοξία της ομάδας είναι ο πειραματισμός, η ανάδειξη της πολιτιστικής ποικιλομορφίας και η διάδοση της επιστημονικής ή και εμπειρικής γνώσης με απώτερο στόχο την ατομική και συλλογική υπέρβαση.
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
                                            <GMapReact/>
                                        </div>
                                        <h6>ΕΠΙΚΟΙΝΩΝΙΑ</h6>
                                        <span className="">studio: &nbsp;</span>
                                        <span className="text-muted subscribe-line">2810-394894</span>
                                        <br/>
                                        <span className="">email: &nbsp;</span>
                                        <span className="text-muted subscribe-line">radio@culture.uoc.gr</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-sm-12">
                                    <div className="middle">
                                        <a className="btn2" href="https://www.facebook.com/rastapank967">
                                            <i className="fa fa-facebook-f"/>
                                        </a>
                                        <a className="btn2" href="https://github.com/UoC-Radio">
                                            <i className="fa fa-github"/>
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
