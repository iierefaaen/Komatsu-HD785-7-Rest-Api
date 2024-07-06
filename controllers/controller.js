const { connection } = require("../config/db_connect")

const getData = ( req, res ) => {
    connection.query("SELECT * FROM hd785_part_number",  ( error, rows ) => {
        if(!error) {
            res.status(200).json({
                "status": 200,
                "message": "success",
                "error": null,
                "length": rows.length,
                "data": rows
            })
        }
        else {
            console.log("Cannot get data : " + error)
        }
    })
}


// ------------------------------------------
const getSearchData = ( req, res ) => {
    let query = req.params["query"]
    connection.query(`SELECT * FROM hd785_part_number WHERE query LIKE '%${query}%'`, ( error, rows ) => {
        if ( !error ) {
            // show data certain id if the data exist
            if ( rows.length > 0 ){
                res.status(200).json({
                    "status": 200,
                    "message": "success",
                    "error": null,
                    "length": rows.length,
                    "data": rows
                })
            } else {
                res.status(404).json({
                    "status": 404,
                    "message": "Data Not Found",
                    "error": "Data Not Exist",
                    "data": null
                })
            }
        }
        else {
            console.log("Cannot get data : " + error);
        }
    })
}
// ---------------
const indexPage = ( req, res ) => {
    res.status(200).send("index page")
}


module.exports = {
    getData,
    getSearchData,
    indexPage
};
