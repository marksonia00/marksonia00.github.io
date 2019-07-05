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