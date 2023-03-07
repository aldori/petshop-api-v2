import { connect } from "./mongo.db.js";
import PostSchema from "../schema/post.schema.js";

async function getPosts() {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    const query = Post.find({});
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function getPost(postId) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    const query = Post.findOne({ _id: postId });
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function createPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    post = new Post(post);
    await post.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createComment(comment, postId) {
  try {
    console.log(postId, comment);
    const post = await getPost(postId);
    post.comentarios.push(comment);
    console.log(post);
    await updatePost(post);
  } catch (error) {
    throw error;
  }
}

async function updatePost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("Post", PostSchema);
    console.log(post)
    await Post.findOneAndUpdate({ _id: post._id }, post);
  } catch (error) {
    throw error;
  }
}

export default {
  getPost,
  getPosts,
  createComment,
  createPost,
  updatePost,
};
