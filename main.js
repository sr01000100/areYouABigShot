const button=document.getElementById("button")
let image=document.getElementById("image")
let sound=new Audio("bigshot.mp3")

button.addEventListener("click",function(){

    var num=Math.floor(Math.random()*101)
    //document.getElementById("numb").innerHTML=num
    //var num=69
    console.log(num);
    if(num==5||num==13||num==21||num==67||num==69){
        document.getElementById("resp").innerHTML="Yes"
        image.removeAttribute("hidden")
        sound.currentTime=0;
        sound.play();
        window.alert("[BIG SHOT]");
        button.disabled=true;
    }else{
        document.getElementById("resp").innerHTML="No"
        image.setAttribute("hidden","hidden")
        sound.pause();
        sound.currentTime=0;
    }


    
});

sound.onended=function(){
    button.disabled=false;
    image.setAttribute("hidden","hidden")
    document.getElementById("resp").innerHTML="No more [BIG SHOT]"
    sound.pause();
    sound.currentTime=0;
}