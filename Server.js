const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");
//const Student = require("./models/Student");
const studentRoutes = require("./routes/students");
const path = require("path");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "frontpage.html"));
});

    app.use("/api/students", studentRoutes);
    app.use("/api/auth", authRoutes);

    app.use((req, res) => {
        res.status(404).json({ error: "Route not found" });
    });

    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`);
    });