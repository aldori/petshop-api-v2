import Animal from "../models/animal.model.js";
import Service from "../models/service.model.js";

async function getServices() {
  try {
    return await Service.findAll();
  } catch (error) {
    throw error;
  }
}

async function getService(id) {
  try {
    return await Service.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function insertService(service) {
  try {
    return await Service.create(service);
  } catch (error) {
    throw error;
  }
}

async function deleteService(id) {
  try {
    await Service.destroy({
      where: {
        serviceId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateService(service) {
  try {
    await Service.update(service, {
      where: {
        serviceId: service.serviceId,
      },
    });
    return await getService(service.serviceId);
  } catch (error) {
    throw error;
  }
}

async function getServicesByOwner(idOwner) {
  try {
    const services = await Service.findAll({
      where: {
        '$animai.proprietario_id$': idOwner
      },
      include: {
        model: Animal,
        required: false,
      },
    });
    return services;
  } catch (error) {
    throw error;
  }
}
getServicesByOwner;

export default {
  getServices,
  getService,
  getServicesByOwner,
  insertService,
  deleteService,
  updateService,
};
