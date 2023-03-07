import express from "express";
import PostController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/comentario/:id", PostController.createComment);
router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);
router.get("/:id", PostController.getPost);
router.put("/", PostController.updatePost);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;