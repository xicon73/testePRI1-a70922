var Pubs = require('../models/pubs')

//listar todas as obras 
module.exports.listar = () => {
  return Pubs  
          .find({},
            {id: 1, title: 1, year: 1, type: 1})
          .exec()
}

module.exports.filtrarId = i => {
    return Pubs
            .find({id: i})
            .exec()
} 

//obras de um certo periodo
module.exports.tipos = () => {
  return Pubs 
          .find({}, {type: 1})
          .distinct()
          .exec()
}

module.exports.filtrarTipo = t => {
    return Pubs
            .find({type: t})
            .exec()
}

module.exports.filtrarTipoAno = (t,a) => {
    return Pubs
            .find({type: t, year: a})
            .exec()
}

module.exports.filtrarNomeASC = () => {
    return Pubs
            .find({ "name": { "$exists": true } }).sort({'name': 1})
            .exec()
}

module.exports.filtrarNome = n => {
    return Pubs
            .find({author: n})
            .exec()
}