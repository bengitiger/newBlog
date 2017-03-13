<template lang="jade">
	//中间列表
	#desk
		articles
		
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