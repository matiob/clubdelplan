const EventModel = require("../models/Events")
const events = require("../utils/fakeEvents")
const mongoose = require("mongoose")
const CategoryModel = require("../models/Category")
const UserModel = require("../models/User")
const categories = require("../utils/categories")
const ComentModel = require("../models/Coments")
const coments = require("../utils/coments")

const seedDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://clubdelplan:clubdelplan123@clubdelplan.kf2p2.mongodb.net/clubdelplan"
    )

    const fakeUser = await UserModel.create({
      name: "clubdelplan",
      password: "Hola1234",
      email: "clubdelplan@gmail.com",
      city: "Plataforma 5",
    })

    for (const coment of coments) {
      coment.userName = fakeUser.name
    }
    const createdComents = await ComentModel.insertMany(coments)

    const createdCategories = await CategoryModel.insertMany(categories)
    for (const event of events) {
      event.eventOwner = fakeUser._id
      event.coments = createdComents
    }

    await EventModel.insertMany(events)

    console.log("seed finalizado")
    process.exit(0) // --> p que finalice el proceso
  } catch (error) {
    console.log(error)
  }
}

seedDb()
