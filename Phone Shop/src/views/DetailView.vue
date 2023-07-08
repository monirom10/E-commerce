<template>
    <div class="detail-container">
        <div class="detail-content">
            <!-- @top -->
            <div class="detail-content-top">
                <!-- @left -->
                <div class="detail-content-top-left">
                    <!-- @img-size -->
                    <div class="detail-content-phone-size">
                        <img src="../assets/image/ip-14p-de-c1.png" alt="">
                    </div>
                    <div class="detail-content-phone-color">
                        <!-- @1 -->
                        <div class="phone-color-box">
                            <img src="../assets/image/ip-14p-de-c1.png" alt="">
                        </div>
                        <!-- @2 -->
                        <div class="phone-color-box">
                            <img src="../assets/image/ip-14p-de-c2.png" alt="">
                        </div>
                        <!-- @3 -->
                        <div class="phone-color-box">
                            <img src="../assets/image/ip-14p-de-c3.png" alt="">
                        </div>
                    </div>
                </div>

                <!-- @right -->
                <div class="detail-content-top-right">
                    <!-- @title -->
                    <div class="detail-content-title">
                        <h1>iPhone 14 Pro Max</h1>
                    </div>
                    <hr>
                    <!-- @storage -->
                    <div class="detail-content-storage">
                        <label for="storage">Choose Storage: </label>
                        <select name="phone" id="storage">
                        <option value="">128G</option>
                        <option value="">256G</option>
                        <option value="">512G</option>
                        </select>
                    </div>
                    <hr>
                    <!-- @phone-color -->
                    <div class="detail-content-color">
                        <label for="color">Choose Color: </label>
                        <select name="color" id="color">
                        <option value="">Gold</option>
                        <option value="">White</option>
                        <option value="">Deep Blue</option>
                        </select>
                    </div>
                    <hr>
                    <!-- @quantity -->
                    <div class="detail-content-quantity">
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
                    <div class="detail-content-price">
                        <label>Price</label>
                        <h1 style="color: black;">1450$</h1>
                    </div>
                    <RouterLink to="/card">
                        <button>Add To Card</button>
                    </RouterLink>
                </div>
            </div>

            <!-- @related-product -->
            <div class="detail-content-bottom">
                <h1>Related Product 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </h1>
                <div class="traingle"></div>
                <div class="detail-related-product">
                    <div class="product-1">
                        <RouterLink to="/detail">
                            <img src="../assets/image/s23-1.png" alt="">
                            <p>Samsung Galaxy S23 Ultra</p>
                        </RouterLink>
                    </div>

                    <div class="product-1">
                        <RouterLink to="/detail">
                            <img src="../assets/image/ipad-1.png" alt="">
                            <p>iPad Pro 13</p>
                        </RouterLink>
                    </div>

                    <div class="product-1">
                        <RouterLink to="/detail">
                            <img src="../assets/image/iwatch-1.png" alt="">
                            <p>iWatch Series 4</p>
                        </RouterLink>   
                    </div>

                    <div class="product-1">
                        <RouterLink to="/detail">
                            <img src="../assets/image/airpod-1.png" alt="">
                            <p>AirPod Series 3</p>
                        </RouterLink>  
                    </div>

                    <div class="product-1">
                        <RouterLink to="/detail">
                            <img src="../assets/image/ipen-1.png" alt="">
                            <p>iPen Pro 3</p>
                        </RouterLink>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>