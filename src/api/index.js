
var express = require('express');
var router = express.Router();

var Pubs = require('../../controllers/publicacoes')

router.get('/pubs', function(req, res){
  if(req.query.id){
    Pubs.filtrarId(req.query.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.type){
    Pubs.filtrarTipo(req.query.type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.type && req.query.year){
    Pubs.filtrarId(req.query.type, req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.author){
    Pubs.filtrarNome(req.query.author)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else {
  Pubs.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
})

router.get('/types', function(req, res){
    Pubs.tipos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))

})

router.get('/autores', function(req, res){
    Pubs.filtrarNomeASC()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))

})

module.exports = router;