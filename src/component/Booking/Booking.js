import { Container } from '@material-ui/core';
import React from 'react';
import { Button, Col, Form, Jumbotron, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import Dates from '../Dates/Dates';
import Header from '../Header/Header';
import tileData from '../tileData/tileData';
import './Booking.css';

const Booking = () => {
    const tourName = useParams();
    const tourInfo = tileData.find(tour => tourName.tourName === tour.title)
    const { title, description, img } = tourInfo;
    const history = useHistory()

    const handleSubmit = () => {
        history.push('/search');
    }


    const backgroundStyle = {
        position: 'relative',
        color: 'white',
        height: '850px',
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    return (
        <Container>
            <div style={backgroundStyle}>
                <Header title={title} />
                <Row style={{ marginTop: '68px' }}>
                    <Col sm={4}>
                        <Jumbotron style={{ backgroundColor: '#fff8dc00', marginLeft: '40px' }}>
                            <h1>{title}</h1>
                            <br/>
                            <p>{description}</p>
                        </Jumbotron>
                    </Col>
                    <Col sm={8}>
                        <Form className = {'form'} >
                            <Form.Group >
                                <Form.Text className="text-muted" >Origin</Form.Text>
                                <Form.Control type="text" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Text className="text-muted">Destination</Form.Text>
                                <Form.Control type="text" required/>
                            </Form.Group>
                            <Dates />
                            <Link to ={/search/+title}><Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button></Link>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Booking;