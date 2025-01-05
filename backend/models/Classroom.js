const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: {
    type: [Number],
    required: true,
  },
  connectedTo: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('Classroom', classroomSchema);
