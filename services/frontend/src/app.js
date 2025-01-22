const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRouter = require("./routes/index");
const mathRouter = require("./routes/math");
const unitConversionRouter = require("./routes/unit-conversion");

app.use("/", indexRouter);
app.use("/math", mathRouter);
app.use("/unit-conversion", unitConversionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
