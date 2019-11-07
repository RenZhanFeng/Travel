<template>
    <div class="main">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="container">
            <detail-base-info></detail-base-info>
            <detail-list></detail-list>
        </div>
        <detail-footer></detail-footer>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailBaseInfo from './components/BaseInfo'
    import DetailList from './components/List'
    import DetailFooter from '../home/components/Footer'

    export default {
        name: "Detail",
        components:{
            DetailBanner,
            DetailHeader,
            DetailBaseInfo,
            DetailList,
            DetailFooter
        }
    }
</script>

<style scoped lang="stylus">
    .main{
        background: #f3f3f3;
    }
    .container{
        height 50rem;
    }
</style>