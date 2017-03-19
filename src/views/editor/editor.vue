<template lang='jade'>
    vuehtml5editor(:content="content", :height="500")
</template>

<script>
    import vuehtml5editor from 'vue-html5-editor'
    export default {
        data(){
            return {
                
            }
        },
        components: {
            vuehtml5editor
        }
    }
    
</script>