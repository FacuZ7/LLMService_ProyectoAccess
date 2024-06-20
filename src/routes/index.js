//maestro de rutas
import {Router} from 'express';
import chatRoutes from './chatRoutes.js';

const routerMaster = Router()  

routerMaster.use('/chat', chatRoutes);

routerMaster.use('/', (req, res)=>{
    res.json('use the following paths: /chat')
});

export default routerMaster
