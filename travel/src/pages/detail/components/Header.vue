<template>
    <div>
       <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
           <div class="iconfont header-back">&#xe624;</div>
       </router-link>

        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="div" to="/" class="">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            <h1>景点详情</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data(){
            return{
                showAbs:true,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                let scroll = document.documentElement.scrollTop;
                if(scroll > 20){
                    let opacity = scroll / 80;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle.opacity = opacity;
                    this.showAbs = false;
                }else {
                    this.showAbs = true;
                }
            }
        },
        activated() {
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated() {
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    .header-abs{
        position: absolute;
        top:.2rem;
        left:.2rem;
        width:.8rem;
        height:.8rem;
        line-height:.8rem;
        border-radius:.4rem;
        text-align:center;
        background:rgba(0,0,0,.8);
    }
    .header-back{
        color white;
        font-size:.4rem;
    }

    .header-fixed{
        position fixed;
        top:0;
        left:0;
        z-index:99;
        width:100%;
        height .88rem;
        background $bgColor;
    }
    .header-fixed-back{
        position: absolute;
        left:0;
        top:0;
        width:.8rem;
        height .88rem;
        line-height :.88rem;
        font-size .36rem;
        color: $allbackgroundColor;
        text-align:center;
        font-weight bold;
    }
    .header-fixed h1{
        margin:0 1rem;
        line-height .88rem;
        font-size .32rem;
        text-align center;
        color: $allbackgroundColor;
        overflow hidden;
        white-space nowrap;
        text-overflow ellipsis;
    }

</style>