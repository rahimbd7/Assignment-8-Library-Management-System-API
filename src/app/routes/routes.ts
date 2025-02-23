import express from 'express';
import path from 'path';


const router = express.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: ''
    }
    
]

moduleRoutes.forEach(route => {
    router.use(route.path, route?.route)
})

export default router;