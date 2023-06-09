const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
//import route
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

const errorMiddleware = require("./middleware/error");
const order = require("./routes/orderRoute");

app.use(errorMiddleware);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.use("/api", express.Router());

app.use("/", product);
app.use("/", user);
app.use("/", order);

module.exports = app;
// app.listen(5000,()=>{
//     console.log("on port 5000!!!n");
// })
// const Schema = mongoose.Schema;
// mongoose.connect('mongodb://127.0.0.1:27017/myapp');
// const MyModel = mongoose.model('Test', new Schema({ name: String }));
// // Works
// console.log(MyModel);
