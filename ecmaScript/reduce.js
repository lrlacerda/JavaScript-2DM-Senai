const numeros = [10, 12, 20];

const somatorio = numeros.reduce((total, n) => total + n, 0);

console.log(somatorio);



const vendedor = "Lucas Lacerda"
const produtos = [
    {poduto: "camiseta", preco: 500.95},
    {poduto: "Tênis", preco: 350.99},
    {poduto: "Jaqueta", preco: 380.99}
];

const totalProdutos = produtos.reduce((vInicial, oP) => vInicial  + oP.preco, 0)
const totalProdutos2 = produtos.reduce((vInicial, oP) => vInicial  + (oP.preco * 0.05), 0)

console.log('Total das vendas R$ ' + totalProdutos);
console.log('Comissão das vendas do ' + vendedor + ' é de R$ ' + totalProdutos2);

