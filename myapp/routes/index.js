var express = require('express');
var router = express.Router();

//let index = require('../controllers/index')
let landing=require('../controllers/landing')


//Get pages
router.get('/',landing.get_landing);
router.get('/zoom',landing.zoom);
router.get('/home',landing.home);
router.get('/amy',landing.amy);
router.get('/doug',landing.doug);
router.get('/john',landing.john);
router.get('/mark',landing.mark);
router.get('/map', landing.map);

//Post Votes
router.post('/amy', landing.amy_like);
router.post('/doug', landing.doug_like);
router.post('/mark', landing.mark_like);
router.post('/john', landing.john_like);


module.exports = router;
