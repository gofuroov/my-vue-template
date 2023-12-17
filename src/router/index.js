import {createRouter, createWebHistory} from 'vue-router'
import loadLayoutMiddleware from "@/router/middleware/layout.js";
import metaMiddleware from "@/router/middleware/meta.js";
import routes from './routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(loadLayoutMiddleware);
router.beforeEach(metaMiddleware);

export default router
