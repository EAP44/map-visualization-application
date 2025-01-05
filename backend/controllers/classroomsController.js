const Classroom = require("../models/Classroom");
const { findShortestPath } = require("../algorithms/shortestPath");

exports.getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.json(classrooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getShortestPath = (req, res) => {
  const { start, end } = req.body;
  const path = findShortestPath(start, end);
  res.json(path);
};
