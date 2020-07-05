function toggle(){
    var section = document.getElementById('section');
    var nav = document.getElementById('nav');
    section.classList.toggle('active');
    nav.classList.toggle('active');
}
  function pageload(arg){
        if(arg=="home"){
          $(".replace").load("index.html");
        }
       else if(arg=="test"){
          $(".replace").load("test.html");
        }
      else if(arg=="skills"){
        $(".replace").load("skills.html");
      }
  }


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}