function changeMode(mode) {
	switch(mode) {
		case 'signup': document.getElementById('mode').innerText = "Sign Up"; break;
		case 'login': document.getElementById('mode').innerText = "Login"; break;
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
		alert("Password must be atleast 8 characters long, start with a letter and include only letters, numbers and underscores '_', periods '.', and hyphens '-'");
		return false;
	}
	// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
		
	// });
}