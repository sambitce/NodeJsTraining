const domain='127.0.0.1' ;
const port = '5000' ;
const http = require('http');
const fs = require('fs');
const my1 = require('./mymodule1.js');
const my2 = require('./mymodule2.js');
const my3 = require('./mymodule3.js');

var emp1 = new my3('Tom', 'Cruise');
fs.readFile('index.html' , (err,html) => {
    if(err){
        throw err;
    }
    const server = http.createServer((req,res) =>{
    
    res.statusCode = 200;
    res.setHeader('Content-type' , 'text/html');
   // res.write(html);
   
   res.write(html);
    //res.end('My date ' + my1.myDateTime());
    //res.end('My first name is ' + my2.fName);
    res.end('My name is' + emp1.firstName + emp1.lastName);
   });

   server.listen(port,domain , () => {
       console.log('server start on port ' + port);
   });

});

