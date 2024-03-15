"use strict";
$(document).ready(function () {
  $("div ~ h2").css("color", "red");

  //   $("li").each((index, elem) => {
  //     console.log("=========elem", elem);
  //     if (index === 1) {
  //       elem.css("background-color", "orange");
  //     }
  //   });

  $(":text").addClass("text-decoration").css("color", "green");

//   $("aside").html("<h2>Table of Contents</h2>");
});
