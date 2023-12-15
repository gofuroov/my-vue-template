import {createRouter, createWebHistory} from 'vue-router'
import loadLayoutMiddleware from "@/router/middleware/layout.js";
import routes from './routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(loadLayoutMiddleware);
export default router