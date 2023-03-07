import ServiceService from "../services/service.service.js";

async function createService(req, res, next) {
  try {
    let service = req.body;
    if (!service.descricao || !service.valor || !service.animalId) {
      throw new Error("Descrição, Valor e ID do Animal são obrigatórios.");
    }
    service = await ServiceService.createService(service);
    res.send(service);
    logger.info(`POST /service - ${JSON.stringify(service)}`);
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    res.send(await ServiceService.getServices());
    logger.info("GET /service");
  } catch (err) {
    next(err);
  }
}

async function getService(req, res, next) {
  try {
    res.send(await ServiceService.getService(req.params.id));
    logger.info("GET /service/:id");
  } catch (err) {
    next(err);
  }
}

async function getServicesByOwner(req, res, next) {
  try {
    res.send(await ServiceService.getServicesByOwner(req.params.id));
    logger.info("GET /service/proprietario/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteService(req, res, next) {
  try {
    await ServiceService.deleteService(req.params.id);
    res.end();
    logger.info(`DELETE /service/:id - ${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function updateService(req, res, next) {
  try {
    const service = req.body;
    if (
      !service.serviceId ||
      !service.descricao ||
      !service.valor ||
      !service.animalId
    ) {
      throw new Error("Id, Nome, Tipo e ID do Proprietário são obrigatórios.");
    }
    res.send(await ServiceService.updateService(service));
    logger.info(`PUT /service - ${JSON.stringify(service)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createService,
  getServices,
  getService,
  getServicesByOwner,
  deleteService,
  updateService,
};
