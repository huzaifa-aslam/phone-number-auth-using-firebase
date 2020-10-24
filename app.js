window.onload=function(){
    render()
}

function render(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render(); 
}

function firebaseAuth(){
    var phoneNumber=document.getElementById("number").value
    var verCode=document.getElementById("code").value
    var signBtn=document.getElementById("sign-in-button")
    console.log(signBtn)
    firebase.auth().languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(signBtn, {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
      console.log("response",response)
    }
  });

  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("confirmationResult",confirmationResult)

    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      console.log("error",error)
    });

    confirmationResult.confirm(verCode).then(function (result) {
        // User signed in successfully.
        var user = result.user;
        console.log("result.user",user)
        // ...
      }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log("result.error",error)

      });
}
