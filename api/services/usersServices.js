const User = require("../models/User")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const { verifyHash } = require("../config/passwordHash")

class UsersService {
  static async serviceGetAllUsers(req) {
    try {
      const allUsers = await User.find({ _id: { $ne: req.user.id } })
      return allUsers
    } catch (err) {
      console.error(err)
    }
  }

  static async serviceResgisterUser(req) {
    try {
      const newUser = await User.create(req.body)
      return newUser
    } catch (err) {
      console.error(err)
    }
  }

  static async serviceLogin(req) {
    const { email, password } = req.body
    try {
      if (email && password) {
        let user = await User.findOne({ email })
        if (!user) {
          return { msg: "No such user found", user }
        }

        let verifyUser = await verifyHash(password, user.password, user.salt)

        if (!verifyUser) {
          return { msg: "Password is incorrect" }
        } else {
          let payload = { id: user._id }
          let token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "365d",
          })
          return { msg: "ok", token: token, user: user }
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  static async serviceGetMe(req) {
    try {
      const user = await User.findById(req.user.id)
      return user
    } catch (err) {
      console.error(err)
    }
  }

  static async serviceEditUser(req, next) {
    try {
      const { id } = req.params
      const user = await User.findByIdAndUpdate(id, req.body, { new: true })
      return user
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetOneUser(req, next) {
    try {
      const user = await User.findById(req.params.id)
      return user
    } catch (err) {
      next(err)
    }
  }

  static async serviceGetUserGoogle(req) {
    const { email } = req.body
    try {
      let user = await User.findOne({ email })
      return user
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = UsersService
