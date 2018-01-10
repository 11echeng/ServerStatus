function ValidationEvent() {

	if (document.getElementById("DEV").checked || document.getElementById("TEST").checked) || document.getElementById("PROD").checked) {
		alert("Are you Sure?");
		return true;
	} else {
		alert("Invalid Server Selection....!!!");
		return false;
	} else {
		alert("All fields have been submitted!");
	}
}
