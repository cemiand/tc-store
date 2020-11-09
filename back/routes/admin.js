const router = require("express").Router();


function authRole(role) {
    return (req, res, next) => {
            if((req.user.accessLevel !== role)) {
              res.status(401)
              return res.send("Not allowed")
           }
            next()
    }
}


router.route("/")
    .get(authRole("admin"))
   
//POR QUE NO FUNCIONA EN UN SOLO MODULE.EXPORTS?
/* module.exports = router;
module.exports = authRole; */

module.exports = {router, authRole}