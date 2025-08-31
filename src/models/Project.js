 import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  type: { type: String, enum: ["Interior", "Architecture"] },
  location: String,
  timeline: String,
  tags: [String],
  cover: String,
  gallery: [String],
  description: String,
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);