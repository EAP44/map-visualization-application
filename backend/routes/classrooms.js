const express = require("express");
const router = express.Router();
const classroomsController = require("../controllers/classroomsController");

router.get("/", classroomsController.getClassrooms);

router.post("/shortest-path", classroomsController.getShortestPath);

module.exports = router;
