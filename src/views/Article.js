import React, {Component} from "react";
import IndexFooter from "../components/Footers/IndexFooter";
import {Col, Container, Row} from "reactstrap";
import Moment from "react-moment";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import remarkSubSuper from 'remark-sub-super'
import DocumentMeta from "react-document-meta";
import {get_default_meta} from "../default_meta";
import {Link} from "react-router-dom";
import {articles} from "../data/articles"

const default_article_cover = "https://upload.wikimedia.org/wikipedia/commons/1/16/D%C3%A9tail_de_%22Blah%2C_blah%2C_blah%22_du_studio_Louise_Campbell_%28Maison_du_Danemark%29_%283600301569%29.jpg"
/*function DescriptionMD({description}) {
    console.log(description)
    return (
        <p dangerouslySetInnerHTML={{__html: marked(description)}}></p>
    )
}*/

function TagsList({tags, category}) {
    if (tags && tags.length) {
        return (
            <div><h4>
                {/*<span className="badge badge-default m-1">
                    <Link className='text-light' style={{fontWeight: 'bold'}}
                          to={'/articles_category/' + category.id}>{category.name}</Link>
                </span>*/}
                {tags.map((tag, i) => (
                    <span key={i} className="badge badge-primary m-1">
                        <Link className='text-light' to={'/tag/' + tag.id} title="Δείτε περισσότερα">{tag.name}</Link>
                    </span>
                ))}
            </h4></div>
        );
    } else
        return (<br/>)
}

function AuthorsList({authors}) {
    if (authors && authors.length) {
        return (
            <>
                {authors.map((author, i) => (
                    <span className="badge badge-dark m-1" key={i}>
                        <Link style={{fontWeight: 'bold'}} to={'/author/' + author.id}>{author.name}</Link></span>
                ))}
            </>
        );
    } else
        return (<br/>)
}

class Article extends Component {
    state = {
        article: {
            'title': '',
            'body': 'empty',
            'cover': '',
            'created_at': '',
            'category': '',
            'authors': [],
            'tags': []
        },
        meta: get_default_meta()
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        /*fetch('https://matzore-shows.herokuapp.com/api/get_article/' + params.id)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                data.article.cover = data.article.cover ? data.article.cover : require("assets/img/rastapank-logo-967_192.png");
                data.meta = get_default_meta({
                    title: data.article.title,
                    description: data.article.short_description,
                    type: 'article',
                    image: data.article.cover
                })
                this.setState(data);
                window.dispatchEvent(new CustomEvent('new_page'))
            })
            .catch(console.log);*/
        var article = articles[articles.length - 1 - params.id];
        var data = { article: { ...articles[articles.length - 1 - params.id] }};

        fetch(article.src)
            .then((r) => r.text())
            .then(text  => {
                data.article.body = text;
                data.article.cover = data.article.cover ? data.article.cover : default_article_cover;
                data.meta = get_default_meta({
                    title: data.article.title,
                    description: data.article.short_description,
                    type: 'article',
                    image: data.article.og_cover
                })
                this.setState(data);
                window.dispatchEvent(new CustomEvent('new_page'))
            })
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
                                    src={this.state.article.cover}
                                />
                            </div>
                            <div className="name">
                                <h4 className="title m-0">
                                    {this.state.article.title} <br/>
                                </h4>
                                <Row>
                                    <Col className="ml-auto mr-auto text-left" md={6}>
                                        <TagsList tags={this.state.article.tags}
                                                  />
                                    </Col>
                                    <Col className="ml-auto mr-auto text-right" md={6}>
                                        <h5>
                                            {/*this.state.article.authors.length > 1 ? 'Authors: ' : 'Author: '*/}
                                            <span>
                                {/*<AuthorsList authors={this.state.article.authors}/>*/}
                                    </span>
                                        </h5>
                                        <p>
                                            Δημοσιεύτηκε:&nbsp;
                                            <span>
                                <Moment format="DD/MM/YYYY"
                                        style={{fontWeight: 'bold'}}>{this.state.article.created_at}</Moment>
                                    </span>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <br/>
                        <Row>
                        <Col className="ml-auto mr-auto text-left" md={12}>
                                {this.state.article.attachment &&
                                <p className="attachments">
                                    <a href={this.state.article.attachment}>το κείμενο σε εκτυπώσιμη μορφή</a>
                                </p>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-left" md="12">
                                <div className="markD">
                                    <ReactMarkdown plugins={[[gfm]]} children={this.state.article.body}/>
                                </div>
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

export default Article;
