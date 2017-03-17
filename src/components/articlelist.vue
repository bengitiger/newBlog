<template lang="jade">
    article#articleList
        ul.articles(v-if='articles.length>0')
            li(v-for='(item, index) in articles')
                span.number {{index+1}}
                router-link(:to="'/blog/article/' + item.url") {{item.title}}
                i.iconfont(:class="'icon-' + item.tag")


</template>

<script>
    export default {
        data(){
            return{
                articles:[
                    {tag:'html', url:'html', title:'html'},
                    {tag:'html5', url:'html5', title:'html5'},
                    {tag:'css', url:'css', title:'css'},
                    {tag:'css3', url:'css3', title:'css3'},
                    {tag:'js', url:'js', title:'js'},
                    {tag:'ts', url:'ts', title:'ts'},
                    {tag:'image', url:'image', title:'image'},
                    {tag:'firefox', url:'firefox', title:'firefox'},
                    {tag:'chrome', url:'chrome', title:'chrome'},
                    {tag:'ie', url:'ie', title:'ie'},
                    {tag:'less', url:'less', title:'less'},
                    {tag:'sass', url:'sass', title:'sass'},
                    {tag:'react', url:'react', title:'react'},
                    {tag:'calendar', url:'calendar', title:'calendar'},
                    {tag:'ui', url:'ui', title:'ui'},
                    {tag:'components', url:'components', title:'components'},
                    {tag:'safari', url:'safari', title:'safari'},
                    {tag:'webpack', url:'webpack', title:'webpack'},
                    {tag:'nodejs', url:'nodejs', title:'nodejs'},
                    {tag:'cache', url:'cache', title:'cache'},
                    {tag:'usb', url:'usb', title:'usb'},
                    {tag:'git', url:'git', title:'git'},
                    {tag:'github', url:'github', title:'github'},
                    {tag:'nodejs', url:'nodejs', title:'nodejs'}
                ]
            }
        }
    }
</script>