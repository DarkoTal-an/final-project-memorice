import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postsRoutes from "./routes/postsRoutes.js";
import dotenv from "dotenv";

//connecting the server

const app = express();
dotenv.config(); // .env hiding a key or URL

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//for heroku deployment we enable it to run it when it's deployed!
// app.get("/", function(req, res) {
//   res.send("Hallo Welt ;-)")
// })

//http://localhost:5000/post

app.use("/post", postsRoutes);

//DB URL-we saved it in .env file and processes.env it to connection

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect...`));

/** ERROR HANDLING */
app.use(function (req, res, next) {
  const error = new Error("Looks like something broke...");
  error.status = 400;
  next(error);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
//application export path
// module.exports = app;-this doesn`t work cause we are NOT using "require"
export default app;
