<template>
     <div>
        <div class="taskrow flexSpaceBetween">

            <div class="flexTing">

                <div class="taskName">
                    {{ taskdetail.name }}
                </div>

            </div>

            <div class="flexTing">


                <v-btn text icon style="color: lightblue " title="Reinstate Task" v-on:click="reinstateTask()">
                    <v-icon>mdi-undo</v-icon>
                </v-btn>              

                <v-btn text icon style="color: lightgreen " title="Remove Permanently" v-on:click="removeTaskPermanently()">
                    <v-icon>mdi-minus-circle-outline</v-icon>
                </v-btn>              

            </div>

            
        </div>
    </div>

</template>

<script>
export default {
    props: {
        taskdetail: {}
    },
    methods: {
        removeTaskPermanently: function(){
            this.$emit('remove');
        },
        reinstateTask: function(){
            this.$emit('reinstate');
        }
    }
}
</script>

<style scoped>
    @import url(./TaskRows.css);
</style>