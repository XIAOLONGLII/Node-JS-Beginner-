var express =require("express");
var app=express();

app.use(express.static(__dirname + '/Hackathon'))
app.get('/',function(req, res){


  res.sendFile(__dirname+'/index.html');



});
app.get('/message', function(req,res){
  //res.send('hello Jake ,I am xiaolong, how are you? Hahaha, Have a great even');
  res.sendFile(__dirname+ '/11.jpg')

});



app.listen(5000);
console.log("Running on port 5000");
