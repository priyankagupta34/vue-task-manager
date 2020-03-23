<template>
    <div>
        <div class="taskrow flexSpaceBetween">

            <div class="flexTing">

              
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <div class="taskName"  v-on="on" >
                            {{ taskdetail.name }}
                        </div>
                    </template>
                   <span>Tooltip</span>
                </v-tooltip>

            </div>

            <div class="flexTing">


                <v-btn text icon style="color: lightblue " title="Remove Task" v-on:click="deleteThisTask()">
                    <v-icon>mdi-delete-alert-outline</v-icon>
                </v-btn>

                <v-btn text icon style="color: lightsalmon " title="Done Task" v-on:click="doneThisTask()">
                    <v-icon>mdi-check</v-icon>
                </v-btn>

                <v-btn text icon style="color: lightgrey " title="Expand Task" v-on:click="expandThisTask()">
                    <v-icon>mdi-arrow-expand-all</v-icon>
                </v-btn>                

            </div>

            
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return{
            showCalender: false,
            picker: new Date().toISOString().substr(0, 10),
        }
    },
    props: {
        taskdetail: {},
        // index:-1
    },
    methods: {
        setReminder: function() {
            this.showCalender = !this.showCalender;
        },
        deleteThisTask: function(){
            this.$emit('remove');
        },
        doneThisTask: function(){
            this.$emit('doneTask');
        },
        expandThisTask: function(){
            this.$emit('expandtask');
        }
    },
    created: function(){

    },
    watch: {
        taskDetailIndex: function(newm, oldm){
        }
    }
}
</script>

<style src="./TaskRows.css" scoped>

</style>