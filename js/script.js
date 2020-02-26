function formCompletion(){
	var fn = document.forms["main"]["fName"].value;
	var ln = document.forms["main"]["lName"].value;
	var e = document.forms["main"]["email"].value;
	var p = document.forms["main"]["phone"].value;
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