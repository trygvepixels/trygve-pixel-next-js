import mongoose, { Schema, models } from "mongoose";

const FeatureProjectSchema = new Schema(
  {
    title:        { type: String, required: true, trim: true, maxlength: 140 },
    slug:         { type: String, required: true, trim: true, unique: true },
    client:       { type: String, default: "", trim: true },
    year:         { type: Number },
    tags:         { type: [String], default: [] },

    // Media
    coverImage:   { type: String, default: "" },     // hero/thumbnail
    mediaType:    { type: String, enum: ["image", "video"], default: "image" },
    mediaUrl:     { type: String, default: "" },     // mp4/webm for hover-preview, optional
    galleryImages:{ type: [String], default: [] },

    // Copy & links
    blurb:        { type: String, default: "", maxlength: 300 },
    description:  { type: String, default: "" },     // long form (md/html/plain)
    caseStudyUrl: { type: String, default: "" },
    liveUrl:      { type: String, default: "" },
    dribbbleUrl:  { type: String, default: "" },
    awwwardsUrl:  { type: String, default: "" },

    // Presentation
    accentColor:  { type: String, default: "#7C5CFF" },
    order:        { type: Number, default: 100 },    // lower = earlier
    featured:     { type: Boolean, default: true },

    // Optional stats (e.g., “+120% conversion”)
    stats: [{
      label: { type: String, trim: true },
      value: { type: String, trim: true },
    }],
  },
  { timestamps: true }
);

export default models.FeatureProject || mongoose.model("FeatureProject", FeatureProjectSchema);