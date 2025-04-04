document.querySelector("img").addEventListener("click", function (){
    if (this.src === "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png") {
        this.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
      } else {
        this.src = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
      }
})