var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
  home: function(req, res) {
    Dog.find({}, function(err, dogs) {
      res.render('index', {dogs: dogs});
    })
  },
  show: function(req, res){
    Dog.findOne({_id:req.params.id}, function(err, dogs){
      if(err){
        console.log('error');
      }else{
        res.render('dog', {dog:dogs})
      }
    })
  },
  create: function(req, res) {
    var dog = new Dog({name: req.body.name, breed: req.body.breed, age: req.body.age});
    dog.save(function(err){
      if(err){
        console.log('something went wrong');
      }else{
        console.log('successfully added a user!');
        res.redirect('/')
      }
    })
  },
  edit: function(req, res){
    Dog.findOne({_id:req.params.id}, function(err, dogs){
      if(err){
        console.log('error');
      }else{
        res.render('edit', {dog:dogs})
      }
    })
  },
  update: function(req, res){
    Dog.update({_id:req.params.id}, {name: req.body.name, breed: req.body.breed, age: req.body.age}, function(err, dogs){
      res.redirect('/')
    })
  },
  destroy: function(req, res){
    Dog.remove({_id: req.params.id}, function(err, dogs){
      res.redirect('/')
    })
  }
}
