<template>
    <div>
        <div class="baseinfo">
            <div class="baseinfo-top">
                <div class="info-grade">
                    <div>
                        <span class="commentcard-score">4.9</span>
                        <span class="commentcard-text">分</span>
                        <span class="commentcard-desc">很棒</span>
                    </div>
                    <div>
                        <span class="totalcomment-num">34886条评论</span>
                        <span class="totalcomment-num">7条攻略</span>
                        <span class="iconfont rightArrow">&#xe74b;</span>
                    </div>
                </div>

                <div class="info-detail">
                    <div>
                        <span class="sightcard-title">景点简介</span>
                    </div>
                    <div>
                        <span class="sightcard-text">开放时间、贴士</span>
                        <span class="iconfont rightArrow">&#xe74b;</span>
                    </div>
                </div>
            </div>
            <div class="baseinfo-address">
                <p>
                    <span class="iconfont rightArrowA">&#xe611;</span>
                    广东省深圳市南山区华侨城侨城街1号
                    <span class="iconfont rightArrowB">&#xe74b;</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo"
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .baseinfo{
        position: relative;
        top:-.1rem;
        padding:.1rem .2rem 0 .2rem;
        margin-bottom .1rem;
        background:$allbackgroundColor;
        border-radius .1rem .1rem 0 0;
    }
    .baseinfo-top{
        display flex;
        flex 1;
        padding:.1rem 0 .2rem 0;
    }
    .info-grade,
    .info-detail{
        position: relative;
        width 100%;
    }
    .commentcard-score,
    .commentcard-text,
    .commentcard-desc{
        color:#ff8300;
    }
    .commentcard-score{
        font-size:.44rem;
    }
    .commentcard-text{
        font-size:.28rem;
    }
    .commentcard-desc{
        font-size:.28rem;
        margin-left: .2rem;
    }
    .totalcomment-num{
        display inline-block;
        font-size:.24rem;
        color:#9e9e9e;
        line-height .32rem;
        margin-right .2rem;
        margin-top .1rem;
    }
    .rightArrow,
    .rightArrowB{
        position absolute;
        right:.2rem;
        color: #9e9e9e;
        font-size .34rem;
    }
    .rightArrow{
        top:.3rem;
    }
    .rightArrowA{
        color #9e9e9e;
        margin-right .1rem;
    }
    .sightcard-title{
        font-size:.28rem;
        color:#212121;
        line-height .48rem;
        padding-left .3rem;
    }
    .sightcard-text{
        display inline-block;
        font-size:.24rem;
        color:#9e9e9e;
        padding-left .3rem;
        margin-top .1rem;
    }
    .baseinfo-address{
        position relative;
        padding:.2rem 0;
        line-height .36rem;
        color: #212121;
    }
    .baseinfo-address p{
        ellipsis();
        padding:0 .66rem 0 .3rem;
        margin-left -.33rem;
    }


</style>