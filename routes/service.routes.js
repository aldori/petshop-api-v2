import express from "express";
import ServiceController from "../controllers/service.controller.js";

const router = express.Router();

router.post("/", ServiceController.createService);
router.get("/", ServiceController.getServices);
router.get("/:id", ServiceController.getService);
router.get("/proprietario/:id", ServiceController.getServicesByOwner);
router.delete("/:id", ServiceController.deleteService);
router.put("/", ServiceController.updateService);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message });    
});

export default router;