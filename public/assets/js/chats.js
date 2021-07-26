var botui = new BotUI('hello-world');

//#5 API call
botui.message.add({
  content: 'Hello! How may I help you?'
});
 
botui.action.button({ //#1
action: [
{ //#2
text: 'Cramps',
value: 'one'
},
{ //#3
text: 'Missing Period',
value: 'two'
}
]
}).then(function (res) {
if(res.value =='one'){
    botui.message.add({
        content : 'if the pain is unbearable,you should consult a doctor!'
    });
    botui.action.button({
        action : [
            {
                text : 'Okay',
                value : 'done'
            }
        ]
    })
} else {
    botui.message.add({
        content : 'if you have missed it for more than a month,you should consult a doctor!'
    });
    botui.action.button({
        action : [
            {
                text : 'Okay',
                value : 'done'
            }
        ]
    })
}
});
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

        