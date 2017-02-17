<template lang="jade">
	//中间列表
	#desk
		articles
		#paging
			a.prevPage(hef='javascript:;', @click='prevPage()') 上1页
			a.nextPage(hef='javascript:;', @click='nextPage()') 下1页
</template>

<script>

	import articles from 'components/articlelist.vue'
	export default {
		data () {
			return {
				
			}
		},
		components: {
			articles
		},
		mounted(){
			this.$nextTick(()=>{
				
			});
		},
		methods: {
			
		}
	}
</script>