require('mongoose');
const Item = require('../models/Item');

exports.getItems = (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    });
};

exports.getSingleItem = (req, res) => {
  Item.findOne({ _id: req.params.id })
    .then((item) => {
      res.json(item);
    });
};

exports.createItem = (req, res) => {
  const item = new Item();
  item.imageUrl = req.query.imageUrl;
  item.save()
    .then((items) => {
      res.json(items);
    });
};

exports.editItems = (req, res) => {
  const url = req.query.newURL;
  console.log(url);
  Item.findOneAndUpdate({ _id: req.params.id }, { imageUrl: url }, {
    new: true,
  })
  .then((items) => {
    res.json(items);
  });
};

exports.deleteItems = (req, res) => {
  Item.findOneAndRemove({ _id: req.params.id })
  .then((items) => {
    res.json(items);
  });
};
