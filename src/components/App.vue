<template lang="jade">
    #wrapper(:class='load')
        //- 侧边栏
        sidebar
        //- 头部
        headerbar
        
        transition(:name='transitionName')
            router-view
        
        //- 底部
        footerbar
</template>

<script>
    require('sass/base.scss')
    import store from 'store'
    import sidebar from 'components/sidebar.vue'
    import headerbar from 'components/header.vue'
    import footerbar from 'components/footer.vue'
    export default {
        data(){
            return {
                transitionName:'fade',
                load:''
            }
        },
        components: {
            sidebar,
            headerbar,
            footerbar
        },
        mounted(){
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.load='loaded'
                })
                
            })
        },
        watch: {
            /*'$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }*/
        },
        method:{
            
        }
    }
</script>
