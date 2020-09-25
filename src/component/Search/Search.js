import { Container, Paper } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import tileData from '../tileData/tileData';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import hotal1 from '../../Image/Rectangle 26.png';
import hotal2 from '../../Image/Rectangle 27.png';
import hotal3 from '../../Image/Rectangle 28.png';
import starIcon from '../../Icon/star_1_.png';
import GoogleMaps from '../GoogleMaps/GoogleMaps';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginTop: '25px'
    }
}));


const Search = () => {
    const classes = useStyles();
    const tourName = useParams();
    const tourInfo = tileData.find(tour => tourName.tourName === tour.title)
    const { title } = tourInfo;

    return (
        <Container>
            <Header />
            <Grid container component="main" className={classes.root}>
                <Grid item xs={false} sm={4} md={7}>
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h3>Stay in {title}</h3>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} style={{ marginBottom: '25px' }}>
                                <Paper className={classes.paper}>
                                    <img style={{ width: '100%', height: '228px' }} src={hotal1} alt="" />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} style={{ paddingLeft: '25px' }}>
                                <Paper className={classes.paper} style={{ boxShadow: 'none' }}>
                                    <h5 style={{ marginBottom: '25px' }}>Light bright airy stylish apt & safe peaceful stay</h5>
                                    <p style={{ color: '#6A6A6A' }}>4 guests   2 bedrooms   2 beds   2 baths</p>
                                    <p style={{ color: '#6A6A6A' }}>Wif Air conditioning Kitchen</p>
                                    <p style={{ color: '#6A6A6A', marginBottom: '25px' }}>Cancellation fexibility availiable</p>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} style={{ boxShadow: 'none' }}>
                                            <img style={{ width: '6%', marginTop: '-5px' }} src={starIcon} alt="" />
                                            <span style={{ marginLeft: '10px', fontWeight: 600 }}>4.9 (20)</span>
                                            <span style={{ marginLeft: '35px', fontWeight: 700, fontSize: '18px' }}>$34/</span>
                                            <span style={{ fontSize: '18px' }}>night</span>
                                            <span style={{ marginLeft: '10px', color: '#898989' }}>$167 total</span>
                                        </Paper>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} style={{ marginBottom: '25px' }}>
                                <Paper className={classes.paper}>
                                    <img style={{ width: '100%', height: '228px' }} src={hotal2} alt="" />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} style={{ paddingLeft: '25px' }}>
                                <Paper className={classes.paper} style={{ boxShadow: 'none' }}>
                                    <h5 style={{ marginBottom: '25px' }}>Apartment in Lost Panorama</h5>
                                    <p style={{ color: '#6A6A6A' }}>4 guests   2 bedrooms   2 beds   2 baths</p>
                                    <p style={{ color: '#6A6A6A' }}>Wif Air conditioning Kitchen</p>
                                    <p style={{ color: '#6A6A6A', marginBottom: '25px' }}>Cancellation fexibility availiable</p>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} style={{ boxShadow: 'none' }}>
                                            <img style={{ width: '6%', marginTop: '-5px' }} src={starIcon} alt="" />
                                            <span style={{ marginLeft: '10px', fontWeight: 600 }}>4.8 (10)</span>
                                            <span style={{ marginLeft: '35px', fontWeight: 700, fontSize: '18px' }}>$52/</span>
                                            <span style={{ fontSize: '18px' }}>night</span>
                                            <span style={{ marginLeft: '10px', color: '#898989' }}>$167 total</span>
                                        </Paper>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <img style={{ width: '100%', height: '228px' }} src={hotal3} alt="" />
                                </Paper>
                            </Grid>
                            <Grid item xs={6} style={{ paddingLeft: '25px' }}>
                                <Paper className={classes.paper} style={{ boxShadow: 'none' }}>
                                    <h5 style={{ marginBottom: '25px' }}>AR Lounge & Pool (r&r + b&b)</h5>
                                    <p style={{ color: '#6A6A6A' }}>4 guests   2 bedrooms   2 beds   2 baths</p>
                                    <p style={{ color: '#6A6A6A' }}>Wif Air conditioning Kitchen</p>
                                    <p style={{ color: '#6A6A6A', marginBottom: '25px' }}>Cancellation fexibility availiable</p>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} style={{ boxShadow: 'none' }}>
                                            <img style={{ width: '6%', marginTop: '-5px' }} src={starIcon} alt="" />
                                            <span style={{ marginLeft: '10px', fontWeight: 600 }}>4.9 (25)</span>
                                            <span style={{ marginLeft: '35px', fontWeight: 700, fontSize: '18px' }}>$44/</span>
                                            <span style={{ fontSize: '18px' }}>night</span>
                                            <span style={{ marginLeft: '10px', color: '#898989' }}>$167 total</span>
                                        </Paper>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} md={5}>
                    <GoogleMaps />
                </Grid>
            </Grid>
        </Container>
    );
};


export default Search