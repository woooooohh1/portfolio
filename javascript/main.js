let words = document.getElementsByClassName('word');
let wordArray = [];
let currentWord = 0;
// words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  let cw = wordArray[currentWord];
  let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = 'letter1 behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter1 out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter1 in';
  }, 340+(i*80));
}

function splitLetters(word) {
  let content = word.innerHTML;
  word.innerHTML = '';
  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('span');
    letter.className = 'letter1';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

// let de =setTimeout(setInterval(changeWord, 2000),15500);
// setInterval(
  //   setTimeout(changeWord,12500)
  //   ,2000
  //   );
  // clearTimeout(de);
  // let timeoutld = setTimeout(function(){
  //   const intervalld = setInterval(changeWord,2000);
  //   setTimeout(function(){
  //     clearInterval(intervalld);
  //   },12500)
  // },12500);
  setTimeout(function() {
    changeWord();
  
    // 2초마다 반복
    setInterval(changeWord, 2000);
  }, 10500)
  // setInterval(changeWord, 2000);
  // changeWord();
  // clearTimeout(changeWord);
  // clearInterval(changeWord);


  const originalImageSrc = './images/mdi_heart-outline.png';
  const alternateImageSrc = './images/mdi_heart.png';
  const clickedImageSrc = './images/mdi_heart.png';

  // myImage.addEventListener('mouseout', resetImage);
  let isLiked = false; // 초기 상태: 좋아요가 되어있지 않음
  
  const toggleLike = () => {
    const likeImage = document.getElementById('myImage');
    
    // 상태를 반전시킴
    isLiked = !isLiked;
    
    // 상태에 따라 이미지를 변경
    if (isLiked) {
      likeImage.src = './images/mdi_heart.png'; // 좋아요 상태일 때의 이미지 경로
      // likeImage.classList.add('liked');
    } else {
      likeImage.src = './images/mdi_heart-outline.png'; // 원래 상태일 때의 이미지 경로
      // likeImage.classList.remove('liked');
    }
  };
  // myImage.addEventListener('mouseover', changeImageOnMouseOver);
  myImage.addEventListener('click', toggleLike);