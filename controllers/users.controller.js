const User = require("../models/User.model")
module.exports.userController = {
  postUsers: async (req, res) => {
    try {
      const users = await User.create({
        name: req.body.name,
        isBlocked: req.body.isBlocked
      })
      res.json("чел добавлен")
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
  deleteUsers: async (req, res) => {
    try {
      const users = await User.findByIdAndRemove(req.params.id)
      res.json("чел удален")
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
  patchUsers: async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isBlocked: req.body.isBlocked
      })
      res.json("ник изменен")
    } catch (ERROR) {
      res.json(ERROR)
    }
  },
}