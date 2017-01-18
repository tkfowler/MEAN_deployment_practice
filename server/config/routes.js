var dogs = require('../controllers/dogs.js');
module.exports = function(app){
  app.get('/', function(req, res){
    dogs.home(req, res)
  });

  app.get('/dogs/new', function(req, res){
    res.render('new')
  });

  app.get('/dogs/:id', function(req, res){
    dogs.show(req, res)
  })

  app.get('/dogs/edit/:id', function(req, res){
    dogs.edit(req, res)
  })

  app.post('/dogs', function(req, res){
    dogs.create(req, res)
  })

  app.post('/dogs/:id', function(req, res){
    dogs.update(req, res)
  })

  app.post('/dogs/destroy/:id', function(req, res){
    dogs.destroy(req, res)
  })
}
