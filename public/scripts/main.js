"use strict";$(document).ready(function(){$(".quote-list").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left quote-angle' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right quote-angle' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]}),$(".header-toggle").click(function(){for(var e=$(".header-menu").attr("class").split(/\s+/),t=0;t<e.length;t++)if("is-expand"==e[t])return console.log("doo"),void $(".header-menu").removeClass("is-expand");$(".header-menu").addClass("is-expand")})});var menuHeader=document.querySelector(".header-menu"),classList2=$(".header-menu").attr("class").split(/\s+/),wedoList=(window.addEventListener("click",function(e){(menuHeader.contains(e.target)||e.target.matches(".header-toggle"))&&!classList2.includes("is-expand")||$(".header-menu").removeClass("is-expand")}),document.querySelectorAll(".wedo-item-header"));wedoList.forEach(function(e){return e.addEventListener("click",function(e){e.target.classList.contains("is-expand")?e.target.classList.remove("is-expand"):(wedoList.forEach(function(e){return e.classList.remove("is-expand")}),e.target.classList.add("is-expand"))},!0)});