const midllewares = {

    authenticate(req, res, next ) {

        const { authenticate } = req.headers
        const { user_id } = req.params

        if (!authenticate) return re.status(400).json({ message:"No Token"})
        if (authenticate !== user_id ) return res.status(400).json({ message: "Not allowed"})

        next()
    }
}

module.exports = midllewares