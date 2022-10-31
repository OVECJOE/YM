const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const NotificationModel = new Schema({
  message: {
    type: String,
    required: [true, 'Notification content is missing'],
    trim: true
  },
  private: { type: Boolean, default: false },
  viewed: { type: Boolean, default: false }
})

module.exports = mongoose.model('Notification', NotificationModel)