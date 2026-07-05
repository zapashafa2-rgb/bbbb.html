if(window.location.pathname.includes("index.html")){
function bukaPopup(){
document.getElementById("popup").style.display="flex";
}
function tutupPopup(){
    document.getElementById("popup").style.display="none";
}
window.onload=function(){
    bukaPopup();
}
function porto(){
    document.getElementById("pop").style.display="flex";
}
function lanjut(){
    window.location.href="portofolio.html";
}
function batal(){
    document.getElementById("pop").style.display="none";
}

}

if(window.location.pathname.includes("portofolio.html")){
function bukaPopup(){
document.getElementById("popup").style.display="flex";
}
function tutupPopup(){
    document.getElementById("popup").style.display="none";
}
window.onload=function(){
    bukaPopup();
}
function kembali(){
    document.getElementById("pop").style.display="flex";
}
function lanjut(){
    window.location.href="index.html";
}
function batal(){
    document.getElementById("pop").style.display="none";
}

}
