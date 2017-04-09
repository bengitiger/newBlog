<template lang='jade'>
    aside#sidebar(:class='asideStatusClass')
        .asidebg
        .asideMenu
            a.asideToggle(href='javascript:;', @click='asideToggle')
                i.line
            .avatarBox
                .avatar
                    img(src='/static/header_img.jpg')
                p.userName key done
            ul.menuList(@click='asideToggle')
                li
                    svg.icon(aria-hidden="true")
                        use(xlink:href="#icon-index")
                    router-link(to="", exact) 首页
                li
                    svg.icon(aria-hidden="true")
                        use(xlink:href="#icon-mobile")
                    router-link(to="/mobile") 移动开发
                li
                    svg.icon(aria-hidden="true")
                        use(xlink:href="#icon-project")
                    router-link(to="/jslab") JS实验室
                li(v-if='!loginState')
                    svg.icon(aria-hidden="true")
                        use(xlink:href="#icon-login")
                    router-link(to="/login") 登录
            .logstatus(v-if='loginState')
                svg.icon(aria-hidden="true")
                    use(xlink:href="#icon-logout")
                a.inblock.cfff(@click='logout', href='javascript:;') 退出登录

</template>

<script>
    import { mapActions } from 'vuex'
    import logout from '~modules/login'

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
                let html=document.getElementsByTagName('html')[0];
                if(this.asideStatusClass=='active'){
                    this.asideStatusClass='';
                    html.className='';
                }else{
                    this.asideStatusClass='active';
                    html.className='layerShow';
                }
            },
            logout(){
                
            }
        }
    }

</script>