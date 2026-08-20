const correctAnswers = [
    "Membuat Struktur Website",
    "Membuat Desain Website",
    "Interaksi Website",
    "＜p＞",
    "Mengatur Tampilan Website",
    "Membuat Website Interaktif",
    "Menampilkan Gambar",
    "color",
    "HyperText Markup Language",
    "Memberi Interaksi Website"
];

const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    const buttons = question.querySelectorAll(".option");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

        });

    });

});

document.getElementById("submit").onclick = function(){

    let score = 0;

    questions.forEach((question,index) => {

        const selected = question.querySelector(".option.active");

        if(selected){

            if(selected.innerText === correctAnswers[index]){
                score++;
            }

        }

    });

    const result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML =
    "🎉 Nilai Kamu : " + score + " / 10";

    result.scrollIntoView({
        behavior: "smooth"
    });

}