//1. 변수 선언
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let m_area = document.querySelector('main');
// gnb클릭시 sub 나오게한다.

for(let i=0; i < gnb.length;i++){
  gnb[i].addEventListener('click',()=>{
    const child = gnb[i].children;
    
    // console.log(gnb[i]);
    //li태그 안에 있는 .sub모두 숨기기
    for(let j=0; j < sub.length;j++){
      sub[j].style.display='none';
    }

    child[1].style.display='block';
    // 제이쿼리 버전 $(this).find('.sub').show();
  });
    
    //제이쿼리 버전 $(this).parent().siblings().find('.sub').hide();
  
}
m_area.addEventListener('click',()=>{
  for(let j=0; j<sub.length;j++){
    sub[j].style.display='none';
  }
});
//gnb메뉴 외 영역을 클릭 시 sub가 숨겨진다.

//메인슬라이드
$(function(){
  //메인 슬라이드 변수
  let m_img = $('#visual_slide div');
  const c_btn = $('#visual_slide .ctrl_btn li');
  let n = c_btn.index();

  //3초마다 반복호출되는 함수 작성
  function fadeInOut(){
    // console.log('내용 반복하기'); //함수 호출 확인하기
    m_img.stop().fadeOut();
    c_btn.removeClass('on');
    if(n==2){
      n=0;
    }else{
      n++;
    }
    c_btn.eq(n).addClass('on');
    m_img.eq(n).stop().fadeIn();
  }

  //시간객체를 사용하여 함수 호출
  let Timer = setInterval(fadeInOut,5000);

  //콘트롤 버튼 오버시 슬라이드 멈추기
  c_btn.hover(function(){
    clearInterval(Timer);
  },function(){
    clearInterval(Timer);
    Timer = setInterval(fadeInOut,5000);
  });
  //콘트롤 버튼 클릭 시 해당 슬라이드 보이게 하기
  c_btn.click(function(){
    n=$(this).index();
    m_img.fadeOut();
    c_btn.removeClass('on');
    m_img.eq(n).fadeIn();
    c_btn.eq(n).addClass('on');
  });
  
  //탑 버튼 스크롤값
  // $(window).scroll(function(){
  //   let sPos = $(this).scrollTop();
  //   console.log(sPos);
  //   let dh = $(document).height();
  //   console.log(dh);
  //   if(dh/2<=sPos){
  //     $('.t_btn').fadeIn();
  //   }else{
  //     $('.t_btn').fadeOut();
  //   }
  // });
  // $('.t_btn').click(function(){
  //   $('html, body').animate({scrollTop:'0px'},500);
  //   return false; 
  //   //a태그요소 #으로 인해 새로고침이 안되게 함.
  // });

  // ajax메서드로 json데이터(상품) 불러오기
  $('.m_box').click(function(){
    $(this).hide(); //더보기는 숨기기
    $.ajax({
      type:'POST',
      url:'./script/product.json',
      dataType:'json',
      success:function(result){
        let t='<ul>';
        $.each(result.product,function(i,e){
          t+="<li><img src='./img/"+e.path+"' alt='"+e.title+"'></li>";
        });
        t+="</ul>";
        //데이터를 t변수에 담아서 list박스에 내용을 출력한다.
        $('#list').html(t);
      }
    });
    return false;
  });
});

//텝 메뉴 서식
//1. 탭 메뉴 첫번째 li태그안에 있는 .cont를 보이게하기
// $('#tab ul li:')
// document.querySelector('').style.display='block';
const tab_list = document.querySelectorAll('.tab_mnu li a');
const con = document.querySelectorAll('#tab > div');
for(let i=0; i<tab_list.length;i++){
  tab_list[i].addEventListener('click',function(e){
    console.log(tab_list[i]);
    e.preventDefault(); //a태그 방지
      for(let j=0; j<con.length;j++){
        console.log(con[j]);
        con[j].style.display='none';
        con[i].style.display='block';
        tab_list[j].classList.remove('on02');
        tab_list[i].classList.add('on02');
      }
  });
}
// 자바스크립트로 윈도우 탑버튼 구현하기
window.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  let ws = window.scrollY;
  if(ws>=2000){
    document.querySelector('.t_btn').style.display='block';
  }else{
    document.querySelector('.t_btn').style.display='none';
  }
});


