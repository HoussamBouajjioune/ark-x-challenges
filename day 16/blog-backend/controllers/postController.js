const Post = require('../classes/Post');

// GET /posts
function getPosts(req, res) {
  const posts = Post.getAll();
  res.json(posts);
}

// GET /posts/:id
function getPostById(req, res) {
  const id = Number(req.params.id);
  const post = Post.findById(id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
}


// POST /posts
function addPost(req, res) {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and content required' });

  const newPost = new Post(title, content);
  newPost.save();
  res.status(201).json(newPost);
}

// PUT /posts/:id
function updatePost(req, res) {
  const id = Number(req.params.id);
  const updated = Post.update(id, req.body);
  if (!updated) return res.status(404).json({ error: 'Post not found' });
  res.json(updated);
}

// DELETE /posts/:id
function deletePost(req, res) {
  const id = Number(req.params.id);
  const deleted = Post.delete(id);
  if (!deleted) return res.status(404).json({ error: 'Post not found' });
  res.json({ message: 'Post deleted' });
}

module.exports = { getPosts, addPost, updatePost, deletePost ,getPostById };
