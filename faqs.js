// // the event handler for the click event
// // of each h2 element
// const toggle = (evt) => {
//   // get the clicked h2
//   const h2Element = evt.currentTarget;
//   // get h2's sibling div
//   const divElement = h2Element.nextElementSibling;
//   h2Element.classList.toggle("minus");
//   divElement.classList.toggle("open");
//   // cancel default action of h2's child <a>
//   evt.preventDefault();
// };

// document.addEventListener("DOMContentLoaded", () => {
//   // get the h2 tags
//   const h2Elements = document.querySelectorAll("#faqs h2");
//   // attach event handler for each h2 tag
//   for (let h2Element of h2Elements) {
//     h2Element.addEventListener("click", toggle);
//   }
//   // set focus on first h2 tag's <a> tag
//   h2Elements[0].firstChild.focus();
// });


"use strict";
$(document).ready(() => {
  // attach event handlers for all h2 tags
  $("#faqs h2").click((evt) => {
    // get clicked h2 tag
    const h2 = evt.currentTarget;
    // toggle minus class for h2 tag
    $(h2).toggleClass("minus");
    // show or hide related div
    if ($(h2).attr("class") !== "minus") {
      $(h2).next().hide();
    } else {
      $(h2).next().show();
    }
    evt.preventDefault();
  });
  // set focus on first h2 tag's <a> tag
  $("#faqs").find("a:first").focus();
});
