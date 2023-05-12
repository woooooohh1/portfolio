//이벤트 슬라이드
const slide = document.querySelector('.e_slide ul');
const s_img = document.querySelectorAll('.e_slide ul li');
const c_btn2 = document.querySelectorAll('.e_slide > div');
let cont = 0;

const img_total = s_img.length; //li 개수
const img_size = -866; //img 크기
slide.style.width = img_size*img_total;


//클릭시 이동
for(let k=0; k<c_btn2.length;k++){
  c_btn2[k].addEventListener('click',function(){
    clearInterval(Timer2);
    console.log(c_btn2[k]);
    for(let l=0; l<c_btn2.length;l++){
      c_btn2[l].classList.remove('ctrl_btn1');
      c_btn2[k].classList.add('ctrl_btn1');
      
    }
    slide.style.marginLeft = img_size*k+'px';
    // slide.style.margin-left='-866px';
  });
}
//클릭시 시간 멈추기
// c_btn2.addEventListener('mouseleave',function(){
//   setInterval(Timer2);
// })

//매시간 마다 반복 호출하여 자동으로 움직이게
function eslide(n){
  slide.style.marginLeft = img_size*n+'px';
  cont = n;
}
let Timer2 = setInterval(function(){
  if(cont<img_total-1){
    eslide(cont+1);
    // c_btn2[cont].classList.add('ctrl_btn');
  }else{
    eslide(0);
  }
},3000);