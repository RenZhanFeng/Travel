<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="siwper-img" :src="item" alt="img">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
                <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallery",
        props:{
            imgs:{
                type:Array
            }
        },
        data (){
            return{
                swiperOption:{
                    pagination:'.swiper-pagination',
                    paginationType:'fraction',
                    observeParents:true,
                    observer:true
                }
            }
        },
        methods:{
            handleGalleryClick(){
                this.$emit('close');
            }
        }

    }
</script>

<style scoped lang="stylus">
    .container >>> .swiper-container{
        overflow inherit;
    }
    .container{
        display flex;
        flex-direction column;
        justify-content center;
        position: fixed;
        left 0;
        right:0;
        top:0;
        bottom:0;
        z-index:99;
        background: #000;
    }
   .wrapper{
        height 0;
        width 100%;
        padding-bottom 100%;
    }
    .siwper-img{
        width 100%;
    }
    .swiper-pagination{
        color #fff;
        bottom -1rem;
    }
</style>