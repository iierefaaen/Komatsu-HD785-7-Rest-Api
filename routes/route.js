const express = require("express")
const { getData, getSearchData, indexPage } = require("../controllers/controller")
const router = express.Router()

// router.get("/", indexPage)
router.get("api/part-number/v1/785-part-number",getData)
router.get("api/part-number/v1/785-part-number/search/:query", getSearchData)
router.get("/", indexPage)

module.exports = router
