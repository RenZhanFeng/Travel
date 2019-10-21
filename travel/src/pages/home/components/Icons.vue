<template>
    <div class="icons">
        <swiper  :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="img">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data (){
            return{
                swiperOption:{

                },
                iconList:[{
                    id:'001',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/bus.png',
                    desc:'汽车票轮船票还有什么票'
            },{
                    id:'002',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/tuan.png',
                    desc:'旅游团购'
                },{
                    id:'003',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
                    desc:'自由行'
                },{
                    id:'004',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/car.png',
                    desc:'专车自驾'
                },{
                    id:'005',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
                    desc:'周边短途'
                },{
                    id:'006',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/jr.png',
                    desc:'金融理财'
                },{
                    id:'007',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/card.png',
                    desc:'保险车险'
                },{
                    id:'008',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/travel.png',
                    desc:'攻略'
                },{
                    id:'009',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/youlun.png',
                    desc:'邮轮'
                },{
                id:'010',
                    imgUrl:'//s.qunarzz.com/homenode/images/touchheader/oversea.png',
                    desc:'换外币'
            }]

            }
        },
        computed:{
            pages () {
                const pages =[];
                this.iconList.forEach((item,index) => {
                    const  page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .icons >>> .swiper-container{
        width: 100%;
        height: 0;
        padding-bottom: 50%;
    }
    .icon{
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        padding-bottom: 25%;
    }
    .icon-img{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:.44rem;
        box-sizing: border-box;
        padding:.25rem;
    }
    .icon-img-content{
        display block;
        margin: 0 auto;
        height 100%;
    }
    .icon-desc{
        position:absolute;
        left:0;
        right:0;
        bottom:.0
        height: .44rem;
        line-height: .44rem;
        color:$darkTextColor;
        text-align center;
        padding:0 .2rem;
        ellipsis();
    }
</style>