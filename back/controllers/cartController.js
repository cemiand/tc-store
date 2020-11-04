const {Product,User} = require("../db/models")


const cartController = {
    addProduct(req,res){
        User.findById(req.user.id)//CHEQUEAR SI ES _ID
         .then(user =>{
             Product.findById(req.body.id)//CHEQUEAR SI ES _ID
             .then(product =>{
                 user.cart.push(product)
                 user.save()
             })
         })
    },
    deleteProduct(req,res){

    },
    updateProduct(req,res){
        
    }
}