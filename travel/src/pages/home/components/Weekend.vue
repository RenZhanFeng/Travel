<template>
    <div>
        <h2>周末去哪儿</h2>
        <ul>
            <li class="wk-item" v-for="item of weekenList" :key="item.id">
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
        data (){
            return{
                weekenList:[{
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                    productName:'深圳周边游',
                    productDesc:'远离城市拥堵，去周边开启清新假期吧。'
                },{
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
                    productName:'清远周边逛',
                    productDesc:'人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
                },{
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    productName:'浮在海上的绿洲',
                    productDesc:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
                },{
                    id:'004',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                    productName:'欢乐长隆',
                    productDesc:'世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
                }]
            }
        }
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