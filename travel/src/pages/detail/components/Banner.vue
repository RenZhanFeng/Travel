<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="img">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-number">
                    <div class="banner-number-content">
                        <span class="iconfont">&#xe691;</span>
                        <span>{{this.gallaryImgs.length}}</span>
                    </div>
                </div>
            </div>
        </div>

        <common-gallery :imgs="gallaryImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </div>
</template>

<script>
    import CommonGallery from '../../../components/gallery/Gallery'
    export default {
        name: "DetailBanner",
        props:{
            sightName:String,
            bannerImg:String,
            gallaryImgs:Array
        },
        data(){
            return{
                showGallery:false
                }
        },
        methods:{
            handleBannerClick(){
                this.showGallery = true;
            },
            handleGalleryClose(){
                this.showGallery = false;
            }
        },
        components:{
            CommonGallery
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

    .banner{
        overflow hidden;
        height 0;
        padding-bottom 55%;
        position relative;
    }
    .banner-img{
        width 100%;
    }
    .banner-info{
        display flex
        position absolute;
        left 0;
        bottom .15rem;
        width 100%;
    }
    .banner-title{
        flex 1;
        padding-left .1rem;
        color: #fff;
        font-size .30rem;
        ellipsis()
    }
    .banner-number{
        flex 1;
    }
    .banner-number-content{
        box-sizing border-box;
        margin-right .1rem;
        line-height .4rem;
        float right;
        width 1rem;
        height .4rem;
        text-align center;
        color: #fff;
        background rgba(0,0,0,.5);
        border-radius .2rem;
    }
</style>