import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    nome: String,
    conteudo: String,
  },
  {
    collection: "posts",
  }
);

export default CommentSchema;
