var express = require('express')
var app = express();

function main() {
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  })
  
  app.listen(3000, () => {
    console.log("El servidor esta funcionando perfecto papu");
  })

}

main();