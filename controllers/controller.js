require('mongoose');
const Item = require('../models/Item');

exports.getItems = (req, res) => {
  Item.find()
    .then((items) => {
      res.render('index', {
        title: 'WARDROBE',
        items: items,
      });
    });
};

exports.newItem = (req, res) => {
  const item = new Item();
  console.log(req);
  item.name = req.body.item_name;
  item.description = req.body.item_description;
  item.type = req.body.item_type;
  item.imageUrl = req.body.item_imageUrl;
  item.save()
    .then(() => {
      res.redirect('/');
    });
};
