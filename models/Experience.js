import mongoose, { Schema, models } from "mongoose";

const experienceSchema = new Schema(
  {
    company: {
      type: String,
    },
    role: {
      type: String,
    },
    timeline: {
      type: String,
    },
    location: {
      type: String,
    },
    details: {
      type: [String], // Array of strings
    },
  },
  { timestamps: true }
);

const Experience = models.Experience || mongoose.model("Experience", experienceSchema);
export default Experience;
