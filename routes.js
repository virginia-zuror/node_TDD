const express = require('express');
const router = express.Router();
const store = require("./service/item-service");


router.post('/items', async (req, res) => {
  const { name, description, price, color } = req.body;

  const _id = '123';

    await store({name, description, price, color});
  res.status(201).json({ name, description, price, color, _id });
});

module.exports = router;
