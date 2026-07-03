if(window.location.pathname.includes("index.html")){

    alert("Selamat datang di halaman utama");

}


function porto(){

    let jawab = confirm("Apakah Anda ingin membuka portofolio?");

    if(jawab){

        window.location.href = "portofolio.html";

    }

}
if(window.location.pathname.includes("portofolio.html")){

    alert("Selamat datang di CV Zaldy Aditya Pashafa!");

}

function kembali(){

    let jawab = confirm("Apakah Anda yakin ingin kembali ke halaman utama?");

    if(jawab){

        window.location.href = "index.html";

    }

}