window.onload=function(){
//메뉴
let menu=document.getElementsByClassName("main_menu");
let subWarp=document.getElementsByClassName("sub_wrap");
let fontA=document.getElementsByClassName("fontA");
let fontB=document.getElementsByClassName("fontB");


for(let i=0; i< menu.length; i++ ){
    menu[i].addEventListener("mouseover", function(){
       fontA[i].setAttribute("style","color: #669900;");
       subWarp[i].setAttribute("style","display:block;  ");
       this.setAttribute("style","background-color:   #2C2A29;");
      console.log(offsetWidth);
      
    });


    menu[i].addEventListener("mouseout", function(){
        this.removeAttribute("style");
        subWarp[i].setAttribute("style","display:none; transition: transform 3s;");
       
        fontA[i].setAttribute("style","color: #333333; border-bottom:0px;");
    });
  
    
};

for(let i=0; i< fontB.length; i++ ){
    fontB[i].addEventListener("mouseover", function(){
       fontB[i].setAttribute("style","border-bottom:1px solid #cccccc;");
      
    });


    fontB[i].addEventListener("mouseout", function(){
        this.removeAttribute("style");
    });
    
};


//=========================================================음료 나타나기

setInterval(function() {
    let pan01 = document.querySelector(".pan01");  
    let firstChild = pan01.querySelector("div:first-child");

    // 좌측이동 ============================================================좌측으로 부드럽게 이동하기
    pan01.setAttribute("style", "left: -586px; "); 
},2000);













};// 이 아래로는 아무것도 적지 않는다.