//커서 효과
// let cursor = document.querySelector('.cursor');
// let cursor2 = document.querySelector('.cursor2');

// document.addEventListener('mousemove',function(e){
//   cursor.style.cssText = cursor2.style.cssText = "left :" + e.clientX + "px; top :" + e.clientY + "px;";
// })

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
})