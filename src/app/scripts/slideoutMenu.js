"use strict";
const slideoutWhatshotIcon = document.querySelector("#slideout-menu-icon-whatshot");
const slideoutBookmarkIcon = document.querySelector("#slideout-menu-icon-bookmark");
const slideoutNotificationIcon = document.querySelector("#slideout-menu-icon-notification");

slideoutWhatshotIcon.addEventListener("click", function(){
  this.checked ?  slideIconsToLeft(slideoutBookmarkIcon, slideoutNotificationIcon) : slideIconsToRight(slideoutBookmarkIcon, slideoutNotificationIcon);
});
slideoutBookmarkIcon.addEventListener("click", function(){
  this.checked ?  slideIconsToLeft(slideoutWhatshotIcon, slideoutNotificationIcon) : slideIconsToRight(slideoutWhatshotIcon, slideoutNotificationIcon);
});
slideoutNotificationIcon.addEventListener("click", function(){
  this.checked ?  slideIconsToLeft(slideoutWhatshotIcon, slideoutBookmarkIcon) : slideIconsToRight(slideoutWhatshotIcon, slideoutBookmarkIcon);
});

// Function to slide icons to the left
function slideIconsToLeft(icon1, icon2){
  icon1.setAttribute("disabled", true);
  icon1.nextElementSibling.style.right = "329px";
  icon2.setAttribute("disabled", true);
  icon2.nextElementSibling.style.right = "329px";
}

// Function to slide icons back to the right
function slideIconsToRight(icon1, icon2){
  icon1.removeAttribute("disabled");
  icon1.nextElementSibling.removeAttribute("style");
  icon2.removeAttribute("disabled");
  icon2.nextElementSibling.removeAttribute("style");
}


