var express = require('express');
const fruit_controlers= require('../controllers/fruit');
var router = express.Router();
/* GET fruits */
router.get('/', fruit_controlers.fruit_view_all_Page );
/* GET detail fruit page */
router.get('/detail', fruit_controlers.fruit_view_one_Page);
/* GET create fruit page */
router.get('/create', fruit_controlers.fruit_create_Page);
/* GET create update page */
router.get('/update', fruit_controlers.fruit_update_Page);
/* GET delete fruit page */
router.get('/delete', fruit_controlers.fruit_delete_Page);
module.exports = router;