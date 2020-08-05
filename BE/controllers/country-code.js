const express = require("express"),
    router = express.Router(),
    bodyParser = require("body-parser"),
    { COUNTRY_CODES } = require('../constants/news-api');
router.use(
    bodyParser.urlencoded({
        limit: "5mb",
        extended: true
    })
);
router.use(bodyParser.json({ limit: "5mb" }));

router.get("/", async function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.json({ COUNTRY_CODES });
});

module.exports = router;