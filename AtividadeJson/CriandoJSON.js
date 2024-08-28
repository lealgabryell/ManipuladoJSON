const fs = require("fs");

estudantes = {
  estudantes: [
    {
      nome: "Gabryell",
      idade: 18,
      curso: "Ed. Fisica",
    },
    {
      nome: "Talles",
      idade: 22,
      curso: "Fisioterapia",
    },
  ],
};

const JsonStringfado = JSON.stringify(estudantes, null, 2);

const addJSON = () => {
  fs.writeFileSync("dados.json", JsonStringfado);
  return "Dados inseridos com sucesso!";
};
console.log(addJSON());