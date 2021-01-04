import { Router } from 'express';
import HealthController from './controller/health.controller';
import AutoController from './controller/auto.controller';

const routes = Router();

// HEALTH
routes.get('/health', HealthController.discovery);

// AUTO
routes.get('/auto', AutoController.brands);
routes.get('/auto/vehicles/:brandId', AutoController.vehicles);
routes.get('/auto/vehicles/:brandId/car/:vehicleId', AutoController.vehicleYears);
routes.get('/auto/vehicles/:brandId/car/:vehicleId/year/:year', AutoController.vehicle);


export default routes;