<template>
    <div class="register-container">
        <div class="register-content">
            <h1>Sign Up</h1>
            <p class="text-lg">Please fill this form to create an account.</p>
            <hr>
            <form action="" @submit.prevent="register" autocomplete="off">
                <label for="email">Email</label> <br>
                <input type="text" v-model="email" name="email" id="email" placeholder="Email"> <br>

                <label for="username">Username</label> <br>
                <input type="text" v-model="username" name="username" id="username" placeholder="Username"> <br>

                <label for="firstname">First name</label> <br>
                <input type="text" v-model="firstName" name="firs-name" id="firstname" placeholder="First name"> <br>

                <label for="lastname">Last name</label> <br>
                <input type="text" v-model="lastName" name="last-name" id="lastname" placeholder="Last name"> <br>

                <label for="password">Password</label> <br>
                <input type="password" v-model="password" name="password" id="password" placeholder="Password"> <br>
                <h2>By creating an account you're agree to our <span class="text-green-700" >Term & Privacy</span></h2>
                <button class="">Sign Up</button>    
            </form>
            <h3 class=" mt-2 text-center text-xs">Already have an account? <a href="/login" class="text-green-700">Login</a></h3>
        </div>
    </div>
</template>
<script>
// import { defineComponent } from 'vue';
// import axios from 'axios';
import Swal from 'sweetalert2';
  export default {
    data() {
      return {
        email:     '',
        username:  '',
        firstName: '',
        lastName:  '',
        password:  ''
      };
    },
    methods: {
      register() {
        if(this.email === 'monirom094@gmail.com' && this.username === 'admin' && this.firstName === 'Monirom' && this.lastName === 'mv' && this.password === '123'){
            this.$router.push('/');
            Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
            showConfirmButton: false,
            timer: 1500
          });
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Username or password incorrect!',
            showConfirmButton: false,
            timer: 1500
          });
        }  
      }
    }
  };

</script>