document.getElementById("imcForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const alturaChecker = document.querySelector("#altura");
  const pesoChecker = document.querySelector("#peso");
  const submiteButton = document.querySelector("#submite");
  const resultado = document.querySelector("#resultado");
  submiteButton.addEventListener("click", () => {
    const altura = alturaChecker.value / 100;
    const peso = pesoChecker.value;
    const imc = peso / altura ** 2;
    const error = document.querySelector("#error");
    if ((altura && peso !== null) || undefined) {
      resultado.innerText = `Seu IMC é ${imc.toFixed(4)}`;
      error.innerText = "";
    } else {
      error.innerText = "Erro. Insira todos os valores primeiro.";
      resultado.innerText = "";
    }
  });
});
