<template lang="jade">
	#login
		h2.signTitle 登录账号
		#signBox
			p.explain 请输入账号或邮箱
			.inputBox
				input(type='text', v-model='account')
			p.explain 请输入您的密码
			.inputBox
				input(type='password', v-model='password')
				
			a.signBtn(href='javascript:;') 登录
			
		p.remark 此页面为登录测试页面, 默认账号是 keydone, 密码是 keydone666, 未登录时直接访问 <router-link to='/logined'>登录成功页面</router-link> 会返回到此登录页面, 使用账号登录成功后会跳转到首页, 但登录状态会在刷新页面后丢失, 欢迎体验~ 
	
</template>

<script>
	export default {
		data () {
			return {
				account:'keydone',
				password:'keydone666'
			}
		},
		components: {
			
		},
		vuex:{
			getters:{
				
			},
			actions:{
				
			}
		},
		mounted(){
			this.$nextTick(()=>{
				
			});
		},
		methods: {
			
		}
	}
</script>