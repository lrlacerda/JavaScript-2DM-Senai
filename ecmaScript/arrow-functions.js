const pessoas = ["Carol", "Anna", "Demétrio", "Vinícius", "Lucas", "Evelyn"];

//callbackfn
pessoas.forEach(function Carlos(cadaPessoa) {
    console.log("Bom dia " + cadaPessoa);
});

//função anonima
pessoas.forEach(function (cadaPessoa) {
    console.log("Bom dia " + cadaPessoa);
});

//arrow functions
pessoas.forEach((cadaPessoa) => {
    console.log("Bom dia " + cadaPessoa);
});

const dobro = (x) => {
    return x * 2;
};
console.log(dobro(5));

//forma simplificada com return implícito
const dobro1 = (x) => x * 2;
console.log(dobro(5));

//forma simplificada com return implícito
const dobro2 = x => x * 2;
console.log(dobro(5));

//retorna o texto bom dia
const bomDia = () => "Bom dia";

console.log(bonDia());

