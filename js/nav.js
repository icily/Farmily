(function(){
	Parse.initialize("cBg30mmL0gugVy89T8VSVyRLE0swECDDg5ccJ46N", "xJoUF67t6m6DneUpQna1HKOnCnGm29dUWuifPCrg");

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

	Parse.history.start();
})();