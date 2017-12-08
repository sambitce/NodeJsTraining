const domain = '127.0.0.1' ;
const port = 5000 ;

const http = require('http');
const fs = require('fs');

function renderOutput(req,res,inputHtml){
    res.statusCode=200;
    res.setHeader('contenet-type' , 'text/html');
    res.write(inputHtml + req.url);
    res.end();
}
fs.readFile('index.html' , function(err,html) {

    if(err){
        console.log('error');
    }

const server = http.createServer((req,res) =>{

    console.log('Inside create server');
    if(req.url== '/'){
 renderOutput(req,res,html);
    }
    else if(req.url == '/product')
    {
        renderOutput(req,res,html);
    }
    else{
        res.statusCode=404;
        //res.write('not found resource');
        res.end();
    }


} );

server.listen(port,domain);

});