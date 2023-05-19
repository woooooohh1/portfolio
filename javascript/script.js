// 변수 설정
const animationOptions = {ease: 'expo.inOut'};

const introAnimation = ()=>{
  const tl = gsap.timeline({
    defaults: {
      ease: animationOptions.ease,
      duration:1
    }
  });

  tl.to('.intro_title,.intro_image', {
    duration: 1.5,
    y:0,
    autoAlpha:1,
    delay:0.5
  }).

  to('.intro_left, .intro_right',{
    scaleX:1
  }).
  to('.intro_left, .intro_right',{
    scaleY:0,
    transformOrigin:'top center'
  }).
  to('.intro_title, .intro_image',{
    duration:1.5,
    y:-60,
    autoAlpha:0
  },'-=0.6').
  to('.intro',{
    y:'-100%'
  },'-=0.5');

  return tl;
};

const skewInElements = elements =>{
  const tl = gsap.timeline();

  tl.from(elements, {
    duration:1,
    ease:animationOptions.ease,
    skewY:-5,
    autoAlpha:0,
    y:40
  });
  return tl;
}

const fadeInElements = elements => {
  const tl = gsap.timeline();

  tl.from(elements, {
    duration: 1,
    ease: animationOptions.ease,
    y:'20px',
    autoAlpha:0,
    stagger:0.1
  });

  return tl;
};
const master = gsap.timeline({
  paused: false,
  delay: 0.2 });
  
master.
add(introAnimation());

//커서 효과
// let cursor = document.querySelector('.cursor');
// let cursor2 = document.querySelector('.cursor2');

// document.addEventListener('mousemove',function(e){
//   cursor.style.cssText = cursor2.style.cssText = "left :" + e.clientX + "px; top :" + e.clientY + "px;";
// });

//gnb 메뉴 효과
let list = document.querySelectorAll('.list li a');
list.forEach(link=>{
  let letters = link.textContent.split("");
  link.textContent="";
  letters.forEach((letter,i)=>{
    i+=1;
    let span = document.createElement('span');
    let delay = i/15;

    let letterOut = document.createElement("span");
    letterOut.textContent =letter;
    letterOut.style.transitionDelay=`${delay}s`;
    letterOut.classList.add('out');
    span.append(letterOut);
    
    let letterIn = document.createElement("span");
    letterIn.textContent =letter;
    letterIn.style.transitionDelay=`${delay}s`;
    letterIn.classList.add('in');
    span.append(letterIn);

    link.append(span);
  })
});
//gnb 백그라운드 요소 변경
let gnb = document.querySelector('.gnb');
list[0].addEventListener('mouseenter',()=>{
  gnb.style.backgroundImage="url('../images/about_bg.jpg')"
});
list[1].addEventListener('mouseenter',()=>{
  gnb.style.backgroundImage="url('../images/nav_bg.jpg')"
});
list[2].addEventListener('mouseenter',()=>{
  gnb.style.backgroundImage="url('../images/contact_bg.jpg')"
});


