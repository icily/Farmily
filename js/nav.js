(function(){
	Parse.initialize("cBg30mmL0gugVy89T8VSVyRLE0swECDDg5ccJ46N", "xJoUF67t6m6DneUpQna1HKOnCnGm29dUWuifPCrg");
	console.log("check everypage: " + Parse.User.current());
	var checkstatus = function(){
	var currentUser = Parse.User.current();
	if(Parse.User.current()){
    	document.getElementById('registerButton').style.display = 'none';
		document.getElementById('loginButton').style.display = 'none';
		document.getElementById('editButton').style.display = 'inline-block';
		document.getElementById("logoutButton").style.display = 'inline-block';
  	} else {
    	document.getElementById('registerButton').style.display = 'inline-block';
		document.getElementById('loginButton').style.display = 'inline-block';
		document.getElementById('editButton').style.display = 'none';
		document.getElementById("logoutButton").style.display = 'none';
	}
	document.getElementById('logoutButton').addEventListener('click', function(){
        Parse.User.logOut();
        checkstatus();
        //window.location.hash = '';
    });
	}
	checkstatus();
})();