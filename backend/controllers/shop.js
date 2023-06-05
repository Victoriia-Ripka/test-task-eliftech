const Shops = require('../models/shop');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const httpError = require('../helpers/httpError');

const getAllShops = async (req, res) => {
  const data = await Shops.find();
  if (!data) {
    throw httpError(400);
  }
  res.status(200).json(data);
};

const getShopItems = async (req, res) => {};

const addItemToCart = async (req, res) => {};

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
  getShopItems: ctrlWrapper(getShopItems),
  addItemToCart: ctrlWrapper(addItemToCart),
};
