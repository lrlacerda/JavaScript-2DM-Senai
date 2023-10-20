const urlViaCep = "https://viacep.com.br/ws";

function cadastrar(e) {
    e.preventDefault();
    alert("Cadastrar...");
}

async function buscarEndereco(cep) {
    const resource = `/${cep}/json/`;
    try {
        const promise = await fetch(urlViaCep + resource);
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
