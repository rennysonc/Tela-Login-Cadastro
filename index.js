const entrarBtn = document.querySelector("#entrar-btn");
const cadastroBtn = document.querySelector("#cadastro-btn");
const container = document.querySelector(".container");
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
cadastroBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

entrarBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
