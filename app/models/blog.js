import mongoose from "mongoose";

// Define the schema for the Blog model
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

// Create the model if it doesn't exist already
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
