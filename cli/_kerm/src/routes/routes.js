import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
const Order = () => import("../components/Order.vue");
const Child1 = () => import("../components/Child1.vue");

const routes = [
    { path: "/home", component: Home, children: [{ path: "children", name: "child1", component: Child1 }] },
    { path: "/order", name: "order", component: Order },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to, from, "before each");
    if (to.name == "order") {
        next({ name: "child1" });
    } else {
        next();
    }
});

export default router;
