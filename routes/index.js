const express = require('express');
const router = express.Router();

const homeController =  require("../controllers/home-controller.js")
const authController =  require("../controllers/authentication-controller.js")

router.get('/', homeController.index);
router.post('/', homeController.create);
router.get('/:id', homeController.show);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.destroy);

module.exports = router;
