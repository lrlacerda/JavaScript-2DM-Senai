const camisaLacoste = {
    descricao: "Camisa Polo",
    preco: 579.97,
    tamanho: "m",
    cor: "amarela",
    presente: true,
};

const { descricao, preco } = camisaLacoste; //vc não precisa colocar o .descricao EX. const descricao = caisaLacoste.descrição
const { presente } = camisaLacoste;

console.log("PRODUTO:");
console.log();

console.log(`Descrição: ${descricao}`);
console.log(`Preço: ${preco}`);
console.log(`Presente: ${presente ? "sim" : "não"}`);

//Exercicio destruction
//criar uma desestruturação para um objeto filmes
//trazer somente 3 propriedades
//genero, estudioDoFilme, TituloFilme, data lançamento

const filmes = [
    {
        genero: "Ação",
        estudioDoFilme: "Warner Bros",
        TituloFilme: "Batman Begins",
        dataLancamento: "15 de junho de 2005",
        duracao: "140 minutos",
    },
    {
        genero: "Ficção Científica",
        estudioDoFilme: "Paramount Pictures",
        TituloFilme: "Interestelar",
        dataLancamento: "7 de novembro de 2014",
        duracao: "169 minutos",
    },
    {
        genero: "Comédia",
        estudioDoFilme: "Universal Pictures",
        TituloFilme: "Meu Malvado Favorito",
        dataLancamento: "9 de julho de 2010",
        duracao: "95 minutos",
    },
];

const { genero, estudioDoFilme, TituloFilme, dataLancamento } = filmes;

filmes.forEach((filme, i) => {
    console.log("FILME:" + i);
    console.log();
    console.log(`Gênero: ${genero}`);
    console.log(`Estúdio do Filme: ${estudioDoFilme}`);
    console.log(`Título do Filme: ${TituloFilme}`);
    console.log(`Data de Lançamento: ${dataLancamento}`);
    console.log();
});
