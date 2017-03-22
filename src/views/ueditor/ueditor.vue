<template lang='jade'>
    VueUEditor(@ready='editorReady', :ueditorConfig='ueditorConfig')
</template>

<script>
    import VueUEditor from '~components/UEditor';
    export default {
        name:'ueditor',
        data(){
            return {
                ueditorConfig:{
                    zIndex : 1,
                    serverUrl:'',
                    initialFrameWidth : 1080,
                    initialFrameHeight : 1000,
                    toolbars: [
                        ['fullscreen', 'source', '|', 'undo', 'redo', '|',
                            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|', 'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|', 'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|','touppercase', 'tolowercase', '|', 'link', 'unlink', 'anchor', '|', 'simpleupload', 'insertimage', 'emotion', 'music', 'attachment', 'map', 'insertcode', 'pagebreak', 'template', 'background', '|', 'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|', 'inserttable', 'deletetable', '|', 'preview', 'searchreplace']
                    ],
                    initialContent:'欢迎使用 ueditor!',
                    wordCount:false
                }
            }
        },
        components: {
            VueUEditor
        },
        mounted () {
          this.$nextTick(()=>{
              
          })
        },
        methods: {
            editorReady(editorInstance){
                editorInstance.setContent('hello world!');
                editorInstance.addListener('contentChange', ()=>{
                    console.log('changing...');
                })
            }
        }
    }
    
</script>