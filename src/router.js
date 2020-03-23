import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import TaskDashboard from './components/task-dashboard/TaskDashboard'
import IndividualTask from './components/individual-task/IndividualTask'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/taskdashboard',
            name: 'taskdashboard',
            component: TaskDashboard
        },        
        {
            path: '/task/:taskid',
            name: 'task',
            component: IndividualTask,
            props: true
        },

    ]
})