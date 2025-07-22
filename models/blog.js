const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, minlength: 5, required: true }
}, { _id: true });

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  author: String,
  url: {
    type: String,
    required: true,
    minlength: 1,
  },
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: [commentSchema]
});

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Blog', blogSchema);
