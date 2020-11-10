 const { Category } = require("../db/models");


const categoriesController ={
    findAll(req,res) {
        Category.find({})
          .then(category => res.send(category))
          .catch(err => {
            res.status(500).send(err)
          })
      },
    createCategory(req,res) {
        Category.create(req.body)
        .then(category => res.status(201).send(category))
        .catch(err => res.status(404).send(err))
      },
      updateCategory(req,res) {
        Category.findByIdAndUpdate(req.body.name, req.body)   // duda con el _id
        .then(category => res.status(204).send(category))
        .catch(err => res.status(500).send(err))
      },
      deleteCategory(req,res) {
        Category.deleteOne({name: req.body.name})
        .then(deletedCategory => res.send(deletedCategory))
        .catch(err => res.status(500).send(err))
      }
}

module.exports = categoriesController; 
