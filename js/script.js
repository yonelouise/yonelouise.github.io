// document.querySelectorAll(".toggle-btn").forEach(function(btn){btn.addEventListener("click", function () {
//   let text = document.querySelector(".text");
  
//   if (text.classList.contains("expanded")) {
//     text.classList.remove("expanded");
//     text.style.display = "-webkit-box"; // Retorna ao estado original
//     this.textContent = "Ler mais";
//   } else {
//     text.classList.add("expanded");
//     text.style.display = "block"; // Exibe o texto completo
//     this.textContent = "Ler menos";
//   }
// })});
// ===== Transforma o menu hamburguer dentro do x =====
const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', () => {
  alteraMenu();
});

function alteraMenu() {
  const nav = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change');

  if (menuHamburguer.classList.contains('change')) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
};

// toggle > se nao tem a classe adicona e se já tem, exclui, nesse caso a clsse é 'change''

