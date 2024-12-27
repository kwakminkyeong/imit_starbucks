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
        // 클래스 이름 목록 정의
        const classNames = [
            "main_visual_slogan",
            "set_01",
            "set_02",
            "set_03",
            "set_04",
            "set_05",
            "slogan_btn"
        ];
        
            // 각 클래스에 대해 반복
        for (let i = 0; i < classNames.length; i++) {
            const elements = document.getElementsByClassName(classNames[i]);
                if (elements.length > 0) {
                    // 요소의 스타일을 변경
                    setTimeout(() => {
                        elements[0].style.opacity = "1";
                    }, i * 1000); // 각 요소마다 1초 간격
                }
        }
}, 1000);


let beanImg=document.getElementsByClassName(bean_img_box);
let beanText=document.getElementsByClassName(bean_txt_box);

window.addEventListener("scroll",function(){
    let value=window.scrollY;
    
   
    if(value>810){
        beanImg[0].style.animation='bean_disappear 1s ease-out forwards';
        beanTex[0].style.animation='bean_text_disappear 1s ease-out forwards';

    }else{

    }
});










};// 이 아래로는 아무것도 적지 않는다.