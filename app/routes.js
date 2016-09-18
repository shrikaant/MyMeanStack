path = require('path');
var usrTodos = require('./../db/Customers');
module.exports = function (app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
    // route to handle all angular requests



    //app.get('/nerds', function (req, res) {
    //    res.sendFile(path.join(__dirname, '../public/views', 'nerd.html'));
    //});

    //app.get('/geeks', function (req, res) {
    //    res.sendfile('./public/geek.html');
    //});

    //



    app.get('/*', function (req, res) {
        console.log('Todo Msg fetched successfully1..');
        if (req.param('id') == 'suchi') {
            console.log('Todo Msg fetched successfully2..');

            usrTodos.find({ 'name': req.param('id') }, function (err, todos) {
                        if (err) throw err;

                        // object of all the users
                        console.log(todos);
                        res.json(todos);
                    });

            //res.send("hello");
            console.log('Todo Msg fetched successfully3..');
        }
    });

    app.post('/nerds', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        console.log('Trying to save msg..');
        usrTodos.create({
            name: 'neo',
            username: 'keanu reves',
            message: "hello",
            status: true,
            created_at: '10-28-2015',
            execute_at: '10-29-2015',
            mobile: '8848929420',
            email: 'abcd@gmai.com'
        }, function (err, todos) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            usrTodos.find(function (err, todos) {
                if (err)
                    res.send(err)
                console.log('Saved the msg..');
                res.json(todos);
            });
        });
    });
    
};
