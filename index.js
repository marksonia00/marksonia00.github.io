$("#cb1").mouseover(function(){$("body").css("background-color","red");})
$("#cb2").mouseover(function(){$("body").css("background-color","yellow");})
$("#cb3").mouseover(function(){$("body").css("background-color","green");})
$(".container_block").mouseleave(function(){$("body").css("background-color","black");})

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