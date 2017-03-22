<template lang='jade'>
    #login
        h2.signTitle 登录账号
        #signBox
            p.explain(:class='wrongUser?"wrongfield":""') {{wrongUser?'账号不正确!':'请输入账号或邮箱'}}
            .inputBox
                input(type='text', v-model='user.account', @blur='blur("user")')
            p.explain(:class='wrongPassword?"wrongfield":""') {{wrongPassword?'请输入正确的密码':'请输入您的密码'}}
            .inputBox
                input(type='password', v-model='user.password', @blur='blur()')

            a.signBtn(href='javascript:;', @click='login') 登录

        p.remark 此页面为登录测试页面, 默认账号是 keydone, 密码是 keydone666, 未登录时直接访问 <router-link to='/logined'>登录成功页面</router-link> 会返回到此登录页面, 使用账号登录成功后会跳转到首页, 欢迎体验~
        //
</template>

<style lang='scss'>
    .html{
        height: auto;
        width: inherit;
        .body{
            overflow:hidden;
            width: 10rem;
            height: 10px;
        }
    }
</style>

<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from '~modules/login'

    export default {
        data () {
            return {
                user:{
                    account:'',
                    password:''
                },
                wrongUser:false,
                wrongPassword:false
            }
        },
        components: {
            
        },
        mounted(){
            this.$nextTick(()=>{
                const userSessionId=this.$cookie.get('sessionId');
                if (userSessionId) {
                    //已登录
                    this.$router.replace({'path':'/'})
                }
            });
        },
        methods: {
            ...mapActions(['saveSession']),
            blur(type){
                if(type=='user'){
                    if(this.user.account!='keydone'){
                        this.wrongUser=true;
                    }else{
                        this.wrongUser=false;
                    }
                }else{
                    if(this.user.password!='keydone666'){
                        this.wrongPassword=true;
                    }else{
                        this.wrongPassword=false;
                    }
                }
            },
            login(){
                if(this.user.account!='keydone'){
                    this.wrongUser=true;
                }else if(this.user.password!='keydone666'){
                    this.wrongPassword=true;
                }else{
                    this.saveSession({id: this.user.account});
                    this.$router.push({path:'logined'});
                }
            }
        }
    }
</script>
