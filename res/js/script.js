$(document).ready(function (){
    TweenMax.set($(".work"),{
      autoAlpha:0,
      y:'+80'
    });
    var notShown=!0;
  $(window).on("scroll",function(){
      if(notShown && window.scrollY > 200){
        notShown=false;
        showWork();
      }
  });
  setTimeout(showWork,8000);
  function showWork(){
    TweenMax.staggerTo($(".work"),0.5,{
      autoAlpha:1,
      y:'+0'
    },0.1);
  }
})