<template lang="jade">
	#wrapper
		p(style='text-align:center;line-height:40px;border-bottom:1px solid #e7e7e7;') 旧版博客请访问: &emsp;<em style='color:#42b983'>https://</em>keydone.github.io/blog/backup
		//头部
		headerbar
		
		transition(:name='transitionName')
			router-view
		
		//底部
		footerbar
</template>

<script>
	require('sass/base.scss')
	import store from 'store'
	import headerbar from 'components/header.vue'
	import footerbar from 'components/footer.vue'
	export default {
		data(){
			return {
				transitionName:'fade'
			}
		},
		components: {
			headerbar,
			footerbar
		},
		watch: {
			/*'$route' (to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			}*/
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
