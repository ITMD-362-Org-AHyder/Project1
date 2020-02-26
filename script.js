function formCompletion(){
	var fn = document.forms["submit"]["fName"].value;
	var ln = document.forms["submit"]["lName"].value;
	var e = document.forms["submit"]["email"].value;
	var p = document.forms["submit"]["phone"].value;
	if (fn.length ){
		alert("Fill out first name");
		return false;
	}
	else if (ln.length < 1){
		alert("Fill out last name");
		return false;
	}
	else if (e.length < 1){
		alert("Fill out email");
		return false;
	}
	else if (p.length < 1){
		alert("Fill out phone");
		return false;
	}
	else{
		alert("Thank you for your info");
		return true;
	}
}