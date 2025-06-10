document.addEventListener("DOMContentLoaded", () => {
  const senhaCorreta = "mopiEdu123";
  const form = document.getElementById("loginForm");
  const erro = document.getElementById("erro");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const senhaInput = document.getElementById("senha").value;

    if (senhaInput === senhaCorreta) {
      // Redireciona para a página restrita
      window.location.href = "educadores.html";
    } else {
      erro.style.display = "block";
    }
  });
});
