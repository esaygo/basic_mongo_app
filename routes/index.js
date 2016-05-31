module.exports = function(app){
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
mongoose.model('User', UserSchema);// setting this Schema in our Models as 'User'
var User = mongoose.model('User'); // retrieving this Schema from our Models, named User

  app.get('/', function (req,res) {
    //retrieve all users matching {}
    User.find({}, function(err, users) {
      if(err) {
        res.render('index', {message: "there was an error"});
      } else {
        console.log("users list", users);
        res.render('index', {users: users});
      }
    });

  });

  app.post('/users', function(req,res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({
                        name: req.body.name,
                        age:  req.body.age
    });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a user!');
      }
    });
    res.redirect('/');
  });

} //end of module.exports

//more examples od db queries:
// User.find({name: 'Jessica'}, function(err,users) {
  // Retrieve an array of users matching the name. Even if 1 record is found, the result will be an array the size of 1, with 1 object inside. (Notice, if we are expecting to retrieve one record, we may want to use findOne and retrieve the object as oppose to an array the size of one.
// })
// ...create a new instance of the User Schema and save it to the DB.
      // var userInstance = new User();
      // userInstance.name = 'Adriana';
      // userInstance.age = 29;
      // userInstance.save(function(err) {
      // });
// ...delete all records of the User Model
      // User.remove({}, function(err) {
      // });
// ...delete 1 record by a certain key/vaue.
      // User.remove({id: }, function(err){
      // });
// ...update any records that match the query
      // User.update({name: 'Adriana'}, {name: "Adrianna"}, function(err) {
      // });
