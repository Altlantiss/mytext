const express = require('express');
const router = express.Router();
const lan = require('../lib/lan.json');

router.route('/plus')
// .get(function(req,res,next) {
//
// });

.get( (req,res,next) => {

    let num1 = +req.query.num1;
    let num2 = +req.query.num2;
    let sum = num1 + num2;

    res.status(200).json({
        status : 1,
        message : lan.OK,
        data : sum
    })
});

module.exports = router;