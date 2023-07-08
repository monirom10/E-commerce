
<template>
    <div class="container-login relative">
      <img class="image absolute" src="../assets/image/profile-vue.png" alt="">
      <form class="mt-3" @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input type="text" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="mb-2">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
        </div>
        <div class="d-grid">
          <button class="btn btn-success  mt-3" type="submit">Log In</button>
        </div>
      </form>
    </div>
    <h5 class="text absolute">
      <!-- <p>Don't have account? <a href="/register" class="text-success">Register</a></p>
      <h4>Forgot <span class="text-success">password?</span></h4> -->
    </h5>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.email === 'admin' && this.password === '123') {
          this.$router.push('/');
          Swal.fire({
              icon: 'success',
              title: 'Login successful!',
              showConfirmButton: false,
              timer: 1500
            });
        } 
        else {
          Swal.fire({
              icon: 'error',
              title: 'Password or email incorrect',
              showConfirmButton: false,
              timer: 1500
          });
        }
      }
  
    //   login() {
    //     axios
    //       .post('http://localhost:3000/api/login', this.loginForm)
    //       .then(response => {
    //         const token = response.data.token;
    //         this.username = '';
    //         this.password = '';
    //         alert("Nice");
    //       })
    //       .catch(erro => {
    //         alert("Failed")
    //       });
    //   }
    }
  };
  </script>
  