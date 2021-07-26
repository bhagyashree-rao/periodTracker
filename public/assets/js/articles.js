
                  
    function articlebody(id){
    if(id == 1){
        var text = $("#1").find("b").text();
        $("#exampleModalLabelh5").text(function(){ return text;});
        $("#modalbody").append('<p>While exercising during your period might be the very last thing you feel like doing, there are a stack of reasons why it’s a really good idea. <br>Exercise improves blood circulation in the pelvic area, meaning less menstrual pain. It also boosts your overall mood so you can better cope with whatever your cycle throws at you. <br><b> What exercises should you be doing?</b><br> Going to the gym during a painful period might be a tall order, of course, but there are plenty of other alternatives. A long walk, a gentle swim or some yoga stretches can ease discomfort and help you feel a lot more positive. In a study of top female athletes, while nearly three out of four said they felt worse just before menstruation, 63 per cent said that their pain decreased during training [1]. A workout or physical activity will also make you feel better overall, as exercise stimulates endorphin production in your body. These feel-good hormones not only relieve the symptoms of PMS, they improve your sleep too. <br><b> How can you say goodbye to that bloated feeling?</b><br> Exercise can also help with that bloated feeling you get during your period. Did you know that it’s not unusual for women to take on five to 10 extra pounds of water during their cycle [2]? This bloat isn’t helped by over-indulging cravings for unhealthy foods that are common when you’re premenstrual. Apart from potentially leaving you feeling self-conscious and out of shape, too much sugary and fatty food will also leave you low in mood and energy. But when you sweat – like after a good workout – water leaves the body, relieving the bloat. Plus your mood’s boosted, you’ve got way more energy and you feel 100 per cent better about yourself.</p>');
      } else if (id == 2){
        var text = $("#2").find("b").text();
        $("#exampleModalLabelh5").text(function(){ return text;});
          $("#modalbody").append('<p>Period pain relief tips and home remedies</p><br> <ul> <li>Painkillers – Over-the-counter painkillers will nip cramps in the bud, but should always be taken after food, or with a glass of milk, to protect the stomach lining.</li> <li>Exercise outside – whether it’s a walk around the block or something requiring a little more energy – helps increase blood flow, oxygen levels and endorphin levels (nature’s painkilling and feel-good hormones). It might seem unappealing but these will all help your body to relax during this tricky time.</li> <li>Exercise inside – get the endorphins and pain-killing benefits of exercise without going outside by practising yoga! If you don’t have a yoga mat to hand, you can always use a towel or exercise on carpet or a rug. There are also a variety of workouts you can do on the spot, like High Intensity Interval Training (HIIT) which you can easily do inside or outside in the garden.</li> <li>Heat – A massage or heat will loosen up your muscles, so a hot bath, or hugging a hot water bottle are both recommended.</li> <li>Diet – We know that comfort food may be an appealing option, but lowering your fat intake and upping your vegetable count can ease the pain. Increasing your fluid intake by drinking more water can also help, as dehydration can cause muscle cramps. Herbal teas especially that contain peppermint and chamomile are warm and soothing, and can help you to feel calm and get through the pain.</li> <li>Chocolate – There’s a cocoa coloured lining to this cloud of period pain – chocolate contains magnesium and endorphins which will boost your energy so feel free to have a nibble!</li> </ul> <p>When to go to your doctor about menstrual cramps</p><br> <p>In a few cases, painful menstruation – or dysmenorrhoea – can get in the way of you living your life. In one study, up to 14% of women reported frequently being unable to go to work because of period pain [1]. But there’s no need to suffer. If your period cramps are this severe, talk to a doctor. In some cases, hormonal contraception can reduce period pain. Occasionally, period pain can be caused by an underlying medical condition, such as endometriosis or pelvic inflammatory disease. But where there isn’t an underlying condition, severe period pain tends to improve as women get older, and also after they have children.</p>');
      } else {
        var text = $("#3").find("b").text();
        $("#exampleModalLabelh5").text(function(){ return text;});
          $("#modalbody").append('<p>Stress is something we all experience from time to time, and it can often have a negative impact on us both physically and mentally.</p></br> <p>Whether it be a change in mood, an increase in blood pressure, or a change in appetite, there’s usually something else in our life that takes a little turn for the worse when we’re feeling under pressure.</p></br> <p>It’s therefore unsurprising to know that stress can also impact your menstrual cycle in a number of ways. Having said this, these problems are usually minor, so try to relax and trust your body to do what it needs to do!</p></br> <p>Can stress delay your period?</p></br> <p>It’s common for stress to cause an irregular cycle, so don’t panic if you’re late, early or even miss a month altogether during a particularly intense period (pardon the pun). A link has also been found between women who have stressful careers and short cycles1, but why is this?</p></br> <p>The hypothalamus is a part of the brain that controls your hormone levels, and this is why high levels of stress can often completely throw off your cycle2. If you’re going through a particularly stressful time, the hypothalamus can also make the call to cut off your period completely – it’s simply a way of your brain saying you can’t handle a baby right now!</p></br> <p>Can stress cause spotting?</p></br> <p>Yes, stress can also cause spotting between periods. Also linked to the hypothalamus, it usually means your hormones are getting confused about whether ovulation should happen or not. It can be pretty alarming when you notice bleeding mid cycle, but again, it’s probably nothing you should fret over unless it happens frequently. If you’re concerned at all, then contact your GP for some expert advice.</p></br> <p>Can stress make my PMS worse?</p></br> <p>To add yet another inconvenience to the list, stress can also intensify PMS symptoms. According to a study3, there is a link between stress and dysmenorrhoea (painful menstruation), which explains the upsurge in pain when you’re going through a difficult time. It’s a real pain, but nothing that should worry you too much. Check out our article on how to prevent period pains for some top tips.</p></br> <p>How to manage stress on your period</p></br> <p>Whilst some stress is unavoidable, it’s essential to put some time aside to help manage it properly – particularly around that time of the month!</p></br> <p>Although it might be the last thing on your mind, getting into a routine when it comes to exercising is always beneficial. Exercise is proven to be a significant stress reliever, and can also boost your mood and help period pain. This could include a brisk walk, a light stretch or even a gentle swim.</p></br> <p>It’s also important to track your cycle so that in the days leading up to your period you can prioritise a winding down routine. This could include some meditation before bed, or simply taking some extra time out of your day to relax and switch off.</p></br> <p>While stress affecting your period is usually minor and is often nothing to be too alarmed about, never be afraid to call your doctor if things become particularly intense. After all, it’s better to be safe!</p></br>');
      }
    } 
  
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
    function loggedin(){
        if(localStorage.userID != undefined){
            window.location.href = "/homePage.html";
        } else {
            window.location.href = "/bsNavbarPT.html";
        }

    }
    window.onload = function(){
      if(localStorage.userID != undefined){
          $("#navbarTogglerDemo02").append('<div class="g-signin2" style="display: none;"></div><a class="navbar-brand" href = "#logout" onclick="signOut();" style="margin-left: 20px;">logout</a>');
          $('#navbarTogglerDemo02').append('<a class = "navbar-brand" href = "/setting.html" style = "margin-left: 20px;">settings</a>');
      } else {
          $("#navbarTogglerDemo02").append('<a class="navbar-brand" href = "/login1.html" style="margin-left: 20px;">login</a>');
          $("#loggedin-navbar").attr("class","hidden-xs");
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
  });
});
        