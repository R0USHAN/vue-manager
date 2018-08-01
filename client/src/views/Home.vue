<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {login} from '@/service/api/user.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created() {
      login().then(function(data) {
          console.log(data);
      })
  }
}
</script>
