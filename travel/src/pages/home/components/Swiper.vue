<template>
        <div class="wrapper">
            <swiper :options="swiperOption" v-if="showSwiper">
                <!-- slides -->
                <swiper-slide v-for="item of list" :key="item.id">
                    <img class="siwper-img" :src="item.imgUrl" alt="img">
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
                <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>
        </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
            list:Array
        },
        data:function () {
            return{
                 swiperOption:{
                     pagination:'.swiper-pagination',
                     autoplay: 3000,
                     loop:true
                 }
            }
        },
        computed:{
            showSwiper (){
                return this.list.length;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .wrapper >>>.swiper-pagination-bullet-active{
        background: #ffffff;
    }//>>>可以让这里的样式不受scoped的限制，可以穿透到 .wrapper下面
    .wrapper{
        overflow hidden;
        width 100%;
        height 0;
        padding-bottom 30.47%
    }
    .siwper-img{
        width:100%;
    }
</style>