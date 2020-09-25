import { Button, Grid, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import FacebookIcon from '../../../Icon/fb.png';
import GoogleIcon from '../../../Icon/google.png';
import "firebase/auth";
import './OthersSignIn.css';
import { handleFacebookSingnIn, handleGoogleSingnIn, initializeSignInFramework } from '../SignInManaged';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';


const OthersSignIn = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initializeSignInFramework();

    const googleSignIn = () => {
        handleGoogleSingnIn()
        .then(result => {
            setLoggedinUser(result)
            history.replace(from); 
        })
    }

    const facebookSignIn = () => {
        handleFacebookSingnIn()
        .then(result => {
            setLoggedinUser(result)
            history.replace(from); 
        })
    }

    
    return (
        <div className={'or-area'}>
            <Grid container>
                <Grid item xs={5}>
                <Paper style={{boxShadow: 'none'}}><hr/></Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper style={{boxShadow: 'none'}}>Or</Paper>
                </Grid>
                <Grid item xs={5}>
                <Paper style={{boxShadow: 'none'}}><hr/></Paper>
                </Grid>
            </Grid>
            <div className={'button-style'}>
                <img src={FacebookIcon} alt=""/>
                <Button className={"btn-style"} onClick={facebookSignIn}>Continue with Facebook</Button>
            </div>
            <div className={'button-style'}>
                <img src={GoogleIcon} alt=""/>
                <Button className={"btn-style"} onClick={googleSignIn}>Continue with Google</Button>
            </div>
        </div>
    );
};

export default OthersSignIn;