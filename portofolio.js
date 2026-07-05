function bukaJendela(){
document.getElementById("melayang").style.display="flex";
}
function tutupJendela(){
    document.getElementById("melayang").style.display="none";
}
window.onload=function(){
    bukaJendela();
}
function kembali(){
    document.getElementById("jendela").style.display="flex";
}
function lanjutHalaman(){
    window.location.href="index.html";
}
function batalHalaman(){
    document.getElementById("jendela").style.display="none";
}

