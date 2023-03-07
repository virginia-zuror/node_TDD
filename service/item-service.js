const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: String },
  color: { type: String },
});
const Item = mongoose.model('Item', ItemSchema);

const store = async ({ name, description, price, color }) => {
  const item = new Item({
    name,
    description,
    price,
    color,
  });
  await item.save();
  return item;
};

module.exports = store;
