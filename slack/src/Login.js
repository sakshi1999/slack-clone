import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
 import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn= () => {
        console.log(auth)
        console.log(provider)

        auth.signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("user : ", result)
            // ...

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user.displayName,
                userimage: result.user.photoURL
            });
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        // auth.signInWithPopup(provider)
        // .then((result) => {
        //     console.log(result);
        //     dispatch({
        //         type: actionTypes.SET_USER,
        //         user: result.user,
        //         userimage: result.userimage
        //     });
        // }) 
        // .catch((error) => {
        //     console.log(error)
        //     alert(error);
        // });
        
    };
    // const signup = ()=>{
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        
    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = result.credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         console.log('reslt', result)
    //         // ...
    //       }).catch(function(error) {
    //         console.log('error', error)
    //       });
    // }
    
    return (
        <div className="login">
            <div className="login__container">
                <img
                src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" 
                alt=""
                />
                <h3>Welcome to slack clone</h3>
                <h6>Let's go</h6>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
