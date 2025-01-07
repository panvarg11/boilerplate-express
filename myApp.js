let express = require('express');
let app = express();

console.log(__dirname)

const absolutePath =__dirname+'/views/index.html'

app.get("/",(req,res) => {

    res.sendFile(absolutePath)
    
})

app.listen(3000,()=>{
    
})



































 module.exports = app;
