const { Product, User } = require("../db/models")


const cartController = {
    addProduct(req, res) {
        User.findById(req.user.id)//CHEQUEAR SI ES _ID
            .then(user => {
                Product.findById(req.body.id)//CHEQUEAR SI ES _ID
                    .then(product => {//VALIDAR QUE NO EXISTA EL PRODUCTO
                        user.cart.push({ product })
                        user.save()
                        res.status(201).send(user.cart)
                    })
            })
            .catch(err => res.status(500).send(err))
    },
    deleteProduct(req, res) {
        User.findById(req.user.id)//CHEQUEAR SI ES _ID
            .then(user => {
                user.cart = user.cart.filter(order => {
                    order.product.id !== req.body.id
                })
                user.save()
                res.status(200).send(user.cart)
            })
        res.status(200).send(user.cart)
            .catch(err => res.status(500).send(err))
    },
    updateProduct(req, res) {
        User.findById(req.user.id)//CHEQUEAR SI ES _ID
            .then(user => {
                user.cart.map(order => {
                    if (order.product.id == req.body.id) {
                        order.quantity = req.body.quantity
                    }
                })
                user.save()
                res.status(200).send(user.cart)
            })
            .catch(err => res.status(500).send(err))
    }
}

module.exports = cartController;