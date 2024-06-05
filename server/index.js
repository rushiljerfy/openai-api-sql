import express from "express";
import cors from "cors";

const app = express();

// for actual app for production, would have to write whitelist here (ip where you have frontend)
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello world from our API")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})