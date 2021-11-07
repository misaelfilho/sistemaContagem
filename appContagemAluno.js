let quantidadeAlunos = 5 //quantidade de alunos

let listaAlunos = ["Phellipe", "Ana", "Isadora", "Ashley", "Olivia"]; //lista de alunos

for (let contador = 0; contador < listaAlunos.length; contador++) {

    if (contador == 0) {
        console.log(contador + " - ZERO - " + listaAlunos[contador]);
    } else if (contador % 2 == 1) {
        console.log(contador + " - ÍMPAR - " + listaAlunos[contador]);
    } else {
        console.log(contador + " - PAR - " + listaAlunos[contador]);
    }
} //utilizei a listaAlunos lugar da quantidadeAlunos.

