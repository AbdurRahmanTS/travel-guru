import React, { useState } from 'react';
import { Button, Col, Jumbotron, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import tileData from '../tileData/tileData'
import { Container, Fab } from '@material-ui/core';
import Booking from '../Booking/Booking';
import { Link } from 'react-router-dom';
import './Home.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const Home = () => {
    const classes = useStyles();
    const [tourInfo, setTourInfo] = useState({});
    
    const hendelToureInfo = (title, description, img) => {
        setTourInfo({title, description, img});
    }
    const {title, description, img} = tourInfo;
    const image = tileData[0].img;
    const backgroundStyle = title ? (
    {
        color: 'white',
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }  
    ) : (
        {
            color: 'white',
            height: '850px',
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }  
    )
    return (
        <Container >
            <div style={backgroundStyle}>
                <Header title={tileData[0].title} />
                <Row style={{ marginTop: '68px' }}>
                    <Col sm={4}>
                        {
                            title ? (
                                <Jumbotron style={{ backgroundColor: '#fff8dc00' }}>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <Link to ={/booking/+title}><Button variant="warning" onClick={() => <Booking />}>Booking <TrendingFlatIcon /></Button></Link>
                                </Jumbotron>
                            ) : (
                                <Jumbotron style={{ backgroundColor: '#fff8dc00' }}>
                                    <h1>{tileData[0].title}</h1>
                                    <p>{tileData[0].description}</p>
                                    <Link to ={/booking/+tileData[0].title}><Button variant="warning" onClick={() => <Booking />}>Booking <TrendingFlatIcon /></Button></Link>
                                </Jumbotron>
                            )
                        }
                    </Col>
                    <Col sm={8}>
                        <div className={classes.root} style={{ backgroundColor: '#ffffff00'}}>
                            <GridList className={classes.gridList} cols={2.5} style={{ width: '100%' }}>
                                {tileData.map((tile) =>  (
                                    <button key={tile.id} className={'button-style'} onClick={() => hendelToureInfo(tile.title, tile.description, tile.img)}>
                                        <GridListTile>
                                            <img className='img-style' src={tile.img} alt={tile.title} style={{ height: '98%', width: '98%' }} />
                                            <GridListTileBar
                                                title={tile.title}
                                                classes={{
                                                    root: classes.titleBar,
                                                    title: classes.title,
                                                }}
                                            />
                                        </GridListTile>
                                    </button>
                                ))}
                            </GridList>
                        </div>
                    </Col>
                </Row>
                <div style={{ textAlign: 'center' }}>
                    <Fab aria-label="add" style={{margin: '20px' }}>
                        <ChevronLeftIcon />
                    </Fab>
                    <Fab aria-label="add">
                        <ChevronRightIcon />
                    </Fab>
                </div>
            </div>
        </Container>
    );
};

export default Home;