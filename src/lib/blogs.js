// lib/blogs.js

import { connectDB } from "./mongodb";

 
export async function listBlogSlugs() {
  const db = await connectDB();
  // native driver example
  const docs = await db.collection('blogs').find({}, { projection: { slug: 1, _id: 0 }}).toArray();
  return docs.map(d => d.slug).filter(Boolean);
}

export async function getBlogBySlug(slug) {
  const db = await connectDB();
  return db.collection('blogs').findOne({ slug });
}

export async function listBlogs({ limit = 20 } = {}) {
  const db = await connectDB();
  return db.collection('blogs')
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();
}