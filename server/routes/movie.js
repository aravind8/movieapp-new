var express = require('express');
var app = express.Router();
var Movie2=require('../model/movie');


app.post('/favmovie',function(req,res)
{
var movie=new Movie2();
movie.Title=req.body.Title;
movie.Year=req.body.Year;
movie.Poster=req.body.Poster;
movie.imdbID=req.body.imdbID;
movie.save(function(err){
if(err){
  res.send(err);
}
else
  {
    res.send('movie saved');

  }

});
});

app.get('/Fav',function(req,res,next)
{
Movie2.find({},function(err,docs){
res.json(docs);
});
});


app.delete('/unfav',function(req,res,next)
{
Movie2.findOneAndRemove({ Year: req.body.Year }, function(err) {
if (err) {
  res.send(err);
}
else{
  res.send('User deleted');
}

});
});


app.put('/update',function(req,res,next)
{
Movie2.findOneAndUpdate({imdbID: req.body.imdbID },{ Title: req.body.t},function(err, user) {
if(err)
res.send(err);
else {
  res.send("updated sucessfully");
  console.log("updated");
}

});
});


module.exports = app;
