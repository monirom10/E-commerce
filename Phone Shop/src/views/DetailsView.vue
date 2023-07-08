<template>
    <!-- @header -->
      <!-- @body -->
      <div class="detail-container">
        <div class="buynow-detail">
          <!-- @top-box -->
          <div class="buynow-top">
            <div class="buynow-box-left">
              <!-- @left -->
                <div class="phone-size">
                  <!-- <img :src="BigImage" alt="BigImage"> -->
                  <img src="../assets/image/ip-14p-de-c1.png" alt="">
                </div>
                <div class="phone-color">
                  <!-- @box1 -->
                  <div class="box1">
                    <img src="../assets/image/ip-14p-de-c1.png" alt="">
                  </div>
                  <!-- @box1 -->
                  <div class="box1">
                    <img src="../assets/image/ip-14p-de-c2.png" alt="">
                  </div>  
                  <!-- @box1 -->
                  <div class="box1">
                    <img src="../assets/image/ip-14p-de-c3.png" alt="">
                  </div>
                </div>
            </div>

            <!-- @right-box -->
            <div class="buynow-box-right">
              <div class="title">
                <h1>iPhone 14 Pro Max</h1>
                <hr>
              </div>
              <!-- @storage -->
              <div class="storage">
                <label for="storage">Choose Storage: </label>
                <select name="phone" id="storage">
                  <option value="">128G</option>
                  <option value="">256G</option>
                  <option value="">512G</option>
                </select>
              </div>
              <hr>
              <!-- @phone-color -->
              <div class="color">
                <label for="color">Choose Color: </label>
                <select name="color" id="color">
                  <option value="">Gold</option>
                  <option value="">White</option>
                  <option value="">Deep Blue</option>
                </select>
              </div>
              <hr>
              <!-- @quantity -->
              <div class="quantity">
                <label for="storage">Quantity: </label>
                <select name="phone" id="storage">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <hr>
              <!-- @price -->
              <div class="price">
                <label>Price</label>
                <h1>1450$</h1>
              </div>
              <RouterLink>
                <button>Add To Card</button>
              </RouterLink>
            </div>
          </div>
          
          <!-- @related-Product -->
          <div class="buynow-bottom">
              <h1>Related Product 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </h1>
              <div class="traingle"></div>
              <div class="related-product">
                <div class="product-1">
                  <RouterLink to="/buynow">
                    <img src="../assets/image/s23-1.png" alt="">
                    <p>Samsung Galaxy S23 Ultra</p>
                  </RouterLink>
                </div>

                <div class="product-1">
                  <RouterLink to="/buynow">
                    <img src="../assets/image/ipad-1.png" alt="">
                    <p>iPad Pro 13</p>
                  </RouterLink>
                </div>

                <div class="product-1">
                  <RouterLink to="/buynow">
                    <img src="../assets/image/iwatch-1.png" alt="">
                    <p>iWatch Series 4</p>
                  </RouterLink>                 
                </div>

                <div class="product-1">
                  <RouterLink to="/buynow">
                    <img src="../assets/image/airpod-1.png" alt="">
                    <p>AirPod Series 3</p>
                  </RouterLink>                  
                </div>

                <div class="product-1">
                  <RouterLink to="/buynow">
                    <img src="../assets/image/ipen-1.png" alt="">
                    <p>iPen Pro 3</p>
                  </RouterLink>                
                </div>
              </div>
          </div>
        </div>
      </div>     
    <!-- @footer -->
</template>
<script>

  export default{
    data() {
      return {
        BigImage: ('../assets/image/ip-14p-de-c1.png'),
      }
    },
    methods: {
      changeBigImage(imageSrc){
        this.bigImage = (imageSrc);
      }
    }
  };
  // app.mount('.buynow-top');
</script>