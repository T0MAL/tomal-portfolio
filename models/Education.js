import mongoose, { Schema, models } from "mongoose";

const educationSchema = new Schema(
  {
    institution: {
      type: String
    },
    major: {
        type: String
    },
    gpa: {
        type: String
    },
    description: {
        type: String
    },
    timeline: {
        type: String
    },
    link: {
        type: String
    }

  },
  { timestamps: true }
);

const Education = models.Education || mongoose.model("Education", educationSchema);
export default Education;