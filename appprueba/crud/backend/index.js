let mongoose = require("mongoose");
let bodyparser = require("body-parser");
let cors = require("cors");
let express = require("express");
let miruta = require("./database")

mongoose.Promise = global.Promise;
mongoose.connect(
    miruta.principal,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(
    () => console.log("conexión a la base de datos lista"),
    (error) =console.log("error")
);




const app = express();
app.use(bodyparser.JSON());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cors());
const server = app.listen(8000,() => console.log("conectado con exito"));

const productAPI = require("./routes/product.route");
app.use("/productos", productAPI)