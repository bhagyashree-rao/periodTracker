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
$(document).ready(function(){
  $.ajax({
    url : "/v1/showPredictedDate",
    type : "post",
    data : {"userID" : localStorage.userID },
    success : function(response){
      var lastDate = new Date(response[0].lastDate);
      var predictedDate = addDays(lastDate,response[0].periodLength);
      var yyyy = predictedDate.getFullYear();
      var mm = predictedDate.getMonth();
      var dd = predictedDate.getDate();
      var event = [{'Date' : new Date(yyyy,mm,dd),'Title': 'Your next cycle is due anytime now!'}];
      var settings = {};
      var element = document.getElementById('caleandar');
      caleandar(element, event, settings);
      
    },
    error : function(response){
    }
  });
  if(localStorage.tipoftheday == undefined){
  $("#myModal").modal('show');
  tipoftheday();
  localStorage.tipoftheday = 1;
  }
});
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function tipoftheday(){
  $.ajax({
    url : "/v1/tips",
    type : "get",
    success : function(response){
      var lengthOfResponse = Math.floor(Math.random() * (response.length)) + 1;
      $("#modal-body-p").text(function(){return response[lengthOfResponse].tip;});
    },
    error : function(error){
      alert(error);
    }
  })

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

