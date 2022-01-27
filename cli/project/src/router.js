import {createRouter,createWebHistory} from 'vue-router';
import Home from './components/Home.vue';

import UsersTemplate from './components/users/UsersTemplate.vue';
import Users from './components/users/Users.vue';
import ShowUser from './components/users/ShowUser';

import PostTemplate from './components/posts/PostTemplate.vue';
import Posts from './components/posts/Posts.vue';
import ShowPost from './components/posts/ShowPost';
import CreatePost from './components/posts/Create';

import About from './components/About.vue';
const routes = [
    {path:'/',name:'Home',component:Home},
    {path:'/users',component:UsersTemplate,children:[
        {path:'',component:Users,name:'Users'},
        {path:':id',component:ShowUser,name:'user'}
    ]},
    {path:'/posts',component:PostTemplate,children:[
        {path:'',component:Posts,name:'Posts'},
        {path:':id',component:ShowPost,name:'post'},
        {path:'create',component:CreatePost,name:'CreatePost'}
    ]},
    {path:'/about',name:'About',component:About},
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;