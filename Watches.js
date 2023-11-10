var btn = document.getElementById("button");
var verify = 0;
btn.addEventListener("click", function(){
    if(verify == 0){
        btn.innerHTML = "&ensp;-&ensp;1&ensp;+&ensp;";
        btn.style.backgroundColor = "red";
        btn.style.padding = "5px";
        btn.style.width = "40%";
        btn.style.borderRadius = "5px";
        verify = 1;
    }
    else{
        btn.innerHTML = " Add to cart";
        btn.style.backgroundColor = "#007FFF";
         verify = 0;
    }
})

