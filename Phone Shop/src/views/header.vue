<template>

<div class="header">
            <div class="nav-bar position-relative">
              <!-- @icon -->
              <div class="icon">
                <h1>MV Phone</h1>
              </div>
              <!-- @menu -->
              <div class="menu">
                <ul class="menu-nav">
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/')}">
                    <a class="item-link" href="/">Home</a>
                  </li>
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/iphone') }">
                    <a class="item-link" href="/iphone">iPhone</a>
                  </li>
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/samsung') }">
                    <a class="item-link" href="/samsung">Samsung</a>
                  </li>
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/oppo') }">
                    <a class="item-link" href="/oppo">Oppo</a>
                  </li>
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/huawei') }">
                    <a class="item-link" href="/huawei">Huawei</a>
                  </li>
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/others') }">
                    <a class="item-link" href="/others">Others</a>
                  </li>
                  <li :class="{ 'menu-item': true, 'active': isRouteActive('/card') }">
                    <a class="item-link" href="/card">Card(0)</a>
                  </li>
                  <li class="menu-item">
                    <input class="w-20 h-6 mt-0.2 rounded-lg text-sm text-center" type="text" placeholder="Search">
                  </li>
                  <li class="menu-item flex">
                    <!-- <a class="" v-if="!isLoggedIn" href="/login">Login</a>
                    <a class="" v-else @click="handleLogout" href="/login">Logout</a> -->
                    <button class="w-20 pr-1 pl-1 rounded-md bg-green-700">
                      <a href="/register">Sign Up</a>
                    </button>
                    <button class="pr-2 pl-2 ml-3 rounded-md bg-red-700">
                      <a href="/logout">Logout</a>
                    </button>
                  </li>
                </ul>
              </div>
    
              <div class="burger position-absolute float-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>
          </div>
</template>
<script>
export default {
  data(){
    return {
      isloggedIn: false
    };
  },
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
    handleLogout(){
      this.isloggedIn = false;
    }
  },
  mounted(){
    this.isLoggedIn = true;
  }
};
</script>