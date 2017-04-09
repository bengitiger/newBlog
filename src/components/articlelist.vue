<template lang="jade">
    article#articleList
        ul.articles(v-if='articles.length>0')
            li(v-for='(item, index) in articles')
                h2.title(:data-id="index")
                    span.number
                    svg.icon(:class="'icon-' + item.tag", aria-hidden="true")
                        use(:xlink:href="'#icon-' + item.tag")
                    //i.iconfont(:class="'icon-' + item.tag")
                    router-link(:to="'/article/' + item.url", target='_blank') {{item.title}}
                small.about In <em class='mark classes'>{{item.classes}}</em> on <em class='mark date'>{{item.date}}</em> by {{item.author}}
                .summary(v-if='item.src')
                    .summaryTxt {{item.summary}}
                    .img
                        img(:src="imgPath + item.src + '.jpg'")
                .summary(v-else) {{item.summary}}
                p.articleFoot
                    router-link(:to="'/article/' + item.url", target='_blank') 阅读全文

</template>

<script>
    const configs=require('~config/config');
    export default {
        data(){
            return{
                imgPath : configs.imgPath,
                articles:[
                    {tag:'html', url:'html', title:'html', classes:'日常', date:'20170318', author:'keydone', summary:'昨天有个以前的前端同事问我个问题，她说，有个效果写完了，但是调了大半天老是有个bug，就找我瞧瞧。问题描述：图上有个+按钮，功能是点击+就会在前面自动追加上传图像按钮，而每次追加完节点就会自动变成第2张图的样纸。好诡异~', src:'001'},
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
                    {tag:'lock', url:'lock', title:'lock'},
                    {tag:'file', url:'file', title:'file'},
                    {tag:'engine', url:'engine', title:'engine'},
                    {tag:'database', url:'database', title:'database'},
                    {tag:'share', url:'share', title:'share'},
                    {tag:'download', url:'download', title:'download'},
                    {tag:'tools', url:'tools', title:'tools'},
                    {tag:'uc', url:'uc', title:'uc'},
                    {tag:'navigation', url:'navigation', title:'navigation'},
                    {tag:'wx', url:'wx', title:'wx'},
                    {tag:'userid', url:'userid', title:'userid'},
                    {tag:'reply', url:'reply', title:'reply'},
                    {tag:'top', url:'top', title:'top'},
                    {tag:'links', url:'links', title:'links'},
                    {tag:'media', url:'media', title:'media'},
                    {tag:'chart', url:'chart', title:'chart'},
                    {tag:'time', url:'time', title:'time'},
                    {tag:'timeline', url:'timeline', title:'timeline'},
                    {tag:'ok', url:'ok', title:'ok'},
                    {tag:'return', url:'return', title:'return'},
                    {tag:'http', url:'http', title:'http'},
                    {tag:'star', url:'star', title:'star'},
                    {tag:'stars', url:'stars', title:'stars'},
                    {tag:'sougou', url:'sougou', title:'sougou'},
                    {tag:'locked', url:'locked', title:'locked'},
                    {tag:'block', url:'block', title:'block'},
                    {tag:'warning', url:'warning', title:'warning'},
                    {tag:'code', url:'code', title:'code'},
                    {tag:'codes', url:'codes', title:'codes'},
                    {tag:'svg', url:'svg', title:'svg'},
                    {tag:'waterfall', url:'waterfall', title:'waterfall'},
                    {tag:'pay', url:'pay', title:'pay'},
                    {tag:'svg', url:'svg', title:'svg'},
                    {tag:'game', url:'game', title:'svg'},
                    {tag:'search', url:'search', title:'svg'},
                    {tag:'layout', url:'layout', title:'svg'},
                    {tag:'multiple', url:'multiple', title:'svg'},
                    {tag:'menu', url:'menu', title:'svg'},
                    {tag:'donate', url:'donate', title:'svg'},
                    {tag:'apple', url:'apple', title:'svg'},
                    {tag:'QQ', url:'apple', title:'svg'},
                    {tag:'alipay', url:'apple', title:'svg'},
                    {tag:'microsoft', url:'apple', title:'svg'},
                    {tag:'index', url:'apple', title:'svg'},
                    {tag:'userid', url:'apple', title:'svg'},
                    {tag:'vue', url:'apple', title:'svg'},
                    {tag:'vuejs', url:'apple', title:'svg'},
                    {tag:'nothing', url:'apple', title:'svg'},
                    {tag:'svg', url:'apple', title:'svg'},
                    {tag:'warning', url:'warning', title:'warning'},
                    {tag:'location', url:'location', title:'location'}
                ]
            }
        },
        mounted () {
            this.$nextTick(()=>{
                
            })
        }
    }
</script>