const users = [{
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
];

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
    app.get('/users/:id', (request, response) => {
        switch(request.params.id) {
          case "1":
             response.send(users[0]);
             break;
          case "2":
             response.send(users[1]);
             break;
          default:
             response.send("{}");
        } 
    });
    
    app.post('/users', (request, response) => {
      response.status(201).send('User added with ID: 3');
    });
    app.put('/users/:id', (request, response) => {
      response.send('User updated successfully.'); 
    });
    app.delete('/users/:id', (request, response) => {
      response.send('User deleted successfully.'); 
    });
}




module.exports = router;

