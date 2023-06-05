const express = require('express');
const ShopController = require('../../controllers/shop')

const router = express.Router();

router.get('/', ShopController.getAllShops);

router.get('/:title', ShopController.getShopItems)

module.exports = router;
