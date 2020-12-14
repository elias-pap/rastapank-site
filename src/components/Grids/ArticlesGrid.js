import React from "react";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";


const ArticlesGrid = ({articles, category}) => {
    if (articles && articles.length)
        return (
            <div className='m-5 justify-content-center'>
                {/*<div className='m-4'><h2>{category && category.name ? 'Άρθρα: ' + category.name : "Όλα τα Άρθρα"}</h2>
                </div>*/}
                <div className='m-4'><h2>{"Κείμενα"}</h2>
                </div>
                <Row>
                    {articles.map((article, i) => (
                        <Col xl="3" md="4" sm="6" xs="12" key={i}>
                            <div className="card">
                                <Link to={'/article/' + (articles.length - 1 - article.id)}>
                                    <div className="card-header">
                                        <img
                                            style={{maxHeight: 200}}
                                            alt={article.title}
                                            className="img-rounded img-responsive center"
                                            src={article.cover ? article.cover : "https://upload.wikimedia.org/wikipedia/commons/1/16/D%C3%A9tail_de_%22Blah%2C_blah%2C_blah%22_du_studio_Louise_Campbell_%28Maison_du_Danemark%29_%283600301569%29.jpg"}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-subtitle mb-2 text-muted">{article.title}</h4>
                                        <p className="card-text">{article.short_description}</p>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    else
        return (
            <div className='m-5 justify-content-center'>
                <h4 className='m-4'>Δεν υπάρχουν άρθρα</h4>
            </div>
        );
};

export default ArticlesGrid