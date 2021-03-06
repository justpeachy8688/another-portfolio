import React from 'react'
import Col from "react-bootstrap/Col";

import CardInfo from "../components/CardInfo";

function Card(props) {
    return (
        <Col classname="mt-4" xs={12} lg={4}>
            <div className="d-inline-block t-card" onClick={(e) => props.click(props.item)}>
                <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
            </div>
        </Col>
    )
}

export default Card;
