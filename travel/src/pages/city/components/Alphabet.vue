<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "Alphabet",
        props:{
            cities:Object
        },
        data(){
            return{
                touchStatus:false,
                startY:0
            }
        },
        updated(){
            this.startY = this.$refs['A'][0].offsetTop;
        },
        computed:{
            letters (){
                const letters = [];
                for(let i in this.cities){
                    letters.push(i)
                }
                return letters;
            }
        },
        methods:{
            handleLetterClick (e){
                this.$emit('change',e.target.innerText);
            },
            handleTouchStart (){
                this.touchStatus = true
            },
            handleTouchMove (e){
                if (this.touchStatus){


                            const touchY = e.touches[0].clientY - 89;
                            const index = Math.floor((touchY - this.startY)/ 20);
                            if (index >= 0 && index < this.letters.length){
                                this.$emit('change',this.letters[index]);
                            }

                }
            },
            handleTouchEnd (){
                this.touchStatus = false
            }

        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    .list{
        display flex;
        flex-direction column;
        justify-content center;
        position absolute;
        top:1.58rem;
        right 0;
        bottom 0;
        width .4rem;
        text-align center;
    }
    .item{
        color $bgColor;
        line-height .4rem;
    }
</style>