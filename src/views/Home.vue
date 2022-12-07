<template>
    <div class="pt-28 lg:px-24 px-8 home">
    <div class="space-y-8">
        <h1 class="text-2xl lg:text-5xl"> Hi I'm <span class="name">Achu-ulim Agbama...</span></h1>
        <div class="typewriter">
            <p class="text2xl lg:text-5xl"><span class="typed-text"></span><span class="cursor blink">&nbsp;</span></p>
        </div>
        <div id="text"></div>
    <p>I'm a Frontend Developer providing exceptional web experiences to clients around the world. Currently, I'm focused on building responsive front-end web apps while learning game development as a hobby.</p>
    </div>
    <div class="py-6 flex flex-row space-x-8">
        <div class="icon">
            <i class="bi bi-linkedin"></i>
        </div>
        <div class="icon">
            <i class="bi bi-github"></i>
        </div>
        <div class="icon">
            <i class="bi bi-twitter"></i>
        </div>
        <div class="icon">
            <i class="bi bi-medium"></i>
        </div>
        <div class="icon">
            <i class="bi bi-instagram"></i>
        </div>
    </div>
    </div>
</template>

<script>
export default{
    mounted(){
        const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["A Web Developer", "A Flutter (Mobile) Developer", "A Poet", "A Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})
    }
}

</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
.name{
    color: #F0EDCC;
}
.home{
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
    text-align: center;
}
h2{
    font-family: 'Redressed', cursive;
    text-align: center;
}
p{
    text-align: center;
}
.icon i{
    color: #F0EDCC;
}
</style>