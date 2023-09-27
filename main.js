const express = require('express')
const fs = require('fs')
const {authenticateKey} = require('./middleware')
const {sendOutput, extention} = require('./utils')

const app = express()
app.use(express.json())


app.get('/', authenticateKey, function(req, res) {
    const {user, language, code} = req.body
    const file_path = `files/${user}.${language}`

    fs.writeFileSync(file_path, code, err => {
        console.log(err)
    })
    sendOutput(res, file_path, extention(language))
})

app.listen(3000,function() {
    console.log("Server listening on port 3000")
})
