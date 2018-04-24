var switchButton = document.getElementById("switchButton")
var switchTitle = document.getElementById("switchTitle")

switchButton.addEventListener('mousedown',()=>{
    setTimeout(()=>{switchButton.className="active"},0)
    
})
switchButton.addEventListener('mouseup',()=>{
    switchButton.className=""
})

switchButton.addEventListener('click',()=>{
    console.log(switchTitle.className)
    if(switchTitle.className!=="active"){
        switchTitle.className="active"
    }else{
        switchTitle.className=""
    }
})