import prompt from 'prompt-sync'
import chalk from 'chalk'

console.log(chalk.green("Bem-vindo ao liste seu css"));
console.log(chalk.red("digite sair a qualquer momento para encerrar o programa"));

const pergunta = prompt()

const propriedades = (() => {
  let resultado = []
  let input = pergunta("insira propriedade css: ")
  
  while (input != "sair") {
    resultado.push(input);
    input = pergunta("insira propriedade css: ")
  }

  const resposta = resultado.sort()
  resposta.forEach((item) => {
    console.log(chalk.blue.bold(item));
  })
})
propriedades()

