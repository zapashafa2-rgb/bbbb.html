function bukaJendela(){
document.getElementById("melayang").style.display="flex";
}
function tutupJendela(){
    document.getElementById("melayang").style.display="none";
}
window.onload=function(){
    bukaJendela();
}
const fade = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
    });
}, {
    threshold: 0.2
});
fade.forEach((el) => {
    observer.observe(el);
});


