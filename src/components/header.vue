<template lang="jade">
    nav#headerbar
        .wrap
            ul.nav.inblock
                li
                    router-link(to="/", exact) 首页
                li
                    router-link(to="/mobile") 移动开发
                li
                    router-link(to="/jslab") JS实验室
                li(v-if='!loginState')
                    router-link(to="/login") 登录
            .searchBox.inblock
                input.searchField(type='text', placeholder='Search...', @input='input')
                svg.icon.icon-search(aria-hidden="true", @dblclick.prevent='dblclick($event)')
                    use(xlink:href="#icon-search")

</template>

<script>
    import login from '~modules/login'
    
    export default {
        data(){
            return {
                loginState:false
            }
        },
        components:{

        },
        mounted(){
            this.$nextTick(()=>{
                
            });
        },
        methods:{
            input(){
                
            },
            dblclick(){
                this.$router.push({path:'/ue'})
            }
        }
    }
    
</script>