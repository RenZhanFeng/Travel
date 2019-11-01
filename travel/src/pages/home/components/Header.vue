<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HomeHeader",
        computed:{
            ...mapState(['city'])
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    .header{
        display: flex;
        line-height: .86rem;
        background: $bgColor;
        color: #ffffff;
    }

    .header-left{
        width:.64rem;
        float: left;
    }
    .header-left .back-icon{
        text-align: center;
        font-size: .4rem;
    }
    .header-input{
        flex: 1;
        height: .6rem;
        line-height: .6rem;
        background: #ffffff;
        border-radius:.1rem;
        margin-top: .12rem;
        margin-left: .12rem;
        color:#ccc;
        padding-left: .2rem;
    }
    .header-right{
        float: right;
        text-align: center;
        color: #fff
        padding 0 .1rem;
    }
    .header-right .arrow-icon{
        font-size: .24rem;
        margin-left: -.04rem;
    }
</style>