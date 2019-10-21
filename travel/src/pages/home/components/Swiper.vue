<template>
        <div class="wrapper">
            <swiper :options="swiperOption" >
                <!-- slides -->
                <swiper-slide v-for="item of swiperList" :key="item.id">
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
        data:function () {
            return{
                 swiperOption:{
                     pagination:'.swiper-pagination',
                     autoplay: 3000,
                     loop:true
                 },
                swiperList:[{
                     id:'01',
                    imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/abe3418971067bd655fb2794d6e2eeec.jpg'
                },{
                     id:'02',
                    imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/b59b8db9f72eb8f54df5bf2155672e9c.jpg'
                },{
                    id:'03',
                    imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
                }]
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