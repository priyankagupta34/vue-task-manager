<template>
    <div class="headerBox ">
        <div class="flexSpaceBetween">
            <div>
                <div class="headerTitle flex">
                    <img src="imgs/logo.png" />
                    <div class="headerLetters">Task Manager</div>
                </div>
            </div>
            <div>
                <v-btn class="signbtn" v-on:click="toggleSignupToLoginBtn('signup')" v-if="showLoginBtn === 'login'">
                    Signup
                </v-btn>
                <v-btn class="signbtn" v-on:click="toggleSignupToLoginBtn('login')" v-if="showLoginBtn === 'signup'">
                    Login
                </v-btn>
            </div>
        </div>
        <div class="mainpara">
            <div>Managing task at one place is the new trends. Adopting the best practice is always the first challenge.  </div>
            <div>Be a part of world's largest task management forum!</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showLoginBtn:'signup'
        }
    },
    methods: {
        toggleSignupToLoginBtn: function(route){
            this.showLoginBtn = route;
            this.$router.push({name: route, show: route});
            // if(this.showLoginBtn){
            // this.$router.push({name: 'signup'});
            // this.showLoginBtn = false;
            // }else{
            //     this.$router.push({name: 'login'});
            //      this.showLoginBtn = true;
            // }
        }
    },
    created: function() {
        
        
    }
}
</script>

<style src="./Header.css" scoped>

</style>