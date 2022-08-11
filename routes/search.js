const express = require('express');
const fs = require('fs');
const path = require('path');

const searchController = require('../controller/search');

const router = express.Router();

router.get('/',searchController.getSearchData);
// router.post('/', searchController.postSearchData);

module.exports = router;