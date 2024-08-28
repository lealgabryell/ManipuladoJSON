const fs = require('fs');


const newEstudantes = [
  { nome: 'Diogo', idade: 20, curso: "SI" },
  { nome: 'Falconi', idade: 25, curso: "ADS" }
];

const AddEstudantes = () => {
  const conteudo = fs.readFileSync('dados.json', 'utf8');
  const dadosExistentes = JSON.parse(conteudo);

  newEstudantes.map((estudante) => {
    dadosExistentes.estudantes.push(estudante);
  })

  const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);

  fs.writeFileSync('dados.json', JsonStringfado);
}

AddEstudantes();


