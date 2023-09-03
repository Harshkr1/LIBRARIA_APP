const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  blogContent: { type: String, required: true }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
