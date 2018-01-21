import twitterLogoBlue from '../../assets/images/Twitter_Logo_Blue.svg';
import twitterLogoRed from '../../assets/images/Twitter_Logo_Red.svg';

const twitterLogo = document.querySelector('.twitterLogo');
const twitterFollowBtns = Array.from(document.querySelectorAll('.twitterFollowBtn'));

twitterLogo.src = twitterLogoBlue;
twitterFollowBtns.forEach((btn) => {
  btn.src = twitterLogoRed;
});