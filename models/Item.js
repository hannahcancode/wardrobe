const mongoose = require('mongoose');

// destructuring
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
