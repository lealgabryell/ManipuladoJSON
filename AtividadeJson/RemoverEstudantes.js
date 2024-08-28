const fs = require('fs');

const conteudo = fs.readFileSync('dados.json', 'utf8');
const dadosExistentes = JSON.parse(conteudo);

const getIndex = () => {
  let index = dadosExistentes.estudantes.findIndex(i => i.nome == "Diogo")
  return index
};

const ExcluirEstudante = () => {
  dadosExistentes.estudantes.splice(getIndex(), 1);

  const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);

  fs.writeFileSync('dados.json', JsonStringfado);
}

ExcluirEstudante()



