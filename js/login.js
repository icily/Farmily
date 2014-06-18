(function(){
	
	Parse.initialize("cBg30mmL0gugVy89T8VSVyRLE0swECDDg5ccJ46N", "xJoUF67t6m6DneUpQna1HKOnCnGm29dUWuifPCrg");
	
	var currentUser = Parse.User.current();
	console.log("current user is:" + Parse.User.current());
	/*var postAction = function(){
        handlers.navbar();
        window.location.hash = (redirect) ? redirect : '';
      }*/
	if (currentUser) {
		alert("already login.")
		window.location = "./index.html";
	} else {
		document.getElementById('loginForm').addEventListener('submit', function(){
          Parse.User.logIn(document.getElementById('login_username').value,
              document.getElementById('login_password').value, {
				success: function(user) {
				  //alert("login success!!");	
				  window.location = "./farm_edit.html";
				  //postAction();
				},
				error: function(user, error) {
				  alert("login failed!!" + error.message);	
				}
			  }); 
		});
	}
})();