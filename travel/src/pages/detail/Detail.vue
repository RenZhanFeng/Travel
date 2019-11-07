<template>
    <div class="main">
        <detail-banner></detail-banner>
        <detail-header></detail-header>

            <detail-base-info></detail-base-info>
            <detail-recommend :list="recommendList"></detail-recommend>
            <detail-list></detail-list>

        <detail-footer></detail-footer>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailBaseInfo from './components/BaseInfo'
    import DetailList from './components/List'
    import DetailRecommend from './components/Recommend'
    import DetailFooter from '../home/components/Footer'
    import axios from 'axios'

    export default {
        name: "Detail",
        components:{
            DetailBanner,
            DetailHeader,
            DetailBaseInfo,
            DetailList,
            DetailRecommend,
            DetailFooter
        },
        data(){
            return{
                recommendList:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('../../../mock/detail.json')
                    .then(this.getDetailInfoSucc);
            },
            getDetailInfoSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.recommendList = data.recommendList;
                }
            }
        },
        mounted(){
            this.getDetailInfo();
        },

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