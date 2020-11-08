import React from "react";
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

function getContent(subsection)
{
    return(
    <>
    <div className="card-header">
        <img
            style={{maxHeight: 200}}
            alt={subsection.title}
            className="img-rounded img-responsive center"
            src={subsection.cover ? subsection.cover : "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
        />
    </div>
    <div className="card-body">
        <h4 className="card-subtitle mb-2 text-muted">{subsection.title}</h4>
        {/*<p className="card-text">{subsection.short_description}</p>*/}
    </div>
    </>
    );
}

function getLink(subsection)
{
    return(
        subsection.page.startsWith('http') ?   
        <a href={subsection.page} target='blank'>
            {getContent(subsection)}
        </a> :
        <Link to={subsection.page}>
            {getContent(subsection)}
        </Link>
    );
}

const SubsectionsGrid = ({header, subsections}) => {
    if (subsections && subsections.length)
        return (
            <div className='m-5 justify-content-center'>
                <div className='m-4'><h2>{header}</h2>
                </div>
                <Row  className='m-5 justify-content-center'>
                    {subsections.map((subsection, i) => (
                        <Col xl="3" md="4" sm="6" xs="12" key={i}>
                            <div className="card">
                                {getLink(subsection)}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    else
        return (
            <div className='m-5 justify-content-center'>
                <h4 className='m-4'>Δεν υπάρχουν υποκατηγορίες</h4>
            </div>
        );
};

export default SubsectionsGrid