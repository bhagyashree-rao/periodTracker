function onLogin(){
    $("#login-form").on("submit",function(event){
      var formdata = $("#login-form").serializeArray();
      event.preventDefault();
      $.ajax({
        url : "/v1/login",
        type : "POST",
        data : formdata,
        success : function(response){
          localStorage.email = response.userEmail;
          localStorage.userID = response.userID;
          if(response[0].userEmail != undefined){
              localStorage.email = response[0].userEmail;
              localStorage.userID = response[0].userID;
              sessionStorage.formFilled = response[0].formFilled;
              localStorage.periodLength = response[0].periodLength;
              if(response[0].formFilled == 0){
                window.location.href = "/getStarted.html";
              } else {
                window.location.href = "/calendarLea.html";
              }
          } else {
              $("#alert-box").empty();
              $("#alert-box").append(response);

            }
        },
        error : function(response){
          $("#alert-box").append(response);
        }
      })
    });
  }
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    let googleEmailID = profile.getEmail();
    if(googleEmailID){
      $.ajax({
        url : '/v1/authGoogle',
        type : 'post',
        data : {'userEmail' : googleEmailID},
        success : function(response){
          localStorage.email = response.userEmail;
          localStorage.userID = response.userID;
          if(response[0].userEmail != undefined){
              localStorage.email = response[0].userEmail;
              localStorage.userID = response[0].userID;
              sessionStorage.formFilled = response[0].formFilled;
              localStorage.periodLength = response[0].periodLength;
              if(response[0].formFilled == 0){
                window.location.href = "/getStarted.html";
              } else {
                window.location.href = "/calendarLea.html";
              }
          } else {
              $("#alert-box").empty();
              $("#alert-box").append(response);

            }
        },
        error : function(response){
          $("#alert-box").append(response);
        }
      });
    } else {
      $("#alert-box").append('<div class="alert alert-danger alert-dismissible fade show" role="alert">Email ID does not exist!<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>')
    }
  }
  function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}