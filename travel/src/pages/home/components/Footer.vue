<template>

    <div>
        <div class="warn">
            <span class="iconfont warn-icon">&#xe6a2;</span>
            <div class="warn-info">
                <span>票面价</span>
                是指通过景区指定窗口售卖的纸质门票上标注的价格
            </div>
        </div>
        <div>
            <ul class="footer-nav" id="footer-nav-id">
                <li class="footer-nav-item" v-for="item of footerNavList" :key="item.id">
                    <a href="#">
                        <span class="icon" :style= item.imgURL></span>
                        <span class="title">{{item.title}}</span>
                    </a>
                </li>

                <li class="footer-nav-item nav-top down" data-attr="down" id="buttom" @click="shiftHeight">
                    <span id="desc" v-text="moreOrClose"></span>
                </li>
            </ul>
            <ul class="footer-nav-login">
                <li class="login-item"><a href="#">登录</a></li>
                <li class="login-item"><a href="#">我的订单</a></li>
                <li class="login-item"><a href="#">最近浏览</a></li>
                <li class="login-item"><a href="#">关于我们</a></li>
            </ul>
            <ul class="switchover">
                <li><a href="#" style="color:black">触屏版</a></li>
                <li><a href="#">电脑版</a></li>
            </ul>
            <div class="copyright">
                <span>Qunar 京ICP备05021087</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HomeFooter",
        methods:{
            shiftHeight:function () {
                let UL = document.getElementById('footer-nav-id');
                let buttom = document.getElementById('buttom');

                if(UL.style.height === '2.2rem'){
                    UL.style.height = '.5rem';
                    buttom.style.top = '.16rem';
                    this.moreOrClose = '更多';
                    buttom.className = 'footer-nav-item nav-top down'
                }else{
                    UL.style.height = '2.2rem';
                    buttom.style.top = '1.94rem';
                    this.moreOrClose = '收起';
                    buttom.className = 'footer-nav-item nav-top up'
                }
            }
        },
        data (){
            return {
                moreOrClose:'更多',
                footerNavList:[{
                    id:'001',
                    imgURL:'',
                    title:'机票'
                },{
                    id:'002',
                    imgURL:'background-position:-25px 0;',
                    title:'酒店'
                },{
                    id:'003',
                    imgURL:'background-position:-150px 0px;',
                    title:'公寓'
                },{
                    id:'004',
                    imgURL:'background-position:-50px 0;',
                    title:'团购'
                },{
                    id:'005',
                    imgURL:'background-position:-50px -25px;',
                    title:'火车票'
                },{
                    id:'006',
                    imgURL:'background-position:-75px 0;',
                    title:'景色'
                },{
                    id:'007',
                    imgURL:'background-position:-100px 0;',
                    title:'接送机'
                },{
                    id:'008',
                    imgURL:'background-position:0 -25px;',
                    title:'度假'
                },{
                    id:'009',
                    imgURL:'background-position:-75px -25px;',
                    title:'攻略'
                },{
                    id:'010',
                    imgURL:'background-position:-100px -25px;',
                    title:'旅图'
                },{
                    id:'011',
                    imgURL:'background-position:-125px 0;',
                    title:'车车'
                },{
                    id:'012',
                    imgURL:'background-position:-125px -25px;',
                    title:'当地人'
                }]
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

    @font-face {
        font-family: 'iconfont';  /* project id 1466551 */
        src: url('//at.alicdn.com/t/font_1466551_c2wbra39mck.eot');
        src: url('//at.alicdn.com/t/font_1466551_c2wbra39mck.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1466551_c2wbra39mck.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1466551_c2wbra39mck.woff') format('woff'),
        url('//at.alicdn.com/t/font_1466551_c2wbra39mck.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1466551_c2wbra39mck.svg#iconfont') format('svg');
    }

    .warn{
        margin-top .1rem;
        padding:.14rem .1rem;
        font-size:.24rem;
        background: #fff;
        color: $desc;
    }
    .warn-icon{
        float left;
        display block;
        width .24rem;
        line-height .2rem;
    }
    .warn-info{
        margin-left .4rem;
    }
    .warn-info span{
        font-weight:bold;
    }

    .footer-nav{
        position: relative;
        overflow hidden;
        height:.5rem;
        width:6rem;
        margin:0 auto;
        padding:.2rem .2rem 0 .2rem;
    }
    .footer-nav-item{
        float left;
        padding-left .2rem;
        height .62rem;
        width:1.3rem;
    }
        .footer-nav-item a{
            display block;
            height:.44rem;
            width 100%;
            font-size:.24rem;
            color: #9e9e9e
        }
    .icon{
        float left;
        width .44rem;
        height .44rem;
        background url("../../../assets/nav1.png") 0 0 no-repeat;
        background-size:175px 50px;
    }
    .title{
        display inline-block;
        margin:.1rem 0 0 .1rem;
        border-bottom 1px solid #acacac;
        font-size .20rem;
    }

    .nav-top{
        position: absolute;
        right: .12rem;
        top:.16rem;
        width 1.4rem;
        font-size: .28rem;
        color: #9e9e9e;
        background #f3f3f3;
    }
    .nav-top span{
        display inline-block;
        border-left 1px solid #acacac;
        padding-left .6rem;
        margin-top .1rem;
        font-weight bold;
    }
    .down:after,.up:after{
        content '';
        position absolute;
        top:.14rem;
        left .5rem;
        width .24rem;
        height .24rem;

    }
    .down:after{
        background url("../../../assets/down.png")0 0 no-repeat;
        background-size: 12px 12px ;
    }
    .up:after{
        background url("../../../assets/up.png")0 0 no-repeat;
        background-size: 12px 12px ;
    }

    .footer-nav-login{
        width 100%;
        height .78rem;
        text-align center;
        border-bottom 1px solid #cacaca;
    }
    .footer-nav-login li{
        display inline-block;
        padding-left .4rem;
    }
    .footer-nav-login li a{
        color #25a4bb;
        font-size .28rem;
        line-height .78rem;
    }

    .switchover{
        padding .2rem 0 0 0;
        text-align center;
    }
    .switchover li{
        display inline-block;
        margin:0 .3rem;
    }
    .copyright{
        color: #9e9e9e;
        text-align center;
        font-size .28rem;
        padding .2rem;
    }
</style>