import React from 'react';

import Card from '../components/Card';

import bd from '../assets/images/Bangladesh.jpg';
import me from '../assets/images/Me.jpg';
import res from '../assets/images/res.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'My Home Country: Bangladesh',
                    subTitle: 'Learn more.',
                    imgSrc: bd,
                    link: 'https://bangladesh.gov.bd/index.php',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Taswer Mahmood',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: me,
                    link: 'https://www.linkedin.com/in/taswer-mahmood-922183129/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Resume',
                    subTitle: 'Click to download my resume.',
                    imgSrc: res,
                    link: './taswerResume.jpg',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
