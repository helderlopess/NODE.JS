const fs = require("fs");
const { join } = require('path');
const path = require("path");

//criar ums pastta ctrl+k e depois ctrl+C para comentar todo o codigo
// *{fs.mkdir(path.join(__dirname, '/test'), (error) => { //callback executado quando a criacao for feita
//   if(error) { //se ja existir a pasta sera exibida uma mensagem de erro
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso");
// })

//criar um arquivo (metodo, nome da pasta, nome do arquivo), 'mensagem', (error) =>
// fs.writeFile(path.join(__dirname, '/test', 'test.html'), 'Hello node!', (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Arquivo criado com sucesso");
// });

//adicionar a um arquivo
fs.appendFile(path.join(__dirname, 'test', 'test.html'), 'Hello world', (error) => {
  if (error) {
    return console.log('Erro: ', error)
  }
  console.log('Arquivo modificado co sucesso')
});