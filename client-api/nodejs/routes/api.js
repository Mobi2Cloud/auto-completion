var express = require('express');
var router = express.Router();

// for calling the Thrift service
var thrift = require('thrift');
var ThriftConnection = require('connection.js');
var ThriftTransports = require('transport.js');
var ThriftProtocols = require('protocol.js'); 
  
var autoCompletionService = require('AutoCompletionService.js');
var ttypes = require('autoCompletion_types.js');
  
var conn = ThriftConnection.createConnection('localhost', 9090, {
  transport: ThriftTransports.TBufferedTransport(),  
  protocol: ThriftProtocols.TBinaryProtocol()
});
  
conn.on('error', function(err) {
  console.log(err);
});

var client = ThriftConnection.createClient(autoCompletionService, conn);


// handlers for actions
router
.get('/', function(req, res) {
  res.json({message: 'hooray! welcome to our api'});
});

router
.get('/autocompletion?:prefix', function(req, res) {
  var prefix = req.query.prefix;
  if (typeof prefix == 'undefined' || prefix == null || prefix.trim().length == 0)  {
    res.json({message: 'prefix is null'});
    return;
  }
  
  console.log('prefix=' + prefix);
  client.query(prefix.trim(), function(err, response) {
  res.json({message:  response});
  });
})

.post('/autocompletion', function(req, res) {
  res.json({message: 'the post action is not implemented'});
});

module.exports = router;
