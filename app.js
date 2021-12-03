const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public',express.static(path.join(__dirname,'assets')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'assets','index.html'));
});

app.listen(PORT,console.log(`Server running on port ${PORT}...`))