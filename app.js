const routes = require('./routes/routes');
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();
 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true,
  }));
      
routes(app);
                       
// Start the server
 const server = app.listen(port, (error) => {
   if (error) return console.log(`Error: ${error}`);
                         
    console.log(`Server listening on port ${server.address().port}`);
 });
