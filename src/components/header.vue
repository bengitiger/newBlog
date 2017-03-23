<template lang="jade">
    nav#headerbar
        .wrap
            ul.nav.inblock
                li
                    a(href="/") 首页
                li
                    a(href="/mobile.html") 移动开发
                li
                    a(href="/jslab.html") JS实验室
                li(v-if='!loginState')
                    router-link(to="/login") 登录
            .searchBox.inblock(:class='searchCls')
                input.searchField(type='text', placeholder='Search...', v-model='searchTxt', @input='input', @focus='focus', @blur='blur')
                svg.icon.icon-search(aria-hidden="true", @dblclick.prevent='dblclick($event)')
                    use(xlink:href="#icon-search")

</template>

<script>
    import login from '~modules/login'
    
    export default {
        data(){
            return {
                loginState:false,
                searchCls:'',
                searchTxt:''
            }
        },
        components:{

        },
        mounted(){
            this.$nextTick(()=>{
                console.log(this.$router);
            });
        },
        methods:{
            focus(){
                this.searchCls='extend';
            },
            blur(){
                if(this.searchTxt==''){
                    this.searchCls='';
                }
            },
            input(){
                
            },
            dblclick(){
                this.$router.push({path:'/ue'})
            }
        }
    }
    
</script>