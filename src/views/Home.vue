<template>
    <div class="lg:pt-28 pt-5 lg:px-24 px-0 home">
    <div class="space-y-8">
        <h1 class="text-2xl lg:text-5xl"> Hi I'm <span class="name">Achu-ulim Agbama...</span></h1>
        <div class="typewriter">
            <p class="text2xl lg:text-5xl"><span class="typed-text"></span><span class="cursor blink">&nbsp;</span></p>
        </div>
        <div id="text"></div>
    <p>I'm a Software Developer providing exceptional web experiences to clients around the world. Currently, I'm focused on building web apps, mobile applications and writing articles.</p>
    <div class="my-6">
        <p>Check My Skills on <a href="https://github.com/Achufam24">Github</a> and <a href="https://medium.com/@achuulimagbama">Medium</a></p>
    </div>
    </div>
    <div class="lg:py-6 lg:flex lg:flex-row lg:space-x-8 mt-9 hidden">
        <div class="icon">
            <a href="https://www.linkedin.com/in/achu-agbama/"><i class="bi bi-linkedin"></i></a>
        </div>
        <div class="icon">
            <a href="https://github.com/Achufam24"><i class="bi bi-github"></i></a>
        </div>
        <div class="icon">
            <a href="https://twitter.com/agbama_achu"><i class="bi bi-twitter"></i></a>
        </div>
        <div class="icon">
            <a href="https://medium.com/@achuulimagbama"><i class="bi bi-medium"></i></a>
        </div>
        <div class="icon">
            <a href="https://www.instagram.com/achuulim/"><i class="bi bi-instagram"></i></a>
        </div>
    </div>
    <!--Mobile-->
    <div class="flex flex-row space-x-4 py-6 mt-4 lg:hidden">
        <div class="icon">
            <a href="https://www.linkedin.com/in/achu-agbama/"><i class="bi bi-linkedin"></i></a>
        </div>
        <div class="icon">
            <a href="https://github.com/Achufam24"><i class="bi bi-github"></i></a>
        </div>
    </div>
    <div class="flex flex-row space-x-4 lg:hidden">
        <div class="icon">
            <a href="https://twitter.com/agbama_achu"><i class="bi bi-twitter"></i></a>
        </div>
        <div class="icon">
            <a href="https://medium.com/@achuulimagbama"><i class="bi bi-medium"></i></a>
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
/* @media only screen and (max-width: 600px) {
  .home{
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  }
} */
</style>