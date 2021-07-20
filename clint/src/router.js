import {
    createWebHistory,
    createRouter
} from 'vue-router';
import GetStudent from './components/GetStudent.vue';
import AddStudent from './components/AddStudent.vue';
import EditStudent from './components/EditStudent.vue'


const routes = [{
    name: "GetStudent",
    path: "/",
    component: GetStudent
}, {
    name: "AddStudent",
    path: "/add-student",
    component: AddStudent
}, {
    name: "/EditStudent",
    path: "/edit-student/:id",
    component: EditStudent
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;