function onRegister(){
    $("#register-form").on("submit",function(event){
      var formdata = $("#register-form").serializeArray();
      event.preventDefault();
      $.ajax({
        url : "/v1/register",
        type : "POST",
        data : formdata,
        success : function(response){
          if(response[0].userID != undefined){
            localStorage.email = response[0].userEmail;
            localStorage.userID = response[0].userID;
            sessionStorage.formFilled = response[0].formFilled;
            window.location.href = "/getStarted.html";
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