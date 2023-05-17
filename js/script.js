var allproducts=document.querySelectorAll(".title h2")
var content=document.querySelector("#selected")
var btn=document.querySelector("#btn-show")
var total=document.querySelector("#total")
var totalprice=0


allproducts.forEach(function(item){
    item.onclick=function(){
        content.innerHTML += item.textContent + "  /  "
        
        if (content.innerHTML !="") {
            btn.style.display="block"
        }
        totalprice +=Number(item.getAttribute("price"))
    }
})


btn.onclick = function(){
    total.innerHTML=totalprice+"  $"
}

