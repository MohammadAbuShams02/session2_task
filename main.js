

var div=document.querySelector("div");

var increasebuttone=document.querySelector(".increase"); 

var decreasebutton=document.querySelector(".decrease");



function increase(){
    div.classList.add("size");
}


increasebuttone.onclick=increase;



function decrease(){
    div.classList.remove("size");
}

decreasebutton.onclick=decrease;
