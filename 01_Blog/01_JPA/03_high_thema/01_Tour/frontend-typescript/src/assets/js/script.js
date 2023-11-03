// scripts.js
import Typed from "typed.js";

export default function initScripts() {
    $(function () {
  var slides = $(".slides"),
    images = slides.find("img");

  images.each(function (i) {
    $(this).attr("data-id", i + 1);
  });

  var typed = new Typed(".typed-words", {
    strings: [
      "San Francisco.",
      " Paris.",
      " New Zealand.",
      " Maui.",
      " London.",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    preStringTyped: (arrayPos, self) => {
      arrayPos++;
      console.log(arrayPos);
      $(".slides img").removeClass("active");
      $('.slides img[data-id="' + arrayPos + '"]').addClass("active");
    },
  });
});
}
