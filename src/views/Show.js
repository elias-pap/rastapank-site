import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import marked from "marked";
import DocumentMeta from "react-document-meta";
import {get_default_meta} from "../default_meta";
import {Link} from "react-router-dom";
import {shows} from "../data/shows"

function Social({social, link}) {
    switch (social) {
        case 'facebook':
            return (<a className="btn2" href={link}>
                <i className="fa fa-facebook-f"/>
            </a>);
        case 'instagram':
            return (<a className="btn2" href={link}>
                <i className="fa fa-instagram"/>
            </a>);
        case 'twitter':
            return (<a className="btn2" href={link}>
                <i className="fa fa-twitter"/>
            </a>);
        case 'email':
            return (<a className="btn2" href={'mailto:'+link}>
                <i className="fa fa-envelope"/>
            </a>);
        default:
            return (<></>)
    }
}


function DescriptionMD({description}) {
    return (
        <p dangerouslySetInnerHTML={{__html: marked(description)}}></p>
    )
}

function MembersList({producers: members}) {
    if (members && members.length) {
        return (
            <div>
                <h3>Μουσικοί παραγωγοί</h3>
                {members.map((member, i) => (
                    <h5 key={i}>{member.name}</h5>
                    /*<h5 key={i}><Link to={'/member/' + member.id}>{member.name}</Link></h5>*/
                ))}
            </div>
        );
    } else
        return (<br/>)
}

function ScheduledList({hours}) {

    if (hours && hours.length) {
        return (
            <div>
                <h3>Πρόγραμμα</h3>
                {hours.map((schedule, i) => (
                    <h5 style={{color: '#3f96ac'}}
                        key={i}>{schedule.day_name[1]}: {schedule.from_time} - {schedule.to_time}  </h5>
                ))}
            </div>
        );
    } else
        return (<br/>)
}


class Show extends Component {
    state = {
        show: {
            'name': '',
            'description': '',
            'email': '',
            'facebook': '',
            'instagram': '',
            'twitter': '',
            'logo': require("assets/img/rastapank-logo-967_192.png"),
            'members': [],
            'scheduled': [],
        },
        meta: get_default_meta()
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        /*fetch('https://matzore-shows.herokuapp.com/api/get_show/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                data.show.logo = data.show.logo ? data.show.logo : require("assets/img/matzore_logo_192.png");
                data.meta = get_default_meta({
                    title: data.show.name,
                    description: data.show.description,
                    image: data.show.logo
                })
                this.setState(data);
                window.dispatchEvent(new CustomEvent('new_page'))
            })
            .catch(console.log);*/

        var data = { show: { ...shows[parseInt(params.id) - 1] }};
        this.setState(data);
        window.dispatchEvent(new CustomEvent('new_page'))

    }

    render() {
        return (
            <DocumentMeta {...this.state.meta}>
                <div className="section profile-content">
                    <Container>
                        <div className="owner">
                            <div className="avatar">
                                <img
                                    alt="..."
                                    className="img-circle img-no-padding img-responsive border-white-5"
                                    src={this.state.show.logo}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title">
                                    {this.state.show.name} <br/>
                                </h4>
                                <h6 className="description">ΕΚΠΟΜΠΗ</h6>
                            </div>
                        </div>
                        <div className="middle">
                            {this.state.show.facebook && this.state.show.facebook.length > 0 ?
                            <Social social='facebook' link={this.state.show.facebook}/> : <></>}
                            {this.state.show.instagram && this.state.show.instagram.length > 0 ?
                            <Social social='instagram' link={this.state.show.instagram}/> : <></>}
                            {this.state.show.twitter && this.state.show.twitter.length > 0 ?
                            <Social social='twitter' link={this.state.show.twitter}/> : <></>}
                            {this.state.show.email && this.state.show.email.length > 0 ?
                            <Social social='email' link={this.state.show.email}/> : <></>}
                        </div>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="6">
                                <DescriptionMD description={this.state.show.description}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center">
                                <MembersList producers={this.state.show.members}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center">
                                <ScheduledList hours={this.state.show.scheduled}/>
                            </Col>
                        </Row>
                        <br/>
                    </Container>
                </div>
                <IndexFooter/>
            </DocumentMeta>
        )
    }
}

export default Show;
