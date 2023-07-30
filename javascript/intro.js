let textWrap = document.querySelector(".intro_text span");
textWrap.innerHTML = textWrap.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".intro_text span .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 500 + 50 * i;
        }
    })
    .add({
        targets: ".intro_text span .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 700 + 50 * i;
        }
    });
TweenMax.to(".intro", 2.2, {
    delay: 6,
    top: "-100%",
    ease: Expo.easeInOut
  });    
TweenMax.from(".logo", 2, {
    delay: 6,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});