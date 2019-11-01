<template>
    <div>
        <div class="search">
            <input type="text"
                   class="search-input"
                   placeholder="输入城市名或拼音"
                   v-model="keyword">
        </div>

        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item"
                    v-for="item of list"
                    :key="item.id">{{item.name}}</li>
                <li class="search-item" v-show="hasData">没有找到匹配数据</li>

            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "Search",
        props:{
            cities:Object
        },
        data(){
            return{
                keyword:'',
                list:[],
                timer:null
            }
        },
        computed:{
            hasData(){
                return !this.list.length;
            }
        },
        watch:{
            keyword(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyword){
                    this.list = [];
                    return
                }
                this.timer = setTimeout(() =>{
                    const result = [];
                    for (let i in this.cities) {
                        this.cities[i].forEach((value)=>{
                            if(value.spell.indexOf(this.keyword) > -1 ||
                                value.name.indexOf(this.keyword) > -1){
                                result.push(value);
                            }
                        })
                    }
                    this.list = result;
                },100)
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        }

    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    .search{
        height: .72rem;
        padding .1rem;
        background: $bgColor;
    }
    .search-input{
        box-sizing border-box;
        width 100%;
        height .62rem;
        line-height .62rem;
        padding: 0 0.1rem;
        text-align center;
        border-radius .06rem;
        color $cityColor;
    }
    .search-content{
        position absolute;
        z-index 1;
        overflow hidden;
        top:1.78rem;
        left 0;
        right 0;
        bottom:0;
        background: #fff;
    }
    .search-item{
        color: $cityColor;
        line-height .62rem;
        padding-left .2rem;
        border-bottom .02rem solid #cacaca;
    }

</style>