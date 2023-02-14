const express = require('express')
    const app = express()
const path = require('path')
// log the different requests to our server
const logger = require('morgan')
    app.use(logger('dev'))
// cross origin access
const cors = require('cors')
const { default: axios } = require('axios')
    app.use(cors({
        origin: "*"
    }));

// parse stringified objects (JSON)
app.use(express.json())

// server builder folder
app.use(express.static(path.join(__dirname, 'build)')))








app.get("/get_starships/:pageNum", async (req, res) => {
    let pageNum = req.params.pageNum
    let apiResponse = await axios(`https://swapi.dev/api/starships/?page=${pageNum}`)
    let results = apiResponse.data.results
    console.log(results);
    res.json(results)
});

// catch all route (must be last route)
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})