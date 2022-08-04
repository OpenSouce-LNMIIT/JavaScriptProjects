const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

// Router
const router = require("./routes/router");

dotenv.config();

// Middlewares

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


// Setup the version
const version = 1;

app.use(`/v${version}`, router);

// Global 404 route
app.get("*", (req, res) => {
    res.status(404).json({
        "status": 404,
        "data": null,
        "message": "NOT_FOUND"
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on PORT ${process.env.PORT || 8080}`);
});
