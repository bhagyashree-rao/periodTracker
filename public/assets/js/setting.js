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
          function onUpdateSubmit(){
            alert("function");
            $("#form-uppw").on("submit",function(event){
              alert("id");
              event.preventDefault();
              var formdata = $("#form-uppw").serializeArray();
              formdata.push({"name":"userID","value":localStorage.userID});
              $.ajax({
                url : "/v1/updatePassword",
                type : "post",
                data : formdata,
                success : function(response){
                  alert(response);
                  if(response == "success"){
                    alert("updated successfully");
                    window.location.href = "/setting.html";
                  } else {
                    $("#alert-box").append(response);
                  }
                },
                error: function(response){
                  alert(response);
                } 
              });
            });
          }
          var medArray = new Array();
  medArray[0] = 'Diclofenac<br>Ibuprofen<br>Ketoprofen<br>Meclofenamate<br>Mefenamic acid<br>Naproxen';
  medArray[1] = 'Medroxyprogesterone';
  medArray[2] = 'Medroxyprogesterone (Provera, Cycrin, Depo-Provera, Amen)<br>Estradiol (Alora, Climara, Esclim, Vivelle-dot, Estrace)<br>Estrogens, conjugated (Premarin)';
    $(document).on('change','#sel1',function(){
      $("#medicine").empty();
      $("#medicine").append(function(){
        return medArray[Number($("#sel1").find("option:selected").attr('id'))-1];
      })
    });