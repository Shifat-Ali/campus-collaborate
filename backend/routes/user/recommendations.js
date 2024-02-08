const express = require('express');
const router = express.Router();
//get controller
const reco = require('../../controller/recommendationController');


router.get('/', reco.getAllRecommendations);
router.get('/:id', reco.getRecommendationById);
router.post('/', reco.createRecommendation);

module.exports = router;