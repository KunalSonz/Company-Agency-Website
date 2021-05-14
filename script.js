document.querySelector(".togglee").addEventListener("click",toggleClick)

function toggleClick(){
  opened = document.getElementById('navMenu'); 
  down = document.querySelector('.fa-chevron-down');
  up = document.querySelector('.fa-chevron-up');
  
  if(opened.style.display === "none"){
    opened.style.display = "grid";
    down.style.display = "none";
    up.style.display = "block"
  }
  else{
    opened.style.display = "none";
    up.style.display = "none"
    down.style.display = "block";
  }
  console.log("toggle");
}