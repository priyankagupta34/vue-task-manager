<template>
<div>

    <div>
        <Header class="headerSpecificInForm" />
    </div>
    
    <div class="flexFormLogin">
        
        <form class="formSpecific" @submit.prevent="loginToTaskManagement" >            

                <div class="headingForm">
                    Login
                </div>

                <v-text-field class="inputBoxLength"
                v-model="username"
                label="Email"
                ></v-text-field>
        

                <v-text-field class="inputBoxLength"
                v-model="password"
                label="Password"
                ></v-text-field>

                <div class="centerFlex">
                    <v-btn class="submitBtn" type="submit" >
                        Submit
                    </v-btn>
                </div>
        </form>
    </div>
</div>
</template>

<script>
import Header from './../header/Header'
export default {
    components: {
        Header
    },
    data() {
        return{
            username: '',
            password: ''
        }
    },
    methods: {
        loginToTaskManagement(){
            localStorage.setItem('inf', JSON.stringify({user: 'Priyanka', token: '67367ghdndgh64683hdjhjhj'}));
            this.$root.$emit('showsignup', true);
            this.$root.$emit('logged', true);
            this.$router.push('taskdashboard');
        }
    }
}
</script>

<style src="./Login.css" scoped>

</style>