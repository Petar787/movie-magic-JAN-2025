import { Router } from 'express';

import homeController from './controllers/homeController.js';
import movieController from './controllers/moviecontroler.js';

const routes = Router();

routes.use(homeController);
routes.use(movieController);


routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;