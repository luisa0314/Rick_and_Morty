const http = require('http');
const data = require('./utils/data');

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').at(3);

        const characterFound = data.find((character) => {
            return character.id === +id
        })    //aqui cambiamos o parseamos el tipo de dato de string a number
        
        //console.log(characterFound);
        return res
        .writeHead(200, {"content-type": "application/json"})
        .end(JSON.stringify(characterFound))
        
    } 
})
.listen(3001, 'localhost');