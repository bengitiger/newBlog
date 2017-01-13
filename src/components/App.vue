<template lang="jade">
	#wrapper
		//头部
		headerbar
		
		.view
			router-view
		
		//中间列表
		#desk
			articles
			#paging
				a.prevPage(hef='javascript:;', @click='prevPage()') 上1页
				a.nextPage(hef='javascript:;', @click='nextPage()') 下1页
		
		//底部
		footerbar
</template>

<script>
	require('sass/base.scss')
	import store from 'Vuex/store'
	import headerbar from 'components/header.vue'
	import articles from 'components/articlelist.vue'
	import footerbar from 'components/footer.vue'
	export default {
		data(){
			return {
				
			}
		},
		components: {
			headerbar,
			articles,
			footerbar
		},
		method:{
			prevPage(){
				console.log(0);
			},
			nextPage(){
				console.log(1);
			}
		}
	}
</script>
