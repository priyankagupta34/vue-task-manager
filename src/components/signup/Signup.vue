<template>
<div>
    <Header class="headerSpecificInForm" />
    
    <div class="flexFormLogin">
        
        <form class="formSpecific">            

                <div class="headingForm">
                    Sign Up
                </div>

                <v-text-field class="inputBoxLength"
                v-model="name"
                label="Name"
                ></v-text-field>

                <v-text-field class="inputBoxLength"
                v-model="email"
                label="Email"
                ></v-text-field>
        

                <v-text-field class="inputBoxLength"
                v-model="password"
                label="Password"
                ></v-text-field>

                <div class="centerFlex">
                    <v-btn class="submitBtn" >
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
            name: '',
            password: '',
            email:''
        }
    },
    created (){
        
    }
    // methods: {

    // }
}
</script>

<style src="./Signup.css" scoped>

</style>