const mongoose = require("mongoose")
const app = require("./app")

mongoose
    .connect(process.env.MONGODB_URI.replace("<password>", process.env.PASSWORD))
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
