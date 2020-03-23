<template>
    <div>
        <MainHeader />

        <div>
            <v-btn outlined 
            small color="primary" 
            style="margin: 15px; border-color: rgba(223, 9, 226, 0.17); color: #974aa5; font-size: 0.7em"
            v-on:click="showCreationInfo()">
                Steps to start tasking <v-icon>mdi-star-three-points-outline</v-icon>
            </v-btn>
        </div>

        <transition name="alert-in" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
            <p v-if="showCreationInf">
                <b>Process: </b> Yeyy! Its very simple. You start creating task in the box below by hitting enter. You can even enter the subtasks for each task you created. Note: Each task can only contain 7 subtasks. Also you can tag reminder to any task you want :) (Task reminder is day-wise and not time-wise)
            </p>
        </transition>

        <div class="flexSpaceBetween">
            <div class="taskBox" style="margin-right: 10px;">

                <template>
                    <div>
                        <div style="margin-bottom: 20px">
                            <small><b style="color: purple;">Task can be same! Maintaining it is your task :)</b></small>
                        </div>

                        <form @submit.prevent="addNewTaskInRow()">
                            <v-text-field 
                                v-model="taskname"
                                label="Task"
                                >
                            </v-text-field>
                        </form>

                        <div class="pendingTaskContainer" >

                            <div v-if="pendingTaskList.length !== 0">
                                <transition-group enter-active-class="animated slideInDown" leave-active-class="animated bounceOutRight" >
                                    <TaskPending v-for="(task, index) in pendingTaskList" 
                                        v-bind:key="task.taskid"
                                        v-bind:index="index"
                                        :taskdetail="task" 
                                        v-on:remove="deleteTheTaskMessageFromTaskrow(index)" 
                                        v-on:doneTask="taskMarkAsDone(index)"
                                        v-on:expandtask="exapandThisTask(index)"/>
                                </transition-group>
                            </div>


                            <div v-if="pendingTaskList.length === 0" class="noDataPresent noPendingTask">
                                Oops! No data present!! 
                            </div>

                        </div>

                      

                    </div>
                </template>
            </div>

            <div class="taskBox" style="margin-left: 10px;">

                    <template>

                        <div>
                            <v-sheet elevation="6" style="border-radius: 20px;margin-bottom: 30px">
                                <v-tabs  style="display: flex;justify-content: center;"
                                v-model="model"
                                >
                                <v-tabs-slider></v-tabs-slider>
                            
                                    <v-tab :href="`#completedTab`">
                                        Completed Task
                                    </v-tab>
                                    <v-tab :href="`#deletedTab`">
                                        Deleted Task
                                    </v-tab>
                                </v-tabs>
                            </v-sheet>

                            <v-tabs-items v-model="model">

                                <v-tab-item :value="`completedTab`"> 

                                        <div class="pendingTaskContainer">

                                            <div v-if="(completedTaskList.length !== 0)">
                                                <small class="subtitle">
                                                    <b>Delete Permanently or Reinstate any Task</b>
                                                </small>

                                                <transition-group enter-active-class="animated bounceInLeft" 
                                                    leave-active-class="animated fadeOut" >
                                                    <TaskCompleted v-for="(task, index) in completedTaskList" 
                                                        v-bind:key="task.taskid"
                                                        v-bind:index="index"
                                                        :taskdetail="task"
                                                        v-on:remove= "removeTaskPermanentlyFromCompleted(index)"
                                                        v-on:reinstate="reinstateFromCompleted(index)" />
                                                </transition-group>
                                            </div>

                                            <div v-if="completedTaskList.length === 0" class="noDataPresent">
                                                Oops! No data present!! 
                                            </div>

                                        </div>

                                </v-tab-item>

                                <v-tab-item :value="`deletedTab`">

                                    <div class="pendingTaskContainer">

                                        <div v-if="(deletedTaskList.length !== 0)">
                                            <small class="subtitle">
                                                <b>Delete Permanently or Reinstate any Task</b>
                                            </small>

                                            <transition-group enter-active-class="animated bounceInLeft" leave-active-class="animated fadeOut" >
                                                <TaskDeleted v-for="(task, index) in deletedTaskList" 
                                                    v-bind:key="task.taskid"
                                                    v-bind:index="index"
                                                    :taskdetail="task" 
                                                    v-on:remove= "removeTaskPermanentlyFromDeleted(index)"
                                                    v-on:reinstate="reinstateFromDeleted(index)"/>
                                            </transition-group>
                                        </div>

                                        <div v-if="deletedTaskList.length === 0" class="noDataPresent">
                                            Oops! No data present!! 
                                        </div>
                                    </div>

                                </v-tab-item>
                            </v-tabs-items>

                        </div>
                    </template>

            </div>
        </div>

    </div>
</template>

<script>
import MainHeader from './../main-header/MainHeader';
import TaskPending from './../task-rows/TaskPending'
import TaskCompleted from './../task-rows/TaskCompleted'
import TaskDeleted from './../task-rows/TaskDeleted'

export default {
    components: {
        MainHeader,
        TaskPending,
        TaskCompleted,
        TaskDeleted
    },
    data() {
        return{
            showCreationInf: false,
            taskname: '',
            picker: new Date().toISOString().substr(0, 10),
            tasklist: [],
            pendingTaskList:[],
            completedTaskList:[],
            deletedTaskList:[],
            model:'completedTab'
        }
    },
    methods: {
        showCreationInfo: function(){
            console.log('here ', this.showCreationInf);
            this.showCreationInf = !this.showCreationInf;
        },

        addNewTaskInRow: function(){
            const date = new Date();
            this.pendingTaskList.unshift({name: this.taskname, 
                    status: 'pending', 
                    reminder:null, 
                    taskid: date.getTime(),
                    taskCreatedOn: date.toLocaleDateString(),
                    subtaskList: []
                    });

                    this.taskname = '';
                }, 

        deleteTheTaskMessageFromTaskrow: function(index){
             this.pendingTaskList.forEach((item, i) => {
                if(i===index){
                    item.status='deleted'
                }
            });
            this.deletedTaskList.unshift(this.pendingTaskList[index]);
             this.pendingTaskList.splice(index, 1);
        },
        
        taskMarkAsDone: function(index){
            this.pendingTaskList.forEach((item, i) => {
                if(i===index){
                    item.status='completed'
                }
            });
            this.completedTaskList.unshift(this.pendingTaskList[index]);
            this.pendingTaskList.splice(index, 1);
        },

        removeTaskPermanentlyFromCompleted: function(index){
            this.completedTaskList.splice(index,1);
        },

        removeTaskPermanentlyFromDeleted: function(index){
            this.deletedTaskList.splice(index, 1);
        },

        reinstateFromCompleted: function(index){
            let date = new Date();
            this.completedTaskList[index].taskCreatedOn = date.toLocaleDateString()
            this.pendingTaskList.unshift(this.completedTaskList[index]);
            this.completedTaskList.splice(index, 1);
            this.model = 'completedTab';
        },

        reinstateFromDeleted: function(index){
            let date = new Date();
            this.completedTaskList[index].taskCreatedOn = date.toLocaleDateString()
            this.pendingTaskList.unshift(this.deletedTaskList[index]);
            this.deletedTaskList.splice(index, 1);
            this.model = 'deletedTab';
        },

        exapandThisTask: function(index){
            let task_ = this.pendingTaskList[index];
            this.$router.push({name: 'task', params: {taskid: task_.taskid, completeTaskInfo: task_}})
        }


    },
    created: function(){
        console.log('here in task dashboard');
    }
}
</script>

<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);
    @import url(./TaskDashboard.css);
</style>