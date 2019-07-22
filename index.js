if($(window).width()>767){
$("#cb1").mouseover(function(){$("body").css("background-image","url(pic/cb1bg.png)");})
$("#cb2").mouseover(function(){$("body").css("background-image","url(pic/cb2bg.png)");})
$("#cb3").mouseover(function(){$("body").css("background-image","url(pic/cb3bg.png)");})
$("#top").mouseover(function(){$("body").css("background-image","url(pic/cb0bg.png)");})
}
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  //AIzaSyDy7niYo3hKVoLoxDPCbZqRZWG_x7jml4k
const app = new Vue({
    el:"#app",
    data:{
        scroll:'',
        wid:'',
        title:'',
        paragraph:'',
        newblock:'',
        blockcontainer:[]
    }
})
app.wid=$(window).width();
const block = Vue.component('block',
    {
        props:['title','paragraph'],
        template: '<div class="block"><h3>{{title}}</h3><p>{{paragraph}}</p></div>'
    }
)
$(function () {
  $(window).scroll(function () {
    app.scroll = $(this).scrollTop()/700-.08;
    if(app.scroll<.99)
    {$("nav").css("background-color", `rgb(112, 107, 107,${app.scroll})`)}
    });
  }
)
console.log("HEY")