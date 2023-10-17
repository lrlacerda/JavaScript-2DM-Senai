const numeros = [1, 2, 200, 7, 12, 15, 8];

const numeroMenor10 = numeros.filter((numero) => numero < 10);

console.log(numeroMenor10);

const comentarios = [
    { comentario: "bla bla bla", exibe: true },
    { comentario: "Evento é uma merda", exibe: false },
    { comentario: "ótimo Evento", exibe: true }
];

const comentariosOk = comentarios.filter(
    (comentario) => comentario.exibe === true
);

console.log(comentariosOk);
