const button=document.getElementById("button")
let image=document.getElementById("image")

button.addEventListener("click",function(){

    var num=Math.floor(Math.random()*101)
    //document.getElementById("numb").innerHTML=num
    //var num=69
    if(num==69||num==67){
        document.getElementById("resp").innerHTML="Yes"
        image.removeAttribute("hidden")
    }else{
        document.getElementById("resp").innerHTML="No"
        image.setAttribute("hidden","hidden")
        document.close();
    }


    
});