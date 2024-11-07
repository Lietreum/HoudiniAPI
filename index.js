// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:5173' }));

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Blog schema and model
// const blogSchema = new mongoose.Schema({
//   title: String,
//   imageUrl: String,
//   author: String,
//   authorUrl: String,
//   postUrl: String,
//   timestamp: { type: Date, default: Date.now }
// });
// const Blog = mongoose.model('Blog', blogSchema);

// // CRUD Endpoints

// // Create
// app.post('/api/blogs', async (req, res) => {
//   try {
//     const newBlog = new Blog(req.body);
//     await newBlog.save();
//     res.status(201).json(newBlog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create blog post' });
//   }
// });

// // Read All
// app.get('/api/blogs', async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blog posts' });
//   }
// });

// // Read One
// app.get('/api/blogs/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.status(404).json({ error: 'Blog post not found' });
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blog post' });
//   }
// });

// // Update
// app.put('/api/blogs/:id', async (req, res) => {
//   try {
//     const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedBlog) return res.status(404).json({ error: 'Blog post not found' });
//     res.json(updatedBlog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update blog post' });
//   }
// });

// // Delete
// app.delete('/api/blogs/:id', async (req, res) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//     if (!deletedBlog) return res.status(404).json({ error: 'Blog post not found' });
//     res.json(deletedBlog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete blog post' });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
