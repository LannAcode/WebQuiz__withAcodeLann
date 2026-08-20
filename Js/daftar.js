const button = document.querySelector("button");

button.addEventListener("click", function(e){

    e.preventDefault();

    button.innerHTML = "Pendaftaran Berhasil 🎉";

    button.style.background = "#95E1A3";

});