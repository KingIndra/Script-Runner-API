const API_KEY = "sskvlsf749g7wcjc9u5y389tc347"

const authenticateKey = (req, res, next) => {
    let api_key = req.header("x-api-key")
    if(api_key == API_KEY) {
        next()
    } else {
        res.status(403).send({ 
            message: "You not allowed."
        })
    }
}

module.exports = {authenticateKey, API_KEY}
