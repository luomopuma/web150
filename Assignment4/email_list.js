var $= function(id){ return document.getElementById(id);}

var joinList = function () {
     //get the value of the email address fields
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var firstName = $("first_name").value;
	var lastName = $("last_name").value;
	var isValid = true;
	
	// validate the entries
	// add your code here
	if (emailAddress1 == ''){
		document.getElementById('email_address1_error').innerHTML = 'This field required.'; 
		isValid = false;
	} else {
		document.getElementById('email_address1_error').innerHTML = '';
	}
	if (emailAddress2 == ''){
		document.getElementById('email_address2_error').innerHTML = 'This field required.';
		isValid = false; 
	} else {
		document.getElementById('email_address2_error').innerHTML = '';
	}
	if (firstName == ''){
		document.getElementById('first_name_error').innerHTML = 'This field required.';
		isValid = false; 
	} else {
		document.getElementById('first_name_error').innerHTML = '';
	}
	if (lastName == ''){
		document.getElementById('last_name_error').innerHTML = 'This field required.';
		isValid = false; 
	} else {
		document.getElementById('last_name_error').innerHTML = '';
	}

	if (emailAddress2 != emailAddress1){
		document.getElementById('email_address2_error').innerHTML = 'Field must match the first entry.';
		isValid = false;
	} else {
		document.getElementById('email_address2_error').innerHTML = '';
	}

	// submit the form if all entries are valid
	if (isValid) {
		$("email_form").submit(); 
	}
}

window.onload = function () {
    $("join_list").onclick = joinList;
    $("email_address1").focus();  
}

