<template>
    <div class="card-container">
        <!-- @card-content -->
        <div class="card-content">
            <!-- @checkout-content -->
            <div class="card-content-left">
                <h1>Shopping Card</h1>
                <hr>
                <table>
                    <tr class="bg-">
                        <th>Item</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Checkout</th>
                    </tr>
                </table>
                <hr>
                <div class="product-content" v-for="product in iphoneProduct" :key="product.id">
                    <!-- @image -->
                    <div class="product-content-image">
                        <img :src="product.image" alt="">
                    </div>
                    <!-- @description -->
                    <div class="product-content-description">
                        <h1>{{product.name}}</h1>
                        <h1>Color: {{product.color}}</h1>
                        <h1>Storage: {{product.storage}}</h1>
                    </div>
                    <!-- @price -->
                    <div class="product-content-price">
                        <h1>{{product.price}}$</h1>
                    </div>
                    <!-- @checkout -->
                    <div class="product-content-checkout">
                        <RouterLink to="/checkout">
                            <button type="button" @click="checkout(product.id)" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Checkout</button>
                        </RouterLink>
                        <button type="button" @click="remove(product.id)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                    </div>                 
                </div>           
            </div>
        </div>
        <!-- @end-card-content -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      iphoneProduct: [
        {
          id: 1,
          image: '/src/assets/image/ip-14s.png',
          name: 'iPhone 14',
          color: 'Black',
          storage: '512G',
          price: '1450',
        },
        {
          id: 2,
          image: '/src/assets/image/ip-13-pro.png',
          name: 'iPhone 14 Pro Max',
          color: 'Black',
          storage: '512G',
          price: '1450',
        },
        {
          id: 3,
          image: '/src/assets/image/ip-13.png',
          name: 'iPhone 14 Pro Max',
          color: 'Black',
          storage: '512G',
          price: '1450',
        },
        {
          id: 4,
          image: '/src/assets/image/ip-14-pro.png',
          name: 'iPhone 14 Pro Max',
          color: 'Black',
          storage: '512G',
          price: '1450',
        },
        {
          id: 5,
          image: '/src/assets/image/ip-14-pro.png',
          name: 'iPhone 14 Pro Max',
          color: 'Black',
          storage: '512G',
          price: '1450',
        },

        // Add more product objects as needed
      ],
    };
  },
  methods: {
    checkout(productId) {
      // Handle checkout button click for the specific product (productId)
    //   this.$router.push('/checkout');
    },
    remove(productId) {
      // Handle remove button click for the specific product (productId)
      const index = this.products.findIndex(product => product.id == productId);
      if(index !== -1){
        // Remove the pro   duct from the products array
        this.products.splice(index, 1);
      }
    },
  },
};
</script>