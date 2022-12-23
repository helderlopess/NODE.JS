const path = require('path');

//basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

//nome diretorio atual
console.log(path.dirname(__dirname));

//extensao do arquivo
console.log(path.extname(__filename));

//criando objeto Path
console.log(path.parse(__filename));;

//juntar caminhos
console.log(path.join(__filename, "test", "test.html"));