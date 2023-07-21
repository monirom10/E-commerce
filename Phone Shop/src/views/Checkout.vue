<template>
    <div class="checkout-container">
        <div class="checkout-content">
            <!-- @left -->
            <div :class="['content-path', { 'hide-elements': currentTab === 'thankyou' }]">
                <div class="path rounded-r-lg">
                    <RouterLink to="/card">
                        <h1 class="engle_bracket" @click="switchTab('card')">Card 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </h1> 
                    </RouterLink>

                    <h1 class="engle_bracket" @click="switchTab('customer') " :class="{ active: currentTab === 'customer' }">Customer Information
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </h1> 
                    <h1 class="engle_bracket" @click="switchTab('shipping')" :class="{ active: currentTab === 'shipping' }">Shipping Information
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </h1> 
                    <h1 class="engle_bracket" @click="switchTab('payment')" :class="{ active: currentTab === 'payment' }">Payment Method 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </h1> 
                </div>
            <!-- @end-path -->
            <hr>
            <!-- @customer_tab -->
            <div v-if="currentTab === 'customer'">
                <div class="customer-tab">
                    <form action="">
                        <h1>Customer Information</h1>
                        <input type="text" name="email" placeholder="Email">
                        <hr>
                        <h1>Shipping Address</h1>
                        <div class="input_address1">
                            <input type="text" placeholder="First Name">
                            <input type="text" placeholder="Last Name">
                        </div>
                        <input class="mt-3" type="text" name="company" placeholder="Company(optional)">
                        <div class="input_address2">
                            <input type="text" name="address" placeholder="Address">
                            <input type="text" name="Apt" placeholder="Apt(optional)">
                        </div>
                        <div class="input_address3">
                            <select name="country" id="">
                                <option value="cam">Cambodida</option>
                                <option value="usa">United State</option>
                            </select>
                            <select name="state" id="">
                                <option value="pp">Phone Penh</option>
                                <option value="kpc">Kampong Cham</option>
                            </select>
                            <input type="text" name="Apt" placeholder="Zip Code">
                        </div>
                        <hr>
                        <div class="buttom-button">
                            <router-link to="/card">
                                <button>Return To Card</button>
                            </router-link>
                            <button @click="switchTab('shipping')">Continue to Shopping Mode</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- @shipping_tab -->
            <div v-if="currentTab === 'shipping'">
                <div class="shipping-tab">
                    <div class="ship-address">
                        <h1>Shipping Address: </h1>
                        <h2>12 Waldo Point Road, Phnom Penh, NY11200</h2>
                        <h3 @click="switchTab('customer')">Edit</h3>
                    </div> 
                    <hr/>
                    <div class="shipping_method">
                        <h1>Shipping Method</h1>
                        <table>
                            <tr>
                                <td>USP Ground</td>
                                <td>$2.20</td>
                            </tr>
                            <tr>
                                <td>J & T</td>
                                <td>$2.20</td>
                            </tr>
                            <tr>
                                <td>Grap</td>
                                <td>$2.20</td>
                            </tr>
                            <tr>
                                <td>AZ-BZ</td>
                                <td>$2.20</td>
                            </tr>
                        </table>
                    </div>
                    <hr/>
                    <div class="buttom-button">
                            <button  @click="switchTab('customer')">Return To Cusmtomer Information</button>
                            <button @click="switchTab('payment')">Continue To Payment Method</button>
                        </div>
                </div>
                <hr>
            </div>
            <!-- @payment_tab -->
            <div v-if="currentTab === 'payment'">
                <div class="payment-tab">
                    <div class="address">
                        <h1>Shipping Address: </h1>
                        <h2>12 Waldo Point Road, Phnom Penh, NY11200</h2>
                        <h3 @click="switchTab('customer')">Edit</h3>
                    </div>
                    <hr>
                    <div class="method">
                        <h1>Shipping Method</h1>
                        <h2>USP Ground</h2>
                        <h3>$2.20</h3>
                    </div>
                    <hr>
                    <div class="payment1">
                        <form action="">
                            <h1>Payment Method</h1>
                            <label for="cart-type">Card Type: </label>
                            <select name="" id="">
                                <option value="visa">Visa Card</option>
                                <option value="master">Master Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="aba">ABA</option>
                            </select>
                            <input class="input1" type="text" name="card-number" placeholder="Card Number">
                            <div class="other-input">
                                <input type="text" name="car-name" placeholder="Name on Card">
                                <input type="month" name="expiry" id="expiry">
                                <input type="text" name="cvv" placeholder="CVV">
                            </div>
                        </form>
                    </div>
                    <hr>
                    <div class="payment2">
                        <h1>Payment Method</h1>
                        <input type="radio" name="radio"> <span>Same as shipping address</span> <br>
                        <input type="radio" name="radio"> <span>Use different billing address</span> <br>
                        <input type="checkbox" name="" id=""> <span>Same as shipping address</span>
                    </div>
                    <hr>
                    <!-- @button-payment -->
                    <div v-if="currentTab === 'payment'" class="button-payment">
                        <button @click="switchTab('shipping')">Return To Shipping Information</button>
                        <button @click="completePayment">Complete Payment</button>
                    </div>
                </div>
            </div>
        </div>


            <!-- @right -->
            <div class="content-receipt">
                <div v-if="currentTab === 'customer'">
                    <div class="summary-item">
                        <h1>Summay (Item)</h1>
                        <hr>
                        <div class="detail-summary">
                            <h1>iPhone 14 Pro Max</h1>
                            <h1>$1450</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Storage</h1>
                            <h1>512G</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Color</h1>
                            <h1>Black</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Shipping</h1>
                            <h1>- - - -</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Est. Taxes</h1>
                            <h1>- - - -</h1>
                        </div>
                        <hr>
                        <h2>Gift card or discount code</h2>
                        <input type="text"> <button>Apply</button>
                        <hr>
                        <div class="total">
                            <h1>Total</h1>
                            <h1>$1450</h1>
                        </div>
                    </div>
                </div>

                <div v-if="currentTab === 'shipping'">
                    <div class="summary-item">
                        <h1>Summay (Item)</h1>
                        <hr>
                        <div class="detail-summary">
                            <h1>iPhone 14 Pro Max</h1>
                            <h1>$1450</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Storage</h1>
                            <h1>512G</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Color</h1>
                            <h1>Black</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Shipping</h1>
                            <h1>$2.20</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Est. Taxes</h1>
                            <h1>$1.40</h1>
                        </div>
                        <hr>
                        <h2>Gift card or discount code</h2>
                        <input type="text"> <button>Apply</button>
                        <hr>
                        <div class="total">
                            <h1>Total</h1>
                            <h1>$1450</h1>
                        </div>
                    </div>
                </div>

                <div v-if="currentTab === 'payment'">
                    <div class="summary-item">
                        <h1>Summay (Item)</h1>
                        <hr>
                        <div class="detail-summary">
                            <h1>iPhone 14 Pro Max</h1>
                            <h1>$1450</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Storage</h1>
                            <h1>512G</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Color</h1>
                            <h1>Black</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Shipping</h1>
                            <h1>$2.20</h1>
                        </div>
                        <div class="detail-summary">
                            <h1>Est. Taxes</h1>
                            <h1>$1.40</h1>
                        </div>
                        <hr>
                        <h2>Gift card or discount code</h2>
                        <input type="text"> <button>Apply</button>
                        <hr>
                        <div class="total">
                            <h1>Total</h1>
                            <h1>$1453.60</h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- @thankyou_tab -->
                <div v-if="currentTab === 'thankyou'" class="thankyou">
                    <div class="user">
                        <div class="user-profile">
                            <img src="../assets/image/profile-vue.png" alt="">
                        </div>     
                        <div class="user-name">
                            <h1>Thank you Vin Da!</h1>
                            <h1>For choosing me.</h1>
                        </div>    
                    </div>
                    <hr>   
                    <div class="confirm">
                        <h1 style="color: black;">Your order has been confirmed.</h1>
                        <h1 style="color: black;">We've accepted your order and we re getting it ready.</h1>
                    </div>
                    <hr>
                    <div class="contact">
                        <h1>Any problem contact us at: </h1>
                        <h2>Email : monirom094@gmail.com</h2>
                        <h2>Tele  : 012 345 678</h2>
                    </div>
                    <hr>    
                </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
    export default {
        
        data() {
    return {
      currentTab: 'customer',
    };
  },
  methods: {
    switchTab(tabName) {
      this.currentTab = tabName;
    },
    completePayment() {
      Swal.fire({
        title: 'Payment Completed!',
        text: 'Thank you for your purchase.',
        icon: 'success',
        // confirmButtonText: 'OK',
        timer: 1500,
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
      }).then(() => {
        this.switchTab('thankyou');
      });
    },
  },
    };
</script>