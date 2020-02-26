function formCompletion(){
	var fn = document.forms["Submit"]["fName"].value;
	var ln = document.forms["Submit"]["lName"].value;
	var e = document.forms["Submit"]["email"].value;
	var p = document.forms["Submit"]["phone"].value;
	if (fn.length < 1){
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