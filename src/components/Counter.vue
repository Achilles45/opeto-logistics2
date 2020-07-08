<template>
  <div class="counter__wrapper">
     <div class="container">
         <div class="counter__conter">
                  <div class="counter__card">
                  <!-- <img src="../assets/images/ship.svg" class="icons" alt=""> -->
                        <div class="counter" data-target="90000">0</div>
                        <h5>DELIVERED PACKAGES</h5>
                </div>
                <div class="counter__card">
                   <!-- <img src="../assets/images/bus.svg" class="icons" alt=""> -->
                        <div class="counter" data-target="40000">0</div>
                        <h5>SATISFIED CLIENTS</h5>
                </div>
                <div class="counter__card">
                  <!-- <img src="../assets/images/track.svg" class="icons" alt=""> -->
                        <div class="counter" data-target="60000">0</div>
                        <h5>TOONS OF GOODS</h5>
                </div>
                <!-- <div class="counter__card">
                    <img src="../assets/images/house.svg" class="icons" alt="">
                        <div class="counter" data-target="3000">0</div>
                        <h5>Packages in our Warehouses</h5>
                </div> -->
         </div>
     </div>
  </div>
</template>
f
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.counter()
    },
    methods:{
        counter(){
            //Get all counters
            const counters = document.querySelectorAll('.counter');
            let speed = 2000;
            counters.forEach(counter =>{
                const updateCount = () =>{
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if(count < target){
                        counter.innerText = count + inc;
                        setTimeout(() => {
                            updateCount()
                        }, 1);
                    }else {
                        count.innerText = target;
                    }
                }
                updateCount()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.counter__wrapper{
    background: url('../assets/images/banner3.png');
    background-position: center;
    background-size: cover;
    margin-top: 3rem;
    padding: 4rem 0;
    .counter__conter{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 30px;
        .counter__card{
            text-align: center;
            .icons{
                max-width: 50px;
                height: auto;
            }
            h5{
                font-weight: bold;
            }
             .counter{
                font-size: 1.5rem;
                padding-top: .8rem;
            }
        }
    }
   
}
</style>