<template lang="jade">
	#wrapper
		//头部
		headerbar
		
		//中间列表
		articles
		
		//底部
		footerbar
</template>

<script>
	require('sass/header.scss')
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
		}
	}
</script>
