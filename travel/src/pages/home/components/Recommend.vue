<template>
    <div class="recommend">
        <div class="recommend-title">
            <img class="recommend-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="img">
            <span class="recommend-title-desc">猜你喜欢</span>
        </div>
        <ul class="recommend-content">
            <li class="recommend-content-item clearfix border-bottom" v-for="item of recommendList" :key="item.id">
                <a href="#" class="item-content">
                    <div class="item-img-wrap"><img :src="item.imgURL" alt="img"></div>
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
            </li>
            </ul>
        <a href="#" class="moreoPtion">查看所有产品</a>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data (){
            return{
                recommendList:[{
                    id:'001',
                    imgURL:'http://img1.qunarzz.com/sight/p0/1910/1c/1c8f8e8a50115fa6a3.water.jpg_200x200_019b3281.jpg',
                    title:'深圳欢乐谷',
                    commentText:'34445',
                    price:'79',
                    feature:'万圣潮玩节，AR幻乐园'
                },{
                    id:'002',
                    imgURL:'http://img1.qunarzz.com/sight/p0/1910/e8/e8e2083829389f26a3.water.jpg_200x200_9704392c.jpg',
                    title:'世界之窗',
                    commentText:'49540',
                    price:'38.8',
                    feature:'巨龙来袭，万圣狂欢特惠39.9起'
                },{
                    id:'003',
                    imgURL:'http://img1.qunarzz.com/sight/p0/1910/40/4053f748753ef22ea3.water.png_200x200_ef6c7fa3.png',
                    title:'锦绣中华民俗村',
                    commentText:'29546',
                    price:'55',
                    feature:'万圣聊斋夜，一起去搞鬼'
                },{
                    id:'004',
                    imgURL:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
                    title:'小梅沙海洋世界',
                    commentText:'65141',
                    price:'146',
                    feature:'峡谷中的刺激游乐园~玩的就是心跳！'
                }]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

    @font-face {
        font-family: 'iconfont';   project id 1466551
        src: url('//at.alicdn.com/t/font_1466551_4vu2nmgc40a.eot');
        src: url('//at.alicdn.com/t/font_1466551_4vu2nmgc40a.eot?#iefix') format('embedded-opentype'),
                url('//at.alicdn.com/t/font_1466551_4vu2nmgc40a.woff2') format('woff2'),
                url('//at.alicdn.com/t/font_1466551_4vu2nmgc40a.woff') format('woff'),
                url('//at.alicdn.com/t/font_1466551_4vu2nmgc40a.ttf') format('truetype'),
                url('//at.alicdn.com/t/font_1466551_4vu2nmgc40a.svg#iconfont') format('svg');
    }


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