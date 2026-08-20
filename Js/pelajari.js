// DARK MODE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    toggle.innerText =
    document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";

});


// COPY CODE FUNCTION
function copyCode(id){

    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text);

    alert("Code berhasil di-copy 🚀");

}

// ANIMASI MUNCUL
const boxes = document.querySelectorAll(".code-box");

window.addEventListener("scroll", () => {

    boxes.forEach(box => {

        const pos = box.getBoundingClientRect().top;

        if(pos < window.innerHeight - 100){
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }

    });

});
