/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var dependenciesRouter = express.Router();
  var id = 5;

  dependenciesRouter.get('/', function(req, res) {
    res.send({
      'dependencies': []
    });
  });

  dependenciesRouter.post('/', function(req, res) {

    res.send({
      dependency: {
        id: ++id
      }
    });
  });

  dependenciesRouter.get('/:id', function(req, res) {
    var dependencies = {
      1: 'Dependency #1',
      2: 'Dependency #2',
      3: 'Dependency #3',
      4: 'Dependency #4',
      5: 'Dependency #5'
    };

    res.send({
      'dependencies': {
        id: req.params.id,
        name: dependencies[req.params.id]
      }
    });
  });

  dependenciesRouter.put('/:id', function(req, res) {
    res.send({
      'dependencies': {
        id: req.params.id
      }
    });
  });

  dependenciesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/dependencies', require('body-parser').json());
  app.use('/api/dependencies', dependenciesRouter);
};
