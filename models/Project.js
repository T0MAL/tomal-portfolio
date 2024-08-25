import mongoose, { Schema, models } from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  technologies: {
    type: [String], // Array of strings to store technology tags
    validate: [arrayLimit, 'At least one technology should be specified.'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageLink: {
    type: String,
    trim: true,
  },
  githubLink: {
    type: String,
    trim: true,
  },
  deployedLink: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, 
});


function arrayLimit(val) {
  return !val || val.length > 0; 
}

const Project =  models.Project ||  mongoose.model('Project', projectSchema);

export default Project;
