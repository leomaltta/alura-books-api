async function searchAdress(cep) {
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConverted = await consultaCEP.json();
    if (consultaCEPConverted.erro) {
        throw Error('CEP inexistente');
    }
    console.log(consultaCEPConverted);
    return consultaCEPConverted;

    } catch (erro) {
        console.log(erro);
    }

}


let ceps = ['01001000','01001000' ];
let conjuntoCeps = ceps.map(values => searchAdress(values))
Promise.all(conjuntoCeps).then(response => console.log(response))