const user = firebase.auth().currentUser;
console.log(user);
const signOutBtn = document.querySelector('#signOutBtn');
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
 if (user) {

 } else {
    window.location.assign('login.html');
 }
});
