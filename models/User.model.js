const mongoose = require("mongoose")
const { normalizeTypes } = require('express/lib/utils');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isBlocked: {
    type: Boolean,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User