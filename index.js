const express = require('express');
const app = express();
const port = 3000;

 app.get('/',(req, res) =>{
    res.send('Hola Mindo desde mi primera API con Node.js');
 });

app.listen(port, () => {
    console.log(`API escucha en http://localhost:${port}`);
});