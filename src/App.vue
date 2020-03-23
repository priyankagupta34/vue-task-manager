<template>
  <div>
  <div>
    <!-- <Login /> -->
  <router-view />
    <Disclaimer />

    
  </div>
  </div>
  
</template>

<script>
// import Login from './components/login/Login';
import Disclaimer from './components/disclaimer/Disclaimer';

export default {
  name: 'App',

  components: {
    // Login,
    Disclaimer
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url(./App.css);
  *{
    font-family: monospace;
    box-sizing: border-box;
    color: rgb(36, 36, 36);
  }
  *::after, *::before{
    box-sizing: border-box;
  }
</style>