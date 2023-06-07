const Shops = require('../models/Shop');
const Items = require('../models/Items');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const httpError = require('../helpers/httpError');

const getAllShops = async (req, res) => {
  const data = await Shops.find();
  if (!data) {
    throw httpError(400);
  }
  res.status(200).json(data);
};

const getShopItems = async (req, res) => {
  const { title } = req.params;

  const shop = await Shops.findOne({ title });
  const items = await Items.find({ owner: shop._id });

  res.status(200).json(items);
};


module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
  getShopItems: ctrlWrapper(getShopItems),
};
