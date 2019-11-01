<template>
    <div class="list" ref="wrapper">
       <div>
           <div class="area">
               <div class="title">当前城市</div>
               <div class="button-list">
                   <div class="button-wrapper">
                       <div class="button">{{this.currentCity}}</div>
                   </div>

               </div>
           </div>
           <div class="area">
               <div class="title">热门城市</div>
               <div class="button-list">
                   <div class="button-wrapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityClick(item.name)">
                       <div class="button">{{item.name}}</div>
                   </div>

               </div>
           </div>

           <div class="area"
                v-for="(item,key) of cities"
                :key="key"
                :ref="key">
               <div class="title">{{key}}</div>
               <div class="item-list" >
                   <div class="item"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
               </div>
           </div>

       </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Bscroll from 'better-scroll'
    export default {
        name: "List",
        props:{
            hotCities:Array,
            cities:Object,
            letter:String
        },
        computed:{
            ...mapState({
                currentCity:'city'
            })
        },

        watch:{
            letter(){
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element)
            }
        },
        methods:{
            handleCityClick(city){
                this.$store.dispatch('changeCity',city);
                this.$router.push('/');
    }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper);
        },

    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    .list{
        overflow hidden;
        position absolute;
        top:1.78rem;
        left 0;
        right 0;
        bottom 0;
    }
    .title{
        color: $cityColor;
        font-size .26rem;
        line-height .54rem;
        background #eee;
        padding-left:.2rem;
    }
    .button-list{
        overflow hidden;
        padding :.1rem .6rem .1rem .1rem;
    }
    .button-wrapper{
        float left;
        width:33.33%;
    }
    .button{
        margin:.1rem;
        padding:.1rem 0;
        text-align center;
        border:.02rem solid #ccc;
        border-radius:.06rem;
    }
    .item-list{

    }
    .item{
        line-height .76rem;
        padding-left .2rem;
        border-bottom 0.01rem solid #ccc;
    }
</style>