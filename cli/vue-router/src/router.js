import { createRouter,createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Users from "./components/users/Users.vue";
import ShowUsers from "./components/users/ShowUsers.vue";
import About from "./components/About.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    { path: "/home", component: Home ,name:'home'},
    { path: "/users", component: Users ,children:[
        { path: ":id", component: Users,name:'users' }, 
        { path: "show", component: ShowUsers ,name:'ShowUsers'}, 
    ],
    // beforeEnter(to,from,next){
    //    // console.log(to,'to beforeEnter in users');
    //   //  console.log(from,'from beforeEnter in users');
    //    // next()
    // }
},
    { path: "/about", component: About,name:'about' },
    { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to,from,next)=>{
    console.log(to,'to beforeEnter in users global');
    console.log(from,'from beforeEnter in users global');
    if(to.name === 'ShowUsers'){
       // next({name:'users',params:{id:'22'}});
       alert('you will redirect to about component')
        next({name:'about'});
    }else{
        next()
    }
})

export default router;



