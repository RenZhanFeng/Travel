<template>
    <div>
        <h2>周末去哪儿</h2>
        <ul>
            <li class="wk-item" v-for="item of list" :key="item.id">
                <a href="#" >
                    <div class="imgWrap"><img :src="item.imgUrl" alt="img"></div>
                    <div class="wk-product-info">
                        <p class="product-name">{{item.productName}}</p>
                        <p class="product-desc">{{item.productDesc}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        props:{
            list:Array
        },
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

    h2{
        height: .8rem;
        line-height .8rem;
        padding-left .26rem;
        color: #212121
    }
    .wk-item{
        background: #ffffff;
        margin-bottom:.15rem;
    }
    .imgWrap{
        overflow hidden;
        height:0;
        padding-bottom:37.4376%;
    }
    .imgWrap img{
        width 100%;
    }
    .wk-product-info{
        padding:.14rem .2rem .2rem .2rem;
    }
    .product-name{
        color: $titleColor;
        font-size .28rem;
        line-height .48rem;
    }
    .product-desc{
        color $desc;
        font-size .24rem;
        line-height .42rem;
    }
    .product-name,.product-desc{
        padding-right 1.4rem;
        ellipsis();
    }
</style>