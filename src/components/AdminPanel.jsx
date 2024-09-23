import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";  // Import the CSS file

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, author, image, content };
    if (editingId) {
      await axios.put(`http://localhost:5000/api/blogs/${editingId}`, blogData);
      setMessage("Blog updated successfully.");
    } else {
      await axios.post("http://localhost:5000/api/blogs", blogData);
      setMessage("Blog created successfully.");
    }
    resetForm();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setTitle(blog.title);
    setAuthor(blog.author);
    setImage(blog.image);
    setContent(blog.content);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setMessage("Blog deleted successfully.");
      fetchBlogs();
    }
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setImage("");
    setContent("");
    setEditingId(null);
  };

  return (
    <div className="admin-panel"> {/* Apply CSS class here */}
      <h1>Admin Panel</h1>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">{editingId ? "Update Blog" : "Add Blog"}</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <button onClick={() => handleEdit(blog)}>Edit</button>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
