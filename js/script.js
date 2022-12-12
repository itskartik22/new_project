
var navBtn = document.getElementById("sideOpen");

navBtn.onclick = function(){
    document.body.classList.toggle("nav-close");
    if(document.body.classList.contains("nav-close")){
        navBtn.firstElementChild.classList.replace("fa-solid","fa-regular");
        navBtn.firstElementChild.classList.replace("fa-bars","fa-xmark");
    }
    else{
        navBtn.firstElementChild.classList.replace("fa-regular","fa-solid");
        navBtn.firstElementChild.classList.replace("fa-xmark","fa-bars");
    }
}