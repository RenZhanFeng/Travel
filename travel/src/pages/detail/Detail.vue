<template>
    <div class="main">
        <detail-banner></detail-banner>
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
                recommendList:[],
                list:[{
                    "title": "万圣潮玩节",
                    "children": [{
                        "title": "潮玩节特惠夜场双人票",
                        "priceIcon" : "￥",
                        "price" : "99.8",
                        "pricebuttom" : "起"
                    },{
                        "title": "潮玩节夜场票",
                        "priceIcon" : "￥",
                        "price" : "49.9",
                        "pricebuttom" : "起"
                    }]
                }, {
                    "title": "日夜场通玩票",
                    "children": [{
                        "title": "[双十一预售]日夜场通玩成人票",
                        "priceIcon" : "￥",
                        "price" : "115",
                        "pricebuttom" : "起"
                    },{
                        "title": "[提前1天预订]成人票",
                        "priceIcon" : "￥",
                        "price" : "220",
                        "pricebuttom" : "起"
                    },{
                        "title": "[提前1天预订]长者/儿童票",
                        "priceIcon" : "￥",
                        "price" : "120",
                        "pricebuttom" : "起"
                    },]
                },{
                    "title": "年卡",
                    "children": [{
                        "title": "深圳欢乐谷成人年卡",
                        "priceIcon" : "￥",
                        "price" : "440",
                        "pricebuttom" : "起"
                    }]
                },{
                    "title": "团队票",
                    "children": [{
                        "title": "深圳欢乐谷全天门票儿童票(幼儿多人票,10人起订)",
                        "priceIcon" : "￥",
                        "price" : "75",
                        "pricebuttom" : "起"
                    },{
                        "title": "学生团队票",
                        "priceIcon" : "￥",
                        "price" : "130",
                        "pricebuttom" : "起"
                    }]
                }]
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
</style>