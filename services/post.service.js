import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}

async function createComment(comment, id) {
  return await PostRepository.createComment(comment, id);
}

async function getPost(id) {
  return await PostRepository.getPost(id);
}

async function updatePost(post) {
  return await PostRepository.updatePost(post);
}

export default {
  createPost,
  getPosts,
  getPost,
  createComment,
  updatePost,
};
