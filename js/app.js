const formulario = document.querySelector(".form");
formulario.addEventListener("submit", (e) => {
    const email = document.getElementById("email").value;
    e.preventDefault();
    const validación = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)
    if(email === "" || !validación) {
        if(!document.querySelector(".error")) {
            const parrafo = document.createElement("p")
            parrafo.textContent = "Plase enter a valid email address";
            parrafo.classList.add("error");
            formulario.insertBefore(parrafo,document.querySelector(".form__submit"))
    
            setTimeout(() => {
                parrafo.remove();
            }, 3000);
        }
        }
})