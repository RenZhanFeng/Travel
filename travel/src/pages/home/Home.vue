<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
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

    export default {
        name: "Home",
        components:{
            HomeHeader:HomeHeader,
            HomeSwiper:HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
            HomeFooter
        }
    }
</script>

<style scoped>
    .home{
        background: #f3f3f3;
    }
</style>