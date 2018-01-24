"use strict";
const slideoutWhatshotIcon = document.querySelector("#slideout-menu-icon-whatshot");
const slideoutBookmarkIcon = document.querySelector("#slideout-menu-icon-bookmark");
const slideoutNotificationIcon = document.querySelector("#slideout-menu-icon-notification");
const slideoutCloseBtns = document.querySelectorAll(".slideout-menu__btn-close");
const colorWhatshotIcon = `#39c3d9`;
const colorBookmarkIcon = `#7fe8a4`;
const colorNotificationIcon = `#ff9600`;

slideoutWhatshotIcon.addEventListener("click", function(){
  if(this.checked) {
    slideIconsToLeft(this, slideoutBookmarkIcon, colorBookmarkIcon, slideoutNotificationIcon, colorNotificationIcon);
  }
});
slideoutBookmarkIcon.addEventListener("click", function(){
  if(this.checked) {
    slideIconsToLeft(this, slideoutWhatshotIcon, colorWhatshotIcon, slideoutNotificationIcon, colorNotificationIcon);
  }
});
slideoutNotificationIcon.addEventListener("click", function(){
  if(this.checked) {
    slideIconsToLeft(this, slideoutWhatshotIcon, colorWhatshotIcon, slideoutBookmarkIcon, colorBookmarkIcon);
  }
});

slideoutCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", slideoutCloseWindow);
});

// Function to slide icons to the left
function slideIconsToLeft(ele, icon1, icon1Bg, icon2, icon2Bg){
  ele.nextElementSibling.style.cssText = `background: white; border-right: 0px solid white; right: 320px; width: 47px;`;
  ele.nextElementSibling.nextElementSibling.removeAttribute(`style`);
  icon1.nextElementSibling.style.cssText = `background: ${icon1Bg}; color: white; right: 329px; width: 36px;`
  icon2.nextElementSibling.style.cssText = `background: ${icon2Bg}; color: white; right: 329px; width: 36px;`
}

// Function to close the window
function slideoutCloseWindow(){
  const self = this;
  const slideoutCloseBtnParent = self.parentElement;
  slideoutCloseBtnParent.style.right = "-322px";
  slideoutWhatshotIcon.checked = false;
  slideoutBookmarkIcon.nextElementSibling.style.cssText = `right: 0; background: ${colorWhatshotIcon}, color: white `;
  slideoutBookmarkIcon.checked = false;
  slideoutWhatshotIcon.nextElementSibling.style.cssText = `right: 0; background: ${colorBookmarkIcon}, color: white `;
  slideoutNotificationIcon.checked = false;
  slideoutNotificationIcon.nextElementSibling.style.cssText = `right: 0; background: ${colorNotificationIcon}, color: white `;
}
