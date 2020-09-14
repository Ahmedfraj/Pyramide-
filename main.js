
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Ma super pyramide');
}).listen(8080);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Salut, bienvenue dans ma super pyramide ! Combien d"etages veux-tu ?  ', nb => {
    
    function Pyramid() {
        
        var totalRows = nb;
       
        if (totalRows <= 25){
            console.log("Voici la pyramide :")
        var data = '';
        for (var i = 1; i <= totalRows; i++) {
            for (var j = 1; j <= i; j++) {
                data += '  ' + '#';
            }
         
            console.log(data);
            data = '';
        }}
    }
    Pyramid();
    
  });


    

