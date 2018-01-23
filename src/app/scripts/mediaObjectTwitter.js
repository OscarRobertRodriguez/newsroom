import twitterLogoBlue from '../../assets/images/Twitter_Logo_Blue.svg';
import twitterLogoRed from '../../assets/images/Twitter_Logo_Red.svg';
import tempUserImg from '../../assets/images/meTest.jpg'

const twitterLogo = document.querySelector('.twitterLogo');
const twitterFollowBtns = Array.from(document.querySelectorAll('.twitterFollowBtn'));

const twitterObjects = Array.from(document.querySelectorAll('.media-object-twitter'));
console.log(twitterObjects);

twitterObjects.forEach((obj) => {
  const userImg = obj.querySelector('.user-img');
  userImg.src = tempUserImg;
});

twitterLogo.src = twitterLogoBlue;
twitterFollowBtns.forEach((btn) => {
  btn.src = twitterLogoRed;
});