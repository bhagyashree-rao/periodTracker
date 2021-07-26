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
                  url : "/v1/previousLogs",
                  type : "post",
                  data : {"userID" : localStorage.userID},
                  success : function(response){
                    createElements(response);
                  },
                  error : function(response){
                    alert(error);
                  }
                });
              });
              function onLogPeriod(){
                $("#form-lpd").on("submit",function(event){
                  var formdata = $("#form-lpd").serializeArray();
                  formdata.push({'name' : "userID",'value': localStorage.userID});
                  
                  $.ajax({
                    url : "/v1/insertLatestLog",
                    type : "post",
                    data : formdata,
                    success : function(response){
                      alert("success");
                      window.location.href = '/logData.html'
                    }
                  });
                });
                
              }
              function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
              function createElements(tableData){
                var table = document.getElementById("previous-log-table");
                for(var i = 1 ;i<=tableData.length;i++){
                  var row = table.insertRow(i);
                  var cell1 = row.insertCell(0);
                  var cell2 = row.insertCell(1);
                  cell1.innerHTML = i;
                  var ld = new Date(tableData[i-1].lastDate);
                  cell2.innerHTML = ld;
                }
                      
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