const fs = require('fs');
const path = './posts.json';

// Get all posts
function getAllPosts() {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
}

// Get a single post by ID
function getPostById(id) {
  const posts = getAllPosts();
  return posts.find(post => post.id === id);
}

// Create a new post
function createPost(post) {
  const posts = getAllPosts();
  post.id = Date.now(); // simple unique id
  posts.push(post);
  fs.writeFileSync(path, JSON.stringify(posts, null, 2));
  return post;
}

// Update a post by ID
function updatePost(id, updatedData) {
  const posts = getAllPosts();
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) return null; // Post not found

  posts[index] = { ...posts[index], ...updatedData };
  fs.writeFileSync(path, JSON.stringify(posts, null, 2));
  return posts[index];
}

// Delete a post by ID
function deletePost(id) {
  let posts = getAllPosts();
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) return false; // Post not found

  posts.splice(index, 1);
  fs.writeFileSync(path, JSON.stringify(posts, null, 2));
  return true;
}

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
