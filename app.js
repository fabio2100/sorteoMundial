const http = require('http');
fs = require('fs');
const creaGruposMundial = require('./mundi')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/json');
  const gruposJson = creaGruposMundial();

  fs.writeFile('./resultados/sorteo'+Date.now()+'.json',JSON.stringify(gruposJson),function (err) {
    if (err) return console.log(err);})
  res.end(JSON.stringify(gruposJson))
});

server.listen(port, hostname ,() =>{
  console.log('server corriendo')
})