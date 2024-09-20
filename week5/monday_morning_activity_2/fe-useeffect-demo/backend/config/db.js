
const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev")
    console.log(`Connected to database`)

}

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI)

//     console.log(`MongoDB Connected: ${conn.connection.host}`)
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

module.exports = connectDB