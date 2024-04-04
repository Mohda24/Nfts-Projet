// Loading
window.addEventListener("load",()=>{
    const loader = document.querySelector(".loading");
    loader.classList.add("loading-hidden")
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild(loader)
    })

})
// Search box
let mybox=document.querySelector("header .seorch .box")
let myboxInp=document.querySelector("header .seorch .box input")
document.addEventListener("click",function(event){
    if(mybox.contains(event.target)){
        myboxInp.style.width="100px"
    mybox.style.border = '1px solid rgba(231, 231, 231, 0.40)';
    mybox.style.backgroundColor = '#1E1B33';
    }
    else{
        myboxInp.style.width = "0"; // Or set to your desired default width
        mybox.style.border = 'none'; // Or set to your desired default border
        mybox.style.backgroundColor = '#04011C'
        myboxInp.value=""
    }
    
})

// nav bar
function showme(){
    const nav = document.querySelector(".nav-mobile")
    nav.style.display="flex"
}
function dontShowme(){
    const nav = document.querySelector(".nav-mobile")
    nav.style.display="none"
}

