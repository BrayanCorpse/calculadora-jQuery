$(document).ready(function () {
    $("i").hide();
  });
  
  $(window).load(function () {
    $("i").show();
  
    var twitterPos = $("#twitter").position();
    var githubPos = $("#github").position();
    var stackPos = $("#stack").position();
    var linkedinPos = $("#linkedin").position();
    var codePos = $("#code").position();
    var plusPos = $("#plus").position();
    var mailPos = $("#mail").position();
    var imgPos = $(".me").position();
  
  
    setTimeout(function () {
      $("#twitter").animate(
        {
          top: twitterPos.top + 10,
          left: twitterPos.left - 10
        },
        500
      );
    }, 250);
  
    setTimeout(function () {
      $("#twitter").animate(
        {
          top: twitterPos.top,
          left: twitterPos.left
        },
        250
      );
  
      $("#github").animate(
        {
          top: githubPos.top + 10,
          left: githubPos.left - 6
        },
        500
      );
    }, 500);
  
    setTimeout(function () {
      $("#github").animate(
        {
          top: githubPos.top,
          left: githubPos.left
        },
        250
      );
  
   
  
  
      $("#linkedin").animate(
        {
          top: linkedinPos.top + 10,
          left: linkedinPos.left
        },
        500
      );
    }, 1000);
  
    setTimeout(function () {
      $("#linkedin").animate(
        {
          top: linkedinPos.top,
          left: linkedinPos.left
        },
        250
      );
  
   
     
  
      $("#mail").animate(
        {
          top: mailPos.top + 10,
          left: mailPos.left + 10
        },
        500
      );
    }, 1750);
  
    setTimeout(function () {
      $("#mail").animate(
        {
          top: mailPos.top,
          left: mailPos.left
        },
        250
      );
    }, 2000);
  });
  



