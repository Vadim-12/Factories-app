import { Router } from 'express';
import FactoryController from '../controllers/factoryController';

const factoryRouter = Router();

factoryRouter.get('/', FactoryController.getAll);
factoryRouter.post('/', FactoryController.create);
factoryRouter.delete('/:id', FactoryController.findByIdAndDelete);
factoryRouter.put('/:id', FactoryController.findByIdAndUpdate);

export default factoryRouter;
