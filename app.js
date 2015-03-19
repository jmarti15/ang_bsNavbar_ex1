/*jslint node: true */
"use strict";

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require("path");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/clients', function(req, res){
    res.json( [{ codi:'121', nom:'cli1', tels:[ {tidx:'tel1', tnum:'653000111'}, {tidx:'tel2', tnum:'653000222'} ] },
               { codi:'202', nom:'cli2', tels:[ {tidx:'tel3', tnum:'653000333'} ] },
               { codi:'222', nom:'cli2', tels:[] },
               { codi:'333', nom:'cli3', tels:[] },
               { codi:'444', nom:'cli4', tels:[] },
               { codi:'555', nom:'cli5', tels:[] },
               { codi:'666', nom:'cli6', tels:[] },
               { codi:'777', nom:'cli7', tels:[] },
               { codi:'888', nom:'cli8', tels:[] },
               { codi:'999', nom:'cli9', tels:[] }
              ] );
});

// Per tot el que no coincideix, mostra el home
app.get('*', function(req, res){
    res.sendFile(path.resolve(path.join(__dirname , 'public' , 'index.html')));
});

///////////////////////////////////////////////////////////////////////
var http = require('http');
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/* JBaylina
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
*/
///////////////////////////////////////////////////////////////////////