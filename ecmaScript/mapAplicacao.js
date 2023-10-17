//crie dois arrays nomes e sebrenome
//crie um terceiro array de nomesCompleto
//ao final exiba os nomes completos no console com o foreach
//utilize arrow functions como calback functions
//usar o map

const nomes = ["João", "Maria", "Carlos", "Ana"];
const sobrenomes = ["Silva", "Santos", "Oliveira", "Souza"];

const nomesCompletos = nomes.map(
    (nome, index) => `${nome} ${sobrenomes[index]}`
);

nomesCompletos.forEach((nomeCompleto) => {
    console.log(nomeCompleto);
});
