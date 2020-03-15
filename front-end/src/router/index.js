import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Mainpage",
    component: () =>
        import ("../views/MainPage/MainPage.vue")
}];

const router = new VueRouter({
    routes
});

export default router;