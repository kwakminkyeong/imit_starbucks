window.onload=function(){
//메뉴
let menu=document.getElementsByClassName("main_menu");
let subMenu=document.getElementsByClassName("sub_wrap");
let backcolor=document.getElementsByClassName("mouseover");
let fontA=document.getElementsByClassName("fontA");

for(let i=0; i< menu.length; i++ ){
    menu[i].addEventListener("mouseover", function(){
       backcolor[i].setAttribute("style","display:block;");
       subMenu[i].setAttribute("style","display:block;");
       fontA[i].setAttribute("style","color:#669900;");
    });

    menu[i].addEventListener("mouseout", function(){
        backcolor[i].setAttribute("style","display:none;");
        subMenu[i].setAttribute("style","display:none;");
        fontA[i].removeAttribute("style");
     });
 
    //  for(let j=0; j< subMenu.length; j++ ){
    //     subMenu[j].addEventListener("mouseover", function(){
    //        backcolor[j].setAttribute("style","display:block;");
    //        subMenu[j].setAttribute("style","display:block;");
    //        fontA[j].setAttribute("style", "color:#669900;");
    //     });
    
    //     subMenu[j].addEventListener("mouseout", function(){
    //         backcolor[j].setAttribute("style","display:none;");
    //         subMenu[j].setAttribute("style","display:none;");
    //         fontA[j].setAttribute("style");
    //      });

}


};// 이 아래로는 아무것도 적지 않는다.