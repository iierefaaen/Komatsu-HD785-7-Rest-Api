/*
    - This is an API app
    - using expressjs and mysql
    @require express
    @require mysql

    - author: iierefaaen@gmail.com
    - github.com/iierefaaen
*/

const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

// import route
const { getSearchData, getData, indexPage } = require("./controllers/controller")


// Setup port
const PORT = process.env.PORT || 2121

// route
app.use("/api/part-number/v1/785-part-number/search/:query", getSearchData)
app.use("/api/part-number/v1/785-part-number",  getData)
app.use("/", indexPage)


// listening express server
app.listen(PORT, () => {
    console.log(`Express server running on port : ${PORT} ...`);
})
