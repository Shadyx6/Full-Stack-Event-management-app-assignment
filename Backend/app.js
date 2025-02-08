const express = require("express") 
const app = express();
const dotenv = require("dotenv") 
const cors = require("cors")
const authRoutes = require("./routes/authRouter.js") 
const eventRoutes = require("./routes/eventRouter.js") 
dotenv.config();
const db = require("./config/mongooseConfig.js")
const multer = require("multer")
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
    

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
