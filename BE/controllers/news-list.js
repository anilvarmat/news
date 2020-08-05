const express = require("express"),
    router = express.Router(),
    axios = require("axios"),
    bodyParser = require("body-parser"),
    { BASE_URL } = require('../constants/news-api');
router.use(
    bodyParser.urlencoded({
        limit: "5mb",
        extended: true
    })
);
router.use(bodyParser.json({ limit: "5mb" }));

router.get("/", async function (req, res) {
    const country = req.query.country;
    const apiKey = process.env.API_KEY;
    let response = { success: false };
    try {
        const news = await axios.get(`${BASE_URL}?country=${country}&apiKey=${apiKey}`);
        response.success = true;
        response.news = news.data;
    } catch (error) {
        response.success = false;
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.json({ ...response });
});

module.exports = router;