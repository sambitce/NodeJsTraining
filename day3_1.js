const domain = '127.0.0.1' ;
const port = 5000 ;

const http = require('http');
const fs = require('fs');
var url = require('url');

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
    var param = url.parse(req.url,true);
    console.log('param value is ' + param.path);
    console.log('param value is ' + param.pathname);
    if(req.url== '/'){
        //renderOutput(req,res,html);
        fs.writeFile('homepage.txt', 'home page loaded successfully' + queryString, (err)=>{
            if(err){
                throw err;
            }
            else {
                res.statusCode = 200;
                res.write('Home page success');
                res.end();
            }

        });
    }
    else if(req.url == '/product')
    //else if (param.pathname == '/product')
    {
        
            var queryValue = param.query;
            var output = queryValue.param1;
            console.log('name  value is ' + output);
        renderOutput(req,res,html);
    }
    else if (param.pathname == '/SubmitUserForm.html') {
           fs.readFile('SubmitUserForm.html' , (err,data) => {
            if(err){
                console.log('error from submit form html');
            }
            console.log('output from form is ' );
            renderOutput(req,res,data);
           });
        
    }
    else{
        res.statusCode=404;
        //res.write('not found resource');
        res.end();
    }


} );

server.listen(port,domain);

});