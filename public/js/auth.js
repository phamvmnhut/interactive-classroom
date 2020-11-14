const loginWithBtn = document.querySelector('#loginWithGoogle');
const loginForm = document.querySelector('#loginForm');
const errorMsg = document.querySelector('#errorMsg');

const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();
loginWithBtn.onclick = () => auth.signInWithPopup(provider);

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#emailLogin').value;
    const password = document.querySelector('#passwordLogin').value;
    auth.signInWithEmailAndPassword(email, password).then(user =>{
        console.log(user);
        localStorage.setItem('user', user);
    }).then(() => auth.signOut()).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        errorMsg.textContent =  errorMessage;
    });
 

});
auth.onAuthStateChanged(user => {
    if (user) {
        // if logged in
        let user = localStorage.getItem('user');
        console.log(JSON.parse(user));
        console.log('---------');
    } else {
        // if logged out
    }
});
