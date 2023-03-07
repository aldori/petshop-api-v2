import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
  try {
    console.log("chegou aqui");
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Título, Conteúdo são obrigatórios.");
    }
    post = await PostService.createPost(post);
    res.send(post);
    logger.info(`POST /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info("GET /post");
  } catch (err) {
    next(err);
  }
}

async function getPost(req, res, next) {
  try {
    res.send(await PostService.getPost(req.params.id));
    logger.info("GET /post/:id");
  } catch (err) {
    next(err);
  }
}

async function createComment(req, res, next) {
  try {
    const comment = req.body;
    if (!comment.nome || !comment.conteudo) {
      throw new Error("Nome, Conteúdo são obrigatórios.");
    }
    res.send(await PostService.createComment(comment, req.params.id));
    logger.info("GET /post/comentario/:id");
  } catch (err) {
    next(err);
  }
}

async function updatePost(req, res, next) {
  try {
    const post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Título, Conteúdo são obrigatórios.");
    }
    res.send(await PostService.updatePost(post));
    logger.info(`PUT /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
  getPost,
  updatePost,
  createComment,
};
