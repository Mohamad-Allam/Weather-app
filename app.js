
const request = require("request");
const dotenv = require("dotenv").config()
const address = process.argv[2]
var port = process.env.PORT || 8080;
var http = require('http');


http.createServer(function(req, res){
    res.write('hello ');
    res.end('   this is weather app')
}).listen(port,function(){
    console.log('server is up and running');
})


const url =`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&APPID=${process.env.API_KEY}`;


if (!address){
    console.log("please Enter the city")
};

request( url , (error , response, body)=>{
    const data = JSON.parse(body)
    console.log(data.main)
});







/*app.listen(port, () => {
    console.log('this app is listening on port http://localhost:3000');
    })*/

