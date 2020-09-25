import "firebase/auth";
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config.js';

export const initializeSignInFramework = () => {if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}}


export const handleGoogleSingnIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then (result => {
        const {displayName, email} = result.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
          }
        return signedInUser;

    })
    .catch(error => {
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

export const handleFacebookSingnIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then (result => {
        const {email, name} = result.additionalUserInfo.profile;
        const signedInUser = {
            isSignedIn: true,
            name: name,
            email: email,
          }
        return signedInUser;

    })
    .catch(error => {
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}


