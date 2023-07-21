
<template>
    <div class="container-login relative">
      <div class="image absolute">
        <img src="../assets/image/profile-vue.png" alt="">
      </div>
      
      <form class="mt-3 form-box" @submit.prevent="login" autocomplete="off">
        <div class="mb-3 username">
          <label for="exampleInputEmail1" class="form-label">User Name</label> <br>
          <input type="text" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label passord">Password</label> <br>
          <input type="password" v-model="password" class="form-control password absolute" id="exampleInputPassword1" placeholder="Enter Password">
        </div>
        <div class="button d-grid relative">
          <button class="btn btn-success mt-3 absolute" type="submit">Log In</button>
        </div>
      </form>
      <div class="text">
        <p>Don't have account? <a href="/register" class="text-green-700">Register</a></p>
        <h4 class="forgot absolute">Forgot <span class="text-green-700">password?</span></h4>
      </div>
    </div>
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
        if (this.email === 'monirom094@gmail.com' && this.password === '123') {
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
  