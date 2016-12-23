var bodyParser = require('body-parser'),
       express = require('express'),
          cors = require('cors'),
            fs = require('fs');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
  fs.readFile('./names.json', function(err, data){
    response.json(JSON.parse(data))
  });
});

app.post('/', function(request, response){
  console.log("request.body", request.body);
  var newName = request.body;
  fs.readFile('./names.json', function(err, data){
    console.log('data', data);
    var parsed = JSON.parse(data);
    parsed.push(newName);
    fs.writeFile('./names.json', JSON.stringify(parsed), function(err){
      response.json({success: true})
    })
  })
})

app.listen(3000, function(){
  console.log("Listening on Port 3000!");
})
