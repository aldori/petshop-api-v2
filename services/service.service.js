import ServiceRepository from "../repositories/service.repository.js";

async function createService(service) {
  return await ServiceRepository.insertService(service);
}

async function getServices() {
  return await ServiceRepository.getServices();
}

async function getServicesByOwner(id) {
  return await ServiceRepository.getServicesByOwner(id);
}

async function getService(id) {
  return await ServiceRepository.getService(id);
}

async function deleteService(id) {
  return await ServiceRepository.deleteService(id);
}

async function updateService(service) {
  return await ServiceRepository.updateService(service);
}

export default {
  createService,
  getServices,
  getService,
  getServicesByOwner,
  deleteService,
  updateService,
};
