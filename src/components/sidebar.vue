<template lang='jade'>
    aside#sidebar
        .avatarBox
            .avatar
                img(src='xxx')
            p.userName keydone
        ul.menuList
            li
                i.iconfont.icon-home
                router-link(to="/blog", exact) 首页
            li
                i.iconfont.icon-mobile
                router-link(to="/blog/mobile") 移动开发
            li
                i.iconfont.icon-project
                router-link(to="/blog/jslab") JS实验室
            li(v-if='!loginState')
                i.iconfont.icon-login
                router-link(to="/blog/login") 登录
        a.logstatus(v-if='loginState', @click='logout', href='javascript:;') <i class='iconfont icon-logout'></i>退出登录

</template>

<script>
    import { mapActions } from 'vuex'
    import logout from 'stores/login'

    export default {
        data(){
            return {
                loginState:false
            }
        },
        methods:{
            logout(){
                
            }
        }
    }

</script>