const fs = require('fs');

estudantes = {
  estudantes: [
    {
      nome: 'Gabryell',
      idade: 18,
      curso: "Ed. Fisica"
    },
    {
      nome: 'Talles',
      idade: 22,
      curso: "Fisioterapia"
    }]
};

const JsonStringfado = JSON.stringify(estudantes, null, 2);

const addJSON = () => {
  fs.writeFileSync('dados.json', JsonStringfado)
  return 'Dados inseridos com sucesso!'
}
console.log(addJSON());


// const resultado3 = dados.estudantes.reduce((grupo, estudantes) => {
//   if (!grupo[estudantes.curso]) {
//     grupo[estudantes.curso] = [];
//   }

//   grupo[estudantes.curso].push(estudantes.nome);
//   return grupo;
// }, {});


// const grupo = Object.keys(resultado3).map(curso => ({
//   curso: curso,
//   estudantes: resultado3[curso]
// }));


// console.log(grupo)