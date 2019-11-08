<template>
    <div class="main">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
            <detail-base-info></detail-base-info>
            <detail-recommend :list="recommendList"></detail-recommend>
            <detail-list :list="list"></detail-list>
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
                sightName:'',
                bannerImg:'',
                gallaryImgs:[],
                recommendList:[],
                list:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('../../../mock/detail.json?id='+this.$route.params.id)
                    .then(this.getDetailInfoSucc);
            },
            getDetailInfoSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    this.recommendList = data.recommendList;
                    this.list = data.categoryList;
                }
            }
        },
        mounted(){
            this.getDetailInfo();
        },
        activated() {
            this.getDetailInfo();
        }

    }
</script>

<style scoped lang="stylus">
    .main{
        background: #f3f3f3;
    }
</style>