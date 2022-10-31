const mongoose = require('mongoose')
require('mongoose-type-url')
const { isEmail } = require('validator')

const { Schema } = mongoose

const AdminModel = new Schema({
  username: {
    type: String,
    required: [true, 'Admin username is required'],
    trim: true,
  },
  birthDate: { type: Date, default: '2002-06-22' },
  bio: {
    type: String,
    required: [true, 'Admin bio is required'],
    trim: true,
    unique: [true, 'Do you know this bio already exists?']
  },
  email: {
    type: String,
    required: [true, 'Admin email is required'],
    trim: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email address'],
    unique: [true, 'Admin with given email already exists']
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  socialLinks: [{ type: mongoose.SchemaTypes.Url }]
})

module.exports = mongoose.model('Admin', AdminModel)