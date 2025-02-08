const express = require("express");
const protect = require("../middleware/auth.js");
const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require("../controllers/eventController.js");
const multer = require("multer");

const router = express.Router();

// ✅ Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post("/", protect, upload.single("image"), createEvent);
router.get("/", getEvents);
router.get("/:id", getEvent);
router.put("/:id", protect, updateEvent);
router.delete("/:id", protect, deleteEvent);

module.exports = router;
