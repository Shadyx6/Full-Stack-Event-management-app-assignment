const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRouter.js");
const eventRoutes = require("./routes/eventRouter.js");
const db = require("./config/mongooseConfig.js");

dotenv.config();
const app = express();


app.use(
    cors({
      origin: ["https://event-management-app-swart.vercel.app", "http://localhost:5173"],
      credentials: true,
    })
  );

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
  });
}

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
