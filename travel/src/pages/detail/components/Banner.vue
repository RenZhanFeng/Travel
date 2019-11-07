<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1910/6f/6f3fa8d8f8e14b66a3.water.jpg_600x330_c2bbb749.jpg" alt="img">
            <div class="banner-info">
                <div class="banner-title">深圳欢乐谷(AAAAA景区)</div>
                <div class="banner-number">
                    <div class="banner-number-content">
                        <span class="iconfont">&#xe691;</span>
                        <span>51</span>
                    </div>
                </div>
            </div>
        </div>

        <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </div>
</template>

<script>
    import CommonGallery from '../../../components/gallery/Gallery'
    export default {
        name: "DetailBanner",
        data(){
            return{
                showGallery:false,
                imgs:['http://img1.qunarzz.com/sight/p0/1503/e7/e7b8f9817f197d28.water.jpg_r_800x800_e6fb7122.jpg',
                    'http://img1.qunarzz.com/sight/p0/1503/99/99c2465a38025482.water.jpg_r_800x800_33930068.jpg']
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