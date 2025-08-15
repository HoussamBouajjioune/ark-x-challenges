const fs = require('fs');
const path = './posts.json';

class Post {
  constructor(title, content) {
    this.id = Date.now(); // unique ID
    this.title = title;
    this.content = content;
  }

  // Static method: get all posts
  static getAll() {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
  }

  // Static method: find a post by id
  static findById(id) {
    const posts = Post.getAll();
    return posts.find(post => post.id === id);
  }

  // Static method: save a new post
  save() {
    const posts = Post.getAll();
    posts.push(this);
    fs.writeFileSync(path, JSON.stringify(posts, null, 2));
    return this;
  }

  // Static method: update a post
  static update(id, updatedData) {
    const posts = Post.getAll();
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return null;

    posts[index] = { ...posts[index], ...updatedData };
    fs.writeFileSync(path, JSON.stringify(posts, null, 2));
    return posts[index];
  }

  // Static method: delete a post
  static delete(id) {
    let posts = Post.getAll();
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return false;

    posts.splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(posts, null, 2));
    return true;
  }
}

module.exports = Post;
