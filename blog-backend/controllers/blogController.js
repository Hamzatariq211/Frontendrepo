const Blog = require("../models/Blog");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { author, title, content, image } = req.body;
    const blog = new Blog({ author, title, content, image });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single blog by ID
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const { author, title, content, image } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { author, title, content, image },
      { new: true }
    );
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
