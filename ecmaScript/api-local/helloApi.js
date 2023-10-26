const urlViaCep = "https://viacep.com.br/ws";
const urlViaCepProfessor = "http://172.16.35.155:3000/myceps";
const urlContato = "http://172.16.35.155:3000/contatos";

async function cadastrar(e) {
    e.preventDefault();
    //pega os valores dos campos de formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const endereco = document.getElementById("endereco").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    //fazer a validação (extra) (dica cria uma função que retorna true ou false)
    // if (!validaForm(nome, endereco, cep)) {
    //     alert("Preencher todos os campos");
    //     return;
    // }

    // alert("Tudo Certo!");

    dados = {
        nome,
        email,
        cep,
        endereco,
        numero,
        cidade, 
        estado
    }

try {
    const primise = await fetch('urlContato', {
        data: JSON.stringify(objCadastro),
        method: "post",
        headers: {"Content-type" : "application/json"}
    });
    const dados = await promise.json();
    console.log(dados);
} catch (error) {
    console.log("Deu Ruim");
    console.log(error);
}
  
}

// function validaForm(nome, endereco, cep) {
//     console.log(nome);
//     console.log(endereco);
//     console.log(cep);

//     if (nome.length == 0 || endereco.length == 0 || cep.length < 8)
//     return false;
// }

async function buscarEndereco(cep) {
    // const resource = `/${cep}/json/`;
    try {
        // const promise = await fetch(urlViaCep + resource);
        const promise = await fetch(`${urlViaCepProfessor}/${cep}`);
        const endereco = await promise.json();
        console.log(endereco);

        preencherCampos({
            logradouro: endereco.logradouro,
            localidade: endereco.localidade,
            uf: endereco.uf,
        });
        document.getElementById("not-found").innerHTML = "";
    } catch (error) {
        document.getElementById("not-found").innerHTML = "CEP inválido";
    }
}

function preencherCampos(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}
