$("#cb1").mouseover(function(){$("body").css("background-image","url(pic/cb1bg.png)");})
$("#cb2").mouseover(function(){$("body").css("background-image","url(pic/cb2bg.png)");})
$("#cb3").mouseover(function(){$("body").css("background-image","url(pic/cb3bg.png)");})
$("#top").mouseover(function(){$("body").css("background-image","url(pic/cb0bg.png)");})

const app = new Vue({
    el:"app",
    data:{
        title:'',
        paragraph:'',
        newblock:'',
        blockcontainer:[]
    }
})
const block = Vue.component('block',
    {
        props:['title','paragraph'],
        template: '<div class="block"><h3>{{title}}</h3><p>{{paragraph}}</p></div>'
    }
)