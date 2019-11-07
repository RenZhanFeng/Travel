<template>
    <div class="container">
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title">
                <span class="item-title-icon"></span>
                <span class="item-title-desc">{{item.title}}</span>
                <span class="price">
                     {{item.priceIcon}}
                    <em class="price-num">{{item.price}}</em>
                    <span class="ticket-numword">{{item.pricebuttom}}</span>
                </span>
            </div>


            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
        props:{
            list:Array
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .container{
        margin-bottom .2rem;
    }
    .item{
        background:#ffffff;
    }
    .item-title{
        position relative;
        line-height .95rem;
        font-size .32rem;
        padding 0 .2rem;
        border-bottom 1px solid #cacaca2b;
        white-space pre-wrap
    }
        .item-title-desc{
            display inline-block;
            line-height .5rem;
            width 70%;
        }
    .item-title-icon{
        display: inline-block;
        position: relative;
        left: .06rem;
        top: .06rem;
        width: .36rem;
        height: .36rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
    .item-children{
        margin-left -0.5rem;
    }
    .item-children .item-title-icon{
        background:none;
    }
    .price{
        position absolute
        right: .46rem;
        color: #ff9800;
        font-size: .24rem;
        word-spacing:-0.1rem;
    }
    .price-num{
        font-size: .4rem;
        margin-left: .04rem;
    }
    .ticket-numword{
        color: #9e9e9e;
    }
</style>