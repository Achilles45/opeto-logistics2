<template>
  <div class="navbar__wrapper container-fluid">
    <div class="container">
      <div
        class="navbar__contents d-flex justify-content-between align-items-center"
      >
        <div class="navbar__logo pt-2">
          <router-link to="/" class="logo">
           <h5><img src="../assets/images/logo4.jpg" class="logo__img" alt=""
          /> </h5>
          </router-link>
        </div>
        <div class="navbar__links">
          <ul class="d-flex navbar__items justify-content-between pt-3">
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/about">About Us</router-link></li>
           <li><router-link to="/contact">Contact Us</router-link></li>
           <li><router-link to="/request" class="quote__btn">Request a quote</router-link></li>
          </ul>
        </div>
        <div class="translate__wrapper">
          <!-- <p>Translate this website</p> -->
          <div id="google_translate_element"></div>
        </div>
        <div class="navbar__toggler" @click="toggleNav()">
         <i class="fa fa-bars"></i>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
   mounted(){
      // this.googleTranslateElementInit();
       this.fixNav();
    },
  methods: {
    toggleNav() {
      const navbarToggler = document.querySelector('.navbar__toggler')
      const nav = document.querySelector('.navbar__items')
      navbarToggler.addEventListener('click', () => {
        nav.classList.toggle('show__nav')
      })
    },
    googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    },
    fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 200) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        }
  }
}
</script>

<style lang="scss" scoped>
.navbar__wrapper {
  background: #fff;
  // box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: .7rem 0;
  // position: fixed;
  z-index: 100;
  .translate__wrapper{
    margin-right: 2rem;
  }
  .logo{
       text-decoration: none !important;
  }
  h5{
    font-weight: bolder;
    color:#000;
  }
  .blue{
    color:blue;
  }
  .red{
    color:#FB7E12;
  }
  .logo__img {
    max-width: 90px;
    height: auto;
  }
  ul {
    li a {
      text-decoration: none;
      color: #FB7E12;
      text-transform: uppercase;
      font-size: 0.85rem;
      opacity: 0.8;
      margin: 0 0.6rem;
      font-weight: bold;
      &:hover {
        color: #FB7E12;
        transition: all ease-in-out 0.5s;
      }
    }
    .quote__btn {
      background: #FB7E12;
      padding: 1rem 2rem;
      border-radius: 3px;
      opacity: 1 !important;
      color: #fff;
      font-weight: normal;
      &:hover {
        color: #fff !important;
        padding: 1rem 3.7rem;
        transition: all ease-in-out 0.5s;
      }
    }
  }
  .navbar__toggler {
    color: #2b2b2b;
    display: none;
  }
}
//MEDIA QUERIES
@media only screen and (max-width: 1000px) {
   .logo__img {
    max-width: 70px !important;
    height: auto;
  }
  .translate__wrapper{
    margin-right: 2rem !important;
  }
  h5{
    font-size: .5rem !important;
  }
  .navbar__toggler {
    display: block !important;
    cursor: pointer;
    padding-right: 2rem !important;
  }
  ul {
    background: #000;
    flex-direction: column;
    position: absolute;
    padding: 23rem 2rem;
    left: 0;
    top: 0%;
    line-height: 4rem;
    display: none !important;
    z-index: 1000;
    li a {
      color: #fff !important;
      line-height: 5rem;
      margin-top: 2rem !important;
    }
  }
  .show__nav {
    display: block !important;
    transition: all ease-in-out 0.5s;
  }
}

.fix__nav{
    position: fixed;
    top: 0; 
    width: 100%;
    z-index: 100000 !important;
    background: #fff;
    padding: .8rem 0;
    transition: all ease-in-out .5s;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.10);
}
</style>
