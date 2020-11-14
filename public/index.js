// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: 'AIzaSyAtoBiPNSjMraHogt9EJNoi2-F4CetzFXE',
    authDomain: 'interactive-classroom-594c6.firebaseapp.com',
    databaseURL: 'https://interactive-classroom-594c6.firebaseio.com',
    projectId: 'interactive-classroom-594c6',
    storageBucket: 'interactive-classroom-594c6.appspot.com',
    messagingSenderId: '685724894311',
    appId: '1:685724894311:web:6012b9318781e1a68580c2',
    measurementId: 'G-H6WCMZSY5K'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const loggedIn = document.querySelector('#loggedIn');
const userInfo = document.querySelector('#userInfo');
const form = document.querySelector('#form');
const auth = firebase.auth();

const signInWithBtn = document.querySelector('#signInWith');
const signOutBtn = document.querySelector('#signOutBtn');
const provider = new firebase.auth.GoogleAuthProvider();

const submitBtn = document.querySelector('#submit');
signInWithBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth.signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert('Error: ' + errorMessage);
    });
});
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
        form.hidden = true;
        loggedIn.hidden = false;
        userInfo.hidden = true;
        window.location = 'home.html';
        console.log(user);
    } else {
        // User is signed out.
        // ...
        form.hidden = false;
        loggedIn.hidden = true;
        userInfo.hidden = true;
    }
});
