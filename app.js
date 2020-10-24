window.onload=function(){
    render()
}

function render(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render(); 
}

function firebaseAuth(){
    var phoneNumber=document.getElementById("number").value
console.log("phoneNumber",phoneNumber)
  var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      codeResult= window.confirmationResult 
      console.log("codeResult",codeResult)
        alert("message send")
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      console.log("error",error)
    });

}

function codeAuth(){
    var varCode=document.getElementById("code").value
    confirmationResult.confirm(varCode).then(function (result) {
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