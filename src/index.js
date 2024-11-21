require('dotenv').config({ path: './.env' })
const { connectDB } = require("./db/index");
const app  = require("./app")

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `Server is running at port: ${process.env.PORT}`
            )
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed !!!", error)
    })
