<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Samsung from './views/Samsung.vue';
import Header from './views/header.vue'
import Footer from './views/footer.vue'
// import Home from './views/Home.vue';

// export default{
//   data() {
//     return {
//       isCheckingOut: false,
//       isLogin: false,
//     };
//   },
//   components: {
//     Index,
//     Checkout,
//     FooterComponent
//   }
// };
</script>
<!-- 
<template>
  <header>
    <div>
      <Checkout @cancel="false" v-if="isCheckingOut"/>
      <Index v-esle @checkout = "isCheckingOut=true" />
    </div>
  </header>
  <body>
    
  </body>
  <footer>
    <FooterComponent/>
  </footer>
</template> -->

<template>
    <div class="wrapper">
      <Header></Header>
    </div>
    <RouterView/>
    <Footer></Footer>
</template>
