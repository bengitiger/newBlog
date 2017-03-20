<template lang="jade">
    nav#headerbar
        // p(style='text-align:center;line-height:40px;border-bottom:1px solid #e7e7e7;') 旧版博客请访问: &emsp;<em style='color:#42b983'>https://</em>keydone.github.io/blog/backup
        .wrap
            ul.nav.inblock
                li
                    router-link(to="/blog", exact) 首页
                li
                    router-link(to="/blog/mobile") 移动开发
                li
                    router-link(to="/blog/jslab") JS实验室
                li(v-if='!loginState')
                    router-link(to="/blog/login") 登录
            .searchBox.inblock
                input.searchField(type='text', placeholder='Search...', @input='input')
                svg.icon.icon-search(aria-hidden="true", @dblclick.prevent='dblclick($event)')
                    use(xlink:href="#icon-search")

</template>

<script>
    import login from 'stores/login'
    
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
                this.$router.push({path:'/blog/ue'})
            }
        }
    }
    
</script>