<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons  :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekenList"></home-weekend>
        <home-footer></home-footer>
    </div>

</template>

<script>
    import HomeHeader from'./components/Header'
    import HomeSwiper from'./components/Swiper'
    import HomeIcons from'./components/Icons'
    import HomeRecommend from'./components/Recommend'
    import HomeWeekend from'./components/Weekend'
    import HomeFooter from './components/Footer'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "Home",
        components:{
            HomeHeader:HomeHeader,
            HomeSwiper:HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
            HomeFooter
        },
        data (){
            return{
                lastCity:'',
                swiperList: [],
                iconList:[],
                recommendList:[],
                weekenList:[]
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getHomeInfo (){
                axios.get('../../../mock/index.json?city='+this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res){
                res = res.data;
              if (res.ret && res.data) {
                  const data = res.data;
                  this.swiperList = data.swiperList;
                  this.iconList = data.iconList;
                  this.recommendList = data.recommendList;
                  this.weekenList = data.weekenList;
              }
            }
        },
        mounted (){
            this.lastCity = this.city;
            this.getHomeInfo()
        },
        activated() {
            if (this.lastCity !== this.city){
                this.lastCity = this.city;
                this.getHomeInfo()
            }
        }

    }
</script>

<style scoped>
    .home{
        background: #f3f3f3;
    }
</style>