const express = require("express");
const router = express.Router();
const { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } = require("../controllers/blogController");
const adminAuth = require("../middleware/adminAuth");

// Public routes
router.get("/", getBlogs);
router.get("/:id", getBlog);

// Admin-protected routes
router.post("/", adminAuth, createBlog);
router.put("/:id", adminAuth, updateBlog);
router.delete("/:id", adminAuth, deleteBlog);

module.exports = router;
