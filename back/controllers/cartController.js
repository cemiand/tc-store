const { Product, User } = require("../db/models")

//CHEQUEAR LOS _ !!!

const cartController = {
    addProduct(req, res) {
        User.findById(req.user._id)//CHEQUEAR SI ES _ID
            .then(user => {
                Product.findById(req.body._id)//CHEQUEAR SI ES _ID
                    .then(product => {//VALIDAR QUE NO EXISTA EL PRODUCTO
                        user.cart.push({ product })
                        user.save()
                        res.status(201).send(user.cart)
                    })
            })
            .catch(err => res.status(500).send(err))
    },
    deleteProduct(req, res) {
        User.findById(req.user._id)//CHEQUEAR SI ES _ID
            .then(user => {
                user.cart = user.cart.filter(order => {
                    order.product._id !== req.body._id
                })
                user.save()
                res.status(200).send(user.cart)
            })
        res.status(200).send(user.cart)
            .catch(err => res.status(500).send(err))
    },
    updateProduct(req, res) {
        User.findById(req.user._id)//CHEQUEAR SI ES _ID
            .then(user => {
                user.cart.map(order => {
                    if (order.product._id == req.body._id) {
                        order.quantity = req.body.quantity
                    }
                })
                user.save()
                res.status(200).send(user.cart)
            })
            .catch(err => res.status(500).send(err))
    },
    showCart(req, res) {
        User.findById(req.user._id)//CHEQUEAR SI ES _ID
            .then(user => {
                console.log("CARRO", user.cart)
                res.send(user.cart)
            })
            .catch(err => res.status(500).send(err))
    }
}

module.exports = cartController;