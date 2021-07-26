function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      
    });
    sessionStorage.clear();
        localStorage.clear();
        
        window.location.href = "/bsNavbarPT.html";
  }
  function onLoad() {
      gapi.load('auth2', function() {
        gapi.auth2.init();
      });
    }
    function onpersonalDetailsSubmit(){
      $("#form-pd").on("submit",function(event){
        var formdata = $("#form-pd").serializeArray();
        formdata.push({'name':"userID","value": localStorage.userID});
        event.preventDefault();
        $.ajax({
          url : "/v1/personalDetails",
          type : "POST",
          data : formdata,
          success : function(response){
            sessionStorage.formFilled = 1;
            localStorage.periodLength = response;
            window.location.href = "/calendarLea.html";
          },
          error : function(response){

          }
        })
        
      });
    }