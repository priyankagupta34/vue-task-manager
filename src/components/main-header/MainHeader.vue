<template>
    <div class="headerbox flexSpaceBetween">
         <div class="headerTitle flexTing">
            <img src="imgs/logo.png" />
            <div class="headerLetters">Task Manager</div>
        </div>
        
        <div>
            <v-badge
            color="green"
            v-bind:content="reminderlist.length"
            v-bind:overlap ="true"
            >
                <v-icon style="color: white">mdi-bell</v-icon>
            </v-badge>
            <v-btn class="logoutBtn" v-on:click="logout()" >
                Logout
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
     props: {
        reminderlist: []
    },
    methods:{
        logout: function(){
            this.$router.push('/login');
        }
    },
    created: function(){

        if(typeof this.reminderlist === 'undefined'){
            this.reminderlist = [];
        }
       
    },
    watch: {
        reminderlist: function(newb, oldb){
            console.log('newb ', newb);
        }
    }
}
</script>

<style scoped>
    @import url(./MainHeader.css);
</style>