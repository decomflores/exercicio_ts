"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Frontend', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Frontend', 'Python'],
        idade: 23,
    }
];
alunos.push({
    nome: 'Julia',
    idade: 22,
});
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
console.log(alunos);
