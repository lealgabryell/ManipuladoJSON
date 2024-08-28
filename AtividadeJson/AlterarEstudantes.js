const fs = require("fs");

const newEstudante = { nome: "AugustoPerfeito", idade: 25, curso: "Medicina" };

const conteudo = fs.readFileSync("dados.json", "utf8");
const dadosExistentes = JSON.parse(conteudo);

const getIndex = () => {
  let index = dadosExistentes.estudantes.findIndex((i) => i.nome == "Talles");
  return index;
};

const alterarEstudante = () => {
  dadosExistentes.estudantes.splice(getIndex(), 1, newEstudante);

  const JsonStringfado = JSON.stringify(dadosExistentes, null, 2);

  fs.writeFileSync("dados.json", JsonStringfado);
};

alterarEstudante();
