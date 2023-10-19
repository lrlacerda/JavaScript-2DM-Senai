// const api = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Acessando o banco e retornando os dados");
//     }, 2000);

//     const sucesso = true;

//     if (sucesso) {
//         return resolve("Deu Certo!!");
//     } else {
//         return reject("Deu Ruim");
//     }
// });



const api = new Promise((resolve, reject) => {
  let condition = true; //simula uma operação no back end

  const soma = (x, y) => s + y;

  //aqui simula uma chamada demorada ao servidor
  setTimeout(() => {
    console.log("promise sendo executada");
    if (condition) {
      resolve("A promise foi resolvida com sucesso.");
    } else {
      reject("A promise foi rejeitada.");
    }
  }, 3000);
});

console.log();
console.log();
console.log(api); //chamada na api
console.log();
console.log();

api
  .then((retorno) => {
    console.log(retorno);
  })
  .catch((erro) => {
    console.error(erro);
  });