const retorno = fetch("https://viacep.com.br/ws/09030640/json/")
    .then((resp) => {
        //promise resolvida
        console.log(resp); //objeto cheio de coisas
        return resp.json(); //retorna os dados
    })
    .then((dados) => {
        //os dados do corpo da promise the object
        console.log(dados);
    })
    .catch((e) => {
        console.log("Deu Ruin");
    });
