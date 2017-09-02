var newUser = false;
var currentUser = null;

//var firebase = require('firebase');
// var config = {
//   apiKey: "<API_KEY>",
//   authDomain: "<PROJECT_ID>.firebaseapp.com",
//   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//   storageBucket: "<BUCKET>.appspot.com",
// };

//firebase.initializeApp(config);
function changeMode(mode) {
	switch(mode) {
		case 'signup': document.getElementById('mode').innerText = "Sign Up"; 
			newUser=true;
			break;
		case 'login': document.getElementById('mode').innerText = "Login"; break;
			newUser=false;
			break;
	}
}

function onSubmitForm() {
	var email = document.getElementById('email').value;
	var password = document.getElementById('pwd').value;
	var emailRegex = /[A-Za-z]+[A-Za-z\d_.]+@\S+(\.[A-Za-z]+)+/;
	if(!emailRegex.test(email)) {
		alert("Enter a valid Email ID");
		return false;
	}
	var passwordRegex = /[A-Za-z]+[A-Za-z\d_.-]+/
	if((!passwordRegex.test(password)) || password.length < 8) {
		alert("Password must be atleast 8 characters long, start with a letter and include only letters, numbers and '_' '.' '-'");
		return false;
	}
	return true;
	// if (newUser) {
	// 	firebase.auth().createUserWithEmailAndPassword(email, password)
	// 		.then(function(authData) {
	// 			currentUser = firebase.auth().currentUser;
	// 			document.getElementById('form').action = "/home.html";
	// 			return true;
	// 		})
	// 		.catch(function(error) {
	// 			var errorCode = error.code;
	// 			var errorMessage = error.message;
	// 			if (error.code = 'auth/email-already-in-use') {
	// 				alert("This email ID is already in use. Contact the system admin to retrieve your login credentials");
	// 			}
	// 			else {
	// 				console.log(error);
	// 			}
	// 		});
	// }
	// else {
	// 	firebase.auth().signInWithEmailAndPassword(email, password)
	// 		.then(function(authData) {
	// 			currentUser = firebase.auth().currentUser;
	// 			document.getElementById('form').action = "/home.html";
	// 			return true;
	// 		})
	// 		.catch(function(error) {
	// 			var errorCode = error.code;
	// 			var errorMessage = error.message;
	// 			if (error.code = 'auth/user-disabled') {
	// 				alert("This User Account has been disabled. Contact Admin for further details");
	// 			}
	// 			else if(error.code = 'auth/user-not-found') {
	// 				alert("There is no User Account registered with this Email ID. To Sign Up, click the Sign Up button");
	// 			}
	// 			else if(error.code = 'auth/user-not-found') {
	// 				alert("Incorrect login credentials entered. Please check and try again.");
	// 			}
	// 			else {
	// 				console.log(error);
	// 			}
	// 		});
	// }
}