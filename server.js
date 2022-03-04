const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Thanks For Order ( FerdyyRyy )")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Custom Activity Playing Dah Siap")});
}
module.exports = keepAlive