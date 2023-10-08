import { Router } from 'express';
import factoryRouter from './factoryRouter';

const apiRouter = Router();

apiRouter.use('/api/factories', factoryRouter);

export default apiRouter;
