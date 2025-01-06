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

//=========================================================커피빈 나타나기
let beanImg=document.getElementsByClassName("bean_img_box")[0];
let beanText=document.getElementsByClassName("bean_txt_box")[0];

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scroll", value);
   
    if(value< 810){
        beanImg.setAttribute("style","left:-45%; opacity:0; transition:all 2s;");
        beanText.setAttribute("style","right:-45%; opacity:0; transition:all 2s;");
        
    }

    else if (value>810){
        beanImg.setAttribute("style","left:20%; opacity:1; transition:all 2s;");
        beanText.setAttribute("style","right:20%; opacity:1; transition:all 2s;");
    } 

  
    
    
});


//=========================================================즐겨찾기 나타나기

let favoTitle=document.getElementsByClassName("favo_title")[0];
let favoText=document.getElementsByClassName("favo_text01")[0];
let favoBtn=document.getElementsByClassName("btn_favo_detail")[0];

window.addEventListener("scroll", function(){
    let value = window.scrollY;

    if (value< 2173){
        favoTitle.setAttribute("style","margin-left:-200px; opacity:0; transition: all 2s;");
        favoText.setAttribute("style","margin-left:-200px; opacity:0; transition: all 2s;");
        favoBtn.setAttribute("style","opacity:0; transition: all 2s;");
    }
    else if(value > 1753){
        favoTitle.setAttribute("style","left:387px; opacity:1; transition: all 2s;");
        favoText.setAttribute("style","left:288px; opacity:1; transition: all 2s;");
        favoBtn.setAttribute("style","opacity:1; transition: all 3s;");
      
    } 
});







};// 이 아래로는 아무것도 적지 않는다.