const express = require("express");
const env = require("./config/envConfig");
const connect = require("./config/db");
const cors = require("cors");
const port = env.PORT || 8800;
// database connection
connect();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"))
app.use("/api/v1/users", require("./routes/users"))
app.use("/api/v1/movies", require("./routes/movies"))
app.use("/api/v1/lists", require("./routes/lists"))

app.get("/", (req, res) => res.send("<h1>Welcome to MERN Stack Netflix Movie App</h1>"));

app.listen(port, () => {
    console.log(`Backend server is running! ${port}`);
});