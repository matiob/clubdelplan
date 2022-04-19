const checkJWT = require("../middlewares/jwt")
const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/usersController")

//RUTA PARA TRAER TODOS LOS USUARIOS
router.get("/", checkJWT, UsersController.getAllUsers)
//RUTA PARA REGISTRAR UN USUARIO
router.post("/register", UsersController.registerUsers)
//RUTA PARA LOGIN
router.post("/login", UsersController.loginUsers)
//RUTA PARA LOGOUT
router.post("/logout", UsersController.logOutUsers)
//RUTA PARA DEVOLVER USUARIO LOGUEADO
router.get("/me", checkJWT, UsersController.getMe)
//RUTA PARA EDITAR UN USUARIO
router.put("/:id", UsersController.editUsers)
//RUTA PARA VER UN USUARIO PARTICULAR
router.get("/:id", checkJWT, UsersController.getOneUsers)
//RUTA PARA CHEQUEAR CON GOOGLE
router.post("/google", UsersController.getUserGoogle)

module.exports = router
