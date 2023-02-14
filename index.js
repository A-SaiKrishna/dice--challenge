var ran1=Math.floor(Math.random()*6)+1;
var ran2 = Math.floor(Math.random() * 6) + 1;
var ans1 ="images/dice"+ran1+".png";
var ans2 = "images/dice" + ran2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",ans1);
document.querySelectorAll("img")[1].setAttribute("src", ans2);
if(ran1==ran2){
    document.querySelectorAll("h1")[0].innerHTML ="✌️ Refresh Me ✌️";
}
else if(ran1>ran2)
{
    document.querySelectorAll("h1")[0].innerHTML = "✌️ Refresh Me ";
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "Refresh Me ✌️";
}