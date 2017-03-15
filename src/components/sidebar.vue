<template lang='jade'>
    aside#sidebar(:class='asideStatusClass')
        .asidebg
        .asideMenu
            a.asideToggle(href='javascript:;', @click='asideToggle')
                i.line
            .avatarBox
                .avatar
                    img(src='../assets/images/header_img.jpg')
                p.userName keydone
            ul.menuList(@click='asideToggle')
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
            .logstatus(v-if='loginState')
                i.iconfont.icon-logout
                a.inblock.cfff(@click='logout', href='javascript:;') 退出登录

</template>

<script>
    import { mapActions } from 'vuex'
    import logout from 'stores/login'

    export default {
        data(){
            return {
                loginState:true,
                asideStatusClass:''
            }
        },
        methods:{
            ...mapActions(['loginState']),
            asideToggle(){
                if(this.asideStatusClass=='active'){
                    this.asideStatusClass='';
                }else{
                    this.asideStatusClass='active';
                }
            },
            logout(){
                
            }
        }
    }

</script>