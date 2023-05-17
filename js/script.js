var allproducts=document.querySelectorAll(".title h2")
var content=document.querySelector(".div1")
var btn=document.querySelector("#btn-show")
var total=document.querySelector("#total")
var total1=document.querySelector(".div-total")
var totalprice=0


allproducts.forEach(function(item){
    item.onclick=function(){
        content.innerHTML += item.textContent + "  /  "
        
        if (content.innerHTML !="") {
            btn.style.display="block"
            content.style.opacity="1"
            
        }
        totalprice +=Number(item.getAttribute("price"))
    }
})


btn.onclick = function(){
    total1.style.opacity="1"
    total.innerHTML=totalprice+"  $"
}

