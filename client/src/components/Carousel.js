import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import envision from "../assets/images/envision.png";
import letsVenture from "../assets/images/lets+Venture.png";
import scheduler from "../assets/images/scheduler.png";
import teamMate from "../assets/images/team-mate.png";
import watchNext from "../assets/images/WatchNextPic.png";
import weather from "../assets/images/Weather.png";

import Card from "../components/Card";

class Carousel extends React.Component {
    state = {
        items: [
            {
                id: 0,
                title: 'WatchNext',
                subTitle: 'Helps you choose what to watch over multiple services.',
                imgSrc: watchNext,
                link: 'https://charvey0.github.io/WatchNext/',
                selected: false
            },
            {
                id: 1,
                title: 'Lets+Venture',
                subTitle: 'Helps outdoorsy folks connect and socialize.',
                imgSrc: letsVenture,
                link: 'https://github.com/noheropage/lets-add-venture',
                selected: false
            },
            // {
            //     id: 2,
            //     title: 'Weather Dashboard',
            //     subTitle: 'Weather App that leverages Open Weather Map API data',
            //     imgSrc: weather,
            //     link: 'https://justpeachy8688.github.io/weather-dashboard/',
            //     selected: false
            // },
            {
                id: 2,
                title: 'Envision',
                subTitle: 'Helps teachers and students connect in the community through Art.',
                imgSrc: envision,
                link: 'https://wow-envision.herokuapp.com/',
                selected: false
            },
            // {
            //     id: 4,
            //     title: 'Work Day Scheduler',
            //     subTitle: 'Simple calendar app but powered by JQuery',
            //     imgSrc: scheduler,
            //     link: 'https://justpeachy8688.github.io/work-day-scheduler/',
            //     selected: false
            // },
            // {
            //     id: 5,
            //     title: 'Team Mate',
            //     subTitle: 'Node.js App that takes in info about employees on a Software Engineering team, and generates their summaries in an HTML webpage.',
            //     imgSrc: teamMate,
            //     link: 'https://github.com/justpeachy8688/team-mate',
            //     selected: false
            // },
        ]
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                items.selected = false;
            }
        });

        this.setState({ items });

    }
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })

    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel
