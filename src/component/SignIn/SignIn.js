import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import OthersSignIn from './OthersSignIn/OthersSignIn';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {  initializeSignInFramework } from './SignInManaged';
import "firebase/auth";
import * as firebase from "firebase/app";
import './SignIn.css'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        textTransform: 'none',
    },
}));


const SignIn = () => {
    const classes = useStyles();
    const [newUser, setNewUser] = useState(false);
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initializeSignInFramework();
    const hendelSignIn = (e) => {            
        let isFieldValid;
        isFieldValid = (e.target.value)
        if(e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...loggedinUser}
            newUserInfo[e.target.name] = e.target.value;
            setLoggedinUser(newUserInfo);
        }
        e.preventDefault();
    }
    const hendelSubmit = (event) => {
        if(newUser && loggedinUser.email && loggedinUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedinUser.email, loggedinUser.password)
            .then(response => {
                const newUserInfo = {...loggedinUser}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedinUser(newUserInfo);
                const name = loggedinUser.firstName + ' ' + loggedinUser.lastName;
                updateUserName(name)
            }) 
            .catch(error => {
                const newUserInfo = {...loggedinUser}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedinUser(newUserInfo);
            }); 
        }
        if(!newUser && loggedinUser.email && loggedinUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedinUser.email, loggedinUser.password)
            .then (response => {
                const {displayName} = response.user;
                const newUserInfo = {...loggedinUser}
                newUserInfo.name = displayName;
                setLoggedinUser(newUserInfo);
                history.replace(from);

            })
            .catch(function(error) {
                const newUserInfo = {...loggedinUser}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setLoggedinUser(newUserInfo);
              });
        }
        event.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
        .then(function() {
          console.log('user name updated successfully')
        }).catch(function(error) {
          console.log(error)
        });
        
      }
    

   
    
    
    return (
        <Container>
            <Header style={{color: 'black !important'}} />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper} style={{border: '1px solid #ABABAB', padding: '3em'}}>
                    {
                    newUser ? <Typography component="h1" variant="h5">Create an account</Typography> : <Typography component="h1" variant="h5">Sign in</Typography>
                    }
                    <form className={classes.form} noValidate onSubmit={hendelSubmit}>
                        <Grid container spacing={2}>
                            {newUser && (
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onBlur = {hendelSignIn}
                                    />
                                </Grid>
                            )}
                            {newUser && (
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        onBlur = {hendelSignIn}
                                    />
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onBlur = {hendelSignIn}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onBlur = {hendelSignIn}
                                />
                            </Grid>
                            {newUser && (
                                <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confrimPassword"
                                    label="Confrim Password"
                                    type="password"
                                    id="confrimPassword"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            )}
                            {newUser ? (
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            ) : (
                                <Grid container>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                        xs={6}
                                    />
                                    <Grid item xs={6} style={{marginTop: '10px'}}>
                                        <Link href="#" variant="body2">Forgot password?</Link>
                                    </Grid>
                                </Grid>
                            )} 
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            value = "submit"
                        >
                        { newUser ? <span>Create an account</span> : <span>Sign In</span> }
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button className="toggol-btn" onClick={() => setNewUser(!newUser)} >{newUser ? <span>Already have an account? Sign in</span> : <span>Don't have an account? Sign Up</span> }</Button>
                            </Grid>
                        </Grid>
                        <p style = { {color: 'red'} }>{loggedinUser.error}</p>
                        {loggedinUser.success && <p style = { {color: 'green'} }>Create an account Successfully</p>}
                    </form>
                </div>
                <OthersSignIn />
            </Container>
        </Container>
    );
};

export default SignIn;