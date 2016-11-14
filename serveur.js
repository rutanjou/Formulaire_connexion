var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var name = "jutan2012";
var mdp = "jutan1010";
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
	res.send('lalala');
});
app.post('/login',function(req,res){
	var post = req.body;
	if(post.username === name && post.password === mdp){
		console.log(post);
	res.sendFile(__dirname + '/public/connecter.html');
	}
	else{res.send('Erreur!')

	}
	
});
app.listen(6100,function(){
	console.log("Hello World on 6100");
});
