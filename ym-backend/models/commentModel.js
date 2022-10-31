const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const CommentModel = new Schema({
  chapter: { type: ObjectId, ref: 'Chapter' },
  content: {
    type: String,
    required: [true, 'Comment content is missing'],
    trim: true,
    maxLength: [500, 'Maximum number of characters is 500'],
  },
  seen: { type: Boolean, default: false }
})

module.exports = mongoose.model('Comment', CommentModel)