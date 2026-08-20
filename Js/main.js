
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.onclick = function(){
    navbar.classList.toggle("active");
}
const cards = document.querySelectorAll(".materi-card");

window.addEventListener("scroll", function(){

    cards.forEach(card => {

        const posisi = card.getBoundingClientRect().top;
        const layar = window.innerHeight;

        if(posisi < layar - 100){
            card.classList.add("show-card");
        }

    });

});
const text = "Belajar Coding Jadi Lebih Mudah ";
let index = 0;

function ketik(){

    document.getElementById("typing-text").innerHTML =
    text.slice(0,index);

    index++;

    if(index > text.length){
        index = 0;
    }

}

setInterval(ketik,120);