const mongoose = require('mongoose')
require('mongoose-type-url')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ChapterModel = new Schema({
  title: {
    type: String,
    required: [true, 'Chapter title is required'],
    trim: true,
  },
  slugName: {
    type: String,
    required: [true, 'Slug name is required'],
    trim: true,
    unique: [true, 'Slug name must be unique']
  },
  noOfUpvotes: { type: Number, default: 0 },
  noOfDownvotes: { type: Number, default: 0 },
  book: { type: ObjectId, ref: 'Book' },
  comments: [
    { type: ObjectId, ref: 'Comment' }
  ],
  coverPhoto: {
    data: Buffer,
    contentType: String
  },
  content: {
    type: String,
    required: [true, 'Chapter content is missing'],
    trim: true,
  },
  index: { type: Number, default: 1 },
  viewsCount: { type: Number, default: 0 },
  sharesCount: { type: Number, default: 0 },
  published: { type: Boolean, default: false },
  shareLink: mongoose.SchemaTypes.Url
})

module.exports = mongoose.model('Chapter', ChapterModel)