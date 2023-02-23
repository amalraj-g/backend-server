import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js"

const app = express();
mongoose.set('strictQuery', true);

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URI = "mongodb://localhost:27017/";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI , { useNewUrlParser: true , useUnifiedTopology: true })
    .then( () =>  app.listen ( PORT , () => console.log(`server runs at port:${PORT}`)))
    .catch((error) => console.log(error.message))

























    /*import express from "express";
const app = express();
import mongoose  from "mongoose";
import userModel  from "./models/users";


app.use(express.json());
mongoose.set("strictQuery", false);

mongoose.connect( "mongodb://127.0.0.1:27017/" );

app.get("/getUsers", (req, res) => {
    userModel.find({}, (err, result) => { 
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });

});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(5000, () => {
    console.log("run  code successfully");
});*/

