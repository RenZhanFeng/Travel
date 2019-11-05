<template>
    <div class="recommend">
        <div class="recommend-title">
            <img class="recommend-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="img">
            <span class="recommend-title-desc">猜你喜欢</span>
        </div>
        <ul class="recommend-content">
            <router-link
                    tag="li"
                    class="recommend-content-item clearfix border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    :to="'/detail/' + item.id">
                <a href="#" class="item-content">
                    <div class="item-img-wrap"><img :src="item.imgUrl" alt="img"></div>
                    <div class="item-content-info">
                        <div class="item-content-info-title">{{item.title}}</div>
                        <div class="item-content-info-comment">
                            <span class="iconfont xingxing">&#xe647;&#xe647;&#xe647;&#xe647;&#xe647;</span>
                            <span class="info-comment-text"><span>{{item.commentText}}</span>条评论</span>
                        </div>
                        <div class="item-content-info-price">
                            <span>￥<em class="price">{{item.price}}</em>
                            </span>起
                        </div>
                    </div>
                    <div class="item-feature">
                        <div class="item-feature-text">{{item.feature}}</div>
                    </div>
                </a>
                <div>
                </div>
            </router-link>
            </ul>
        <a href="#" class="moreoPtion">查看所有产品</a>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            list:Array
        },
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

    .recommend{
        margin-top:.2rem;
        background $allbackgroundColor;
    }
    .recommend-title{
        padding:.14rem 0 .26rem;
    }
    .recommend-title-img{
        width:.3rem;
        height:.3rem;
        margin-left:.2rem;
        vertical-align :top
    }
        .clearfix:after{
            content "";
            display block;
            height 0;
            clear both;
            visibility hidden;
        }
    .recommend-title-desc{
        margin-left .08rem;
        font-size .30rem;
    }

    .recommend-content{
        margin-left:.2rem
    }
    .recommend-content-item{
        padding:.2rem 0;
    }
    .item-content{
        display block;
        width 100%;
        height 100%;
    }
    .item-img-wrap{
        float:left;
        width 2rem;
        height 2rem;
    }
    .item-img-wrap img{
        display block;
        width 100%;
        height 100%;
    }
    .item-content-info{
        overflow:hidden;
        padding-left .22rem;
    }
    .item-content-info-title{
        width 100%
        margin-top:.26rem;
        height .44rem;
        color $titleColor;
        font-size .32rem;
        line-height .44rem;
        ellipsis();
    }
    .item-content-info-comment{
        margin-top .14rem;
    }
    .xingxing{
        color: #ffb436;
        font-size .2rem;
    }
    .info-comment-text{
        color $desc;
        font-size .24rem;
        line-height .34rem;
        margin-left .3rem;
    }
    .item-content-info-price{
        margin-top:.22rem;
        color: $desc;
        font-size .24rem;
        line-height .4rem;
    }
    .item-content-info-price span{
        color #ff8300;
    }
    .price{
        font-size .4rem;
    }
    .item-feature{
        display inline-block;
        margin-top .48rem;
        margin-right .24rem;
        background #fff9f9;
        padding .04rem .1rem;
        color #f55;
        font-size .24rem;
        line-height .34rem;
    }
    .moreoPtion{
        display block;
        padding:.2rem 0;
        color: #00afc7;
        font-size .28rem;
        line-height .4rem;
        text-align center;
    }
</style>