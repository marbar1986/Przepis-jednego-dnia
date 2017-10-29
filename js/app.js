$(document).ready(function(){

  $('body').scrollspy({target: ".navbar-nav", offset: 50});
  $(".navbar-nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  var date = new Date();
  var day = date.getDay();
  switch(day) {
      case 0:
          day = "niedziela";
          break;
      case 1:
          day = "poniedziałek";
          break;
      case 2:
          day = "wtorek";
          break;
          case 3:
          day = "środa";
          break;
          case 4:
          day = "czwartek";
          break;
          case 5:
          day = "piętek";
          break;
          case 6:
          day = "sobota";
          break;

  }

$('.getDay').text(day + "-" + date.toLocaleDateString());
$(".Top").on("click",function(){
  scroll(0,0);
})
})
