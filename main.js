async function searchAddress(cep) {
  const msgErro = document.querySelector("#erro");
  msgErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConverted = await consultaCEP.json();
    if (consultaCEPConverted.erro) {
      throw Error("CEP inexistente");
    }
    const cidade = document.querySelector("#cidade");
    const logradouro = document.querySelector("#endereco");
    const estado = document.querySelector("#estado");

    cidade.value = consultaCEPConverted.localidade;
    logradouro.value = consultaCEPConverted.logradouro;
    estado.value = consultaCEPConverted.uf;

    console.log(consultaCEPConverted);
    return consultaCEPConverted;
  } catch (erro) {
    msgErro.innerHTML = `<p>CEP Inválido. Tente novamente!</p>`;
    console.log(erro);
  }
}

const cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => searchAddress(cep.value));
