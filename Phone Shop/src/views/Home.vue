<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
  <!-- @container -->
  <div class="container-1">
      <!-- @content-banner -->
      <div class="content_banner">
        <div class="title-banner">
          <h1 class="title">{{title}}</h1>
          <p class="subtitle">{{ subtitle }}</p>
          <p class="color">Currently Color : <br>{{ color }}</p>
          <p class="space">Storage : <br>{{ space }}</p>
          <router-link to="/detail">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Buy Now! 
              </span>
            </button>
          </router-link>
        </div>
        <div class="image-banner">
          <img :src="banner" alt="">
        </div>
      </div>
  <!-- @body-contianer -->
  <div class="body-contianer">
    <!-- @header-iphone -->
      <div class="header-type-1">
          <RouterLink to="/iphone">
            <h1 class="header-card-1" >iPhone 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </h1> 
          </RouterLink>
          <div class="traingle-1"></div>
      </div>
      <div class="product-container">
        <div class="product_content">
          <div class="content_box" v-for="product in iphoneProduct" :key="product.id">
            <RouterLink to="/detail">
              <div class="box-image">
                <img :src="product.image" alt="">
              </div>
              <div class="box-title">
                <h1>{{ product.name }}</h1>
                <p class="pt-2">New Price <b class="float-right text-sm">{{ product.price }}</b></p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

  <!-- @header-samsung -->
      <div class="header-type-2">
        <RouterLink to="/samsung">
          <h1 class="header-card-2">Samsung <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </h1>
        </RouterLink>
        <div class="traingle-2"></div>
      </div>

      <div class="product-container">
        <div class="product_content">
          <div class="content_box" v-for="product in samsungProduct" :key="product.id">
            <RouterLink to="/detail">
              <div class="box-image">
                <img :src="product.image" alt="">
              </div>
              <div class="box-title">
                <h1>{{ product.name }}</h1>
                <p class="pt-2">New Price <b class="float-right text-sm">{{product.price}}</b></p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

    <!-- @header-oppo -->
      <div class="header-type-3">
        <RouterLink to="/oppo">
          <h1 class="header-card-3" >Oppo 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </h1> 
        </RouterLink>
        <div class="traingle-3"></div>
      </div>
      <div class="product-container">
        <div class="product_content">
          <div class="content_box" v-for="product in oppoProduct" :key="product.id">
            <RouterLink to="/detail">
              <div class="box-image">
                <img :src="product.image" alt="">
              </div>
              <div class="box-title">
                <h1>{{product.name}}</h1>
                <p class="pt-2">New Price <b class="float-right text-sm">{{product.price}}</b></p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- @header-huawei -->
      <div class="header-type-4">
        <RouterLink to="/huawei">
            <h1 class="header-card-4" >Huawei 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
          </h1> 
        </RouterLink>
        <div class="traingle-4"></div>
      </div>
      <div class="product-container">
        <div class="product_content">
          <div class="content_box" v-for="product in huaweiProduct" :key="product.id">
            <RouterLink to="/detail">
              <div class="box-image">
                <img :src="product.image" alt="">
              </div>
              <div class="box-title">
                <h1>{{product.name}}</h1>
                <p class="pt-2">New Price <b class="float-right text-sm">{{product.price}}</b></p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <!-- @end-product -->
    </div>
    <!-- @end-body-container -->
  </div>
</template>
<!-- @script -->
<script>
export default {
  data() {
    return {
      title: "iPhone 14 and 14 Pro Max",
      subtitle: "The new smart phone iPhone 14 and iPhone 14 Pro Max. New year come with 4 color and 4 space. Upgrade to new iPhone to get new experience and make your live easier with new Technology on iPhone 14 & iPhone 14 Pro from Apple with chip A15 Bionic. 4K video recording and Super Retina XDR display. Buy now to get discount + gift.",
      color: "Black, White, Gold, Deep Blue, Purple, Red, Yellow.",
      space: "128G, 256G, 512G, 1TB",
      banner: "/src/assets/image/ip-14-pro-banner.png",
      iphoneProduct: [],
      samsungProduct: [],
      oppoProduct: [],
      huaweiProduct: []
    };
  },
  mounted() {
    this.generateProducts();
  },
  methods: {
    generateProducts() {
      const productData = [
        {
          category: 'iphoneProduct',
          products: [
            { id: 1, name: "iPhone 14", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-14s.png" },
            { id: 2, name: "iPhone 14 Pro Max", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-14-pro.png" },
            { id: 3, name: "iPhone 13 Pro Max", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-13-pro.png" },
            { id: 4, name: "iPhone 13", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-13.png" },
            { id: 5, name: "iPhone 12 Pro Max", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-12-pro.png" },
            { id: 6, name: "iPhone 13 Pro Max", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-14-pro.png" },
            { id: 7, name: "iPhone 14 Pro Max", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-14-pro.png" },
            { id: 8, name: "iPhone 13 Pro Max", price: "1080$ ~ 1250$", image: "/src/assets/image/ip-14-pro.png" }
          ]
        },
        {
          category: 'samsungProduct',
          products: [
            { id: 1, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 2, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 3, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 4, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 5, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 6, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 7, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" },
            { id: 8, name: "Galaxy S23 Ultra", price: "1080$ ~ 1250$", image: "/src/assets/image/samsungS23S.png" }
          ]
        },
        {
          category: 'oppoProduct',
          products: [
            { id: 1, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 2, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 3, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 4, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 5, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 6, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 7, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" },
            { id: 8, name: "Oppo Reno 20", price: "1080$ ~ 1250$", image: "/src/assets/image/oppo1.png" }
          ]
        },
        {
          category: 'huaweiProduct',
          products: [
            { id: 1, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 2, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 3, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 4, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 5, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 6, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 7, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" },
            { id: 8, name: "Huawei P30 Pro", price: "1080$ ~ 1250$", image: "/src/assets/image/Huawei.png" }
          ]
        }
      ];
      productData.forEach(data => {
        this[data.category] = data.products;
      });
    }
  }
};

</script>