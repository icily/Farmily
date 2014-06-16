(function(){
	
	Parse.initialize("cBg30mmL0gugVy89T8VSVyRLE0swECDDg5ccJ46N", "xJoUF67t6m6DneUpQna1HKOnCnGm29dUWuifPCrg");
	console.log("start!!!")
	/*
	var handlers = {
	login: function(redirect){
		var currentUser = Parse.User.current();
		var postAction = function(){
			handlers.navbar();
			window.location.hash = (redirect) ? redirect : '';
		}
		
		if(currentUser){
			window.location.hash = '';
		} else {
			//這是用在template engine中的
			//document.getElementById('content').innerHTML = templates.loginTemplate();
			document.getElementById('page1').adEventListener('submit', function(){
				Parse.User.logIn(document.getElementById('loginForm_username').value,
				document.getElementById('loginForm_password').value, {
				success: function(user){
					postAction();
				},
				error: function(user, error){}
				});
			});
			//continue
			document.getElementById('singupForm_password1').addEventListener('keyup', function(){
          var singupForm_password = document.getElementById('singupForm_password');
          var message = (this.value !== singupForm_password.value) ? '密碼不一致，請再確認一次。' : '';
          document.getElementById('signupForm_message').innerHTML = message;           
        });
        // Signup Function binding, provided by Parse SDK.
        document.getElementById('singupForm').addEventListener('submit', function(){
          var singupForm_password = document.getElementById('singupForm_password');
          var singupForm_password1 = document.getElementById('singupForm_password1');
          if(singupForm_password.value !== singupForm_password1.value){
            document.getElementById('signupForm_message').innerHTML = '密碼不一致，請再確認一次。';      
            return false; 
          }
          
          var user = new Parse.User();
          user.set("Name", document.getElementById('singupForm_username').value);
          user.set("Email", document.getElementById('singupForm_username').value);
          user.set("password", document.getElementById('singupForm_username').value);
          user.set("telephone", document.getElementById('singupForm_username').value);
          user.set("facebook", document.getElementById('singupForm_username').value);
          user.set("website", document.getElementById('singupForm_password').value);
          user.set("email", document.getElementById('singupForm_emailAddress').value);
 
          user.signUp(null, {
            success: function(user) {
              postAction();
              // Hooray! Let them use the app now.
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              document.getElementById('signupForm_message').innerHTML = error.message + '['+error.code+']';
            }
          });
        }, false);
		}	
	}
	}
	var App = Parse.Router.extend({
		routes: {
			'': 'index',
		}
	});
	
	//initialize this app.
	this.Router = new App();
	Parse.history.start();
	*/
/*
	// Signup Form Password Match Check Binding.
        document.getElementById('singupForm_password1').addEventListener('keyup', function(){
          var singupForm_password = document.getElementById('singupForm_password');
          var message = (this.value !== singupForm_password.value) ? '密碼不一致，請再確認一次。' : '';
          document.getElementById('signupForm_message').innerHTML = message;           
        });
        // Signup Function binding, provided by Parse SDK.
        document.getElementById('singupForm').addEventListener('submit', function(){
          var singupForm_password = document.getElementById('singupForm_password');
          var singupForm_password1 = document.getElementById('singupForm_password1');
          if(singupForm_password.value !== singupForm_password1.value){
            document.getElementById('signupForm_message').innerHTML = '密碼不一致，請再確認一次。';      
            return false; 
          }
 */
		var currentUser = Parse.User.current();
		if (currentUser) {
			window.location.hash = '';
		} else {
		  document.getElementById('signupform').addEventListener('submit', function(){
          var user = new Parse.User();
		  console.log("hahaha work!");
          user.set("username", document.getElementById('signup_name').value);
          user.set("email", document.getElementById('signup_email').value);
          user.set("password", document.getElementById('signup_password').value);
          user.set("telephone", document.getElementById('signup_phone').value);
          user.set("facebook", document.getElementById('signup_facebook').value);
          user.set("website", document.getElementById('signup_blog').value);
		  var fileUploadControl = $("#image-upload")[0];
			if (fileUploadControl.files.length > 0) {
				var file = fileUploadControl.files[0];
				var name = "photo.jpg";
				var parseFile = new Parse.File(name, file);
			}
		  user.set("imageFile", parseFile);
 
          user.signUp(null, {
            success: function(user) {
              console.log("hahaha work!");
			  //postAction();
              // Hooray! Let them use the app now.
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              //document.getElementById('signupForm_message').innerHTML = error.message + '['+error.code+']';
			  console.log("failed!!!")
			  alert("Error: " + error.code + " " + error.message);
            }
          });
        }, false);
		}
})();