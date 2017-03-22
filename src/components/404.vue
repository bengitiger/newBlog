<template lang="jade">
    #notfound
        svg.icon(aria-hidden="true")
            use(xlink:href="#icon-nothing")
        p.missing 糟糕！迷路了！
</template>

<script>
export default {
	data () {
		return {
			msg: '404!'
		}
	}
}
</script>
