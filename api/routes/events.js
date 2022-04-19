const express = require("express")
const router = express.Router()
const EventsControllers = require("../controllers/eventsController")
const checkJWT = require("../middlewares/jwt")

//RUTA PARA BUSCAR EVENTOS
router.get("/", EventsControllers.getAllEvents)
//RUTA PARA BUSCAR EVENTOS PRIVADOS DE UN USUARIO
router.get("/me", checkJWT, EventsControllers.getMyEvents)
//RUTA PARA BUSCAR EVENTOS PASADOS DEL OWNER Y MOSTRAR EN SCREEN CARD
router.get("/done/:ownerid", EventsControllers.getOwnerPastEvents)
//RUTA PARA BUSCAR EVENTOS PASADOS DE UN USUARIO
router.get("/done", checkJWT, EventsControllers.getMyPastEvents)
//RUTA PARA BUSCAR EVENTOS FUTUROS AL QUE ESTÁ INVITADO EL USER
router.get("/invitation", checkJWT, EventsControllers.getMyEventsInvitations)
//RUTA PARA BUSCAR EVENTOS A LOS QUE ASISTIRÁ EL USER
router.get("/attend", checkJWT, EventsControllers.getMyEventsWillAttend)
//RUTA PARA CONFIRMAR EVENTO AL QUE ASISTIRÁ EL USER
router.put("/confirm/:id", checkJWT, EventsControllers.getMyUpdateEventWillAttend)
//RUTA PARA BUSCAR UN EVENTO
router.get("/:id", EventsControllers.getEvent)
//RUTA PARA BUSCAR EVENTOS POR CATEGORIAS
router.get("/category/:name", EventsControllers.eventByCategory)
//RUTA PARA EDITAR UN EVENTO
// router.put("/:id", checkJWT, EventsControllers.updateEvent)
//RUTA PARA AGREGAR UN EVENTO
router.post("/add", checkJWT, EventsControllers.addEvent)
//RUTA PARA ELIMINAR UN EVENTO
router.delete("/:id", checkJWT, EventsControllers.deleteEvent)

module.exports = router
