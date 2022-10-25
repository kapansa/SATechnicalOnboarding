'use strict';

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){

      const theme = document.querySelector(".btn-Layer");
      theme.classList.toggle("dark_layer");
      theme.classList.toggle("dark-theme");

      if (btn.textContent == "Dark theme"){
            btn.textContent = "Light theme";
      } else {
            btn.textContent = "Dark theme";
      }
});