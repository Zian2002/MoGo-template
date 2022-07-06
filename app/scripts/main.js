// Slick slider
$(document).ready(function () {
  $(".quote-list").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left quote-angle' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right quote-angle' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".header-toggle").click(function(){
    const classList = $('.header-menu').attr('class').split(/\s+/);
    for (let i = 0; i < classList.length; i++){
        if (classList[i] == "is-expand"){
            console.log("doo");
            $(".header-menu").removeClass("is-expand");
            return; 
        }
    }
    $(".header-menu").addClass("is-expand");
})
});



const menuHeader = document.querySelector(".header-menu");
const classList2 = $('.header-menu').attr('class').split(/\s+/);
window.addEventListener("click", function(e){
    if ((!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) || classList2.includes("is-expand")){
        $(".header-menu").removeClass("is-expand");
    }
})

const wedoList = document.querySelectorAll(".wedo-item-header");
wedoList.forEach((item) =>
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("is-expand")){
      event.target.classList.remove("is-expand");
      return;
    }
    // if (event.target.parentElement.classList.contains("is-expand")){
    //   event.target.parentElement.classList.remove("is-expand");
    //   return;
    // }
    wedoList.forEach((el) => el.classList.remove("is-expand"));
    // wedoList.forEach((el) => el.parentElement.classList.remove("is-expand"));
    event.target.classList.add("is-expand");

    // event.target.parentElement.classList.add("is-expand");
  }, true)
);