const state={
    area:0,
    type:0,
    cost:0,
    disc:0
}
function sel(atrr,id){
    state[atrr]=id
    fetching()
    changeBt(atrr,id)
}    
function changeBt(atrr,id){
    var TypeArr = document.getElementsByName(atrr)
    TypeArr.forEach(item=>item.className="labeldiv")
    TypeArr[id].className="labeldiv bgr"
    console.log(state)        
}
function reset(){
    state.area=0
    state.type=0
    state.cost=0
    state.disc=0
    console.log(state)        
    init()
    changeBt('area',0)
    changeBt('type',0)
    changeBt('cost',0)
    changeBt('disc',0)
}
function fetching(){
    fetch(`http://localhost:3000/api/${state.area}/${state.type}/${state.cost}/${state.disc}`)
    .then(response=>response.ok?response.json():console.log('Request Failed'))
    .then(resJson=>render(resJson))
}
function init(){
    fetch(`http://localhost:3000/init`)
    .then(response=>response.ok?response.json():console.log('Request Failed'))
    .then(resJson=>render(resJson))
} 
function render(resJson){
    var box = document.getElementById("containbox")
    var preHTML = ''
    var typename = ''
    resJson.forEach(item=>{
        switch(item.type){
            case 1:
                typename='餐館'
                break
            case 2:
                typename='咖啡'
                break
            case 3:
                typename='攤車'
                break
        }
        preHTML+=`<div class="itemblock">
        <img src="../pic/workicon.png" height="166">
        <section><h3>${item.name}</h3>
        <p>${item.city}<br>${typename}<br>價位: ${item.costnum}<br>評論: ${item.discus}</p>
        </section>
        </div>`
    })    
    box.innerHTML=preHTML
}
reset()