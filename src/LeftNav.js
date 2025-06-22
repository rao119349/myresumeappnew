import React from 'react';
import profilePic from './assets/images/Profile.jpg';
import data from './data/data.json';
import facebookIcon from './assets/images/facebook.png';
import instagramIcon from './assets/images/instagram.png';
import twitterIcon from './assets/images/twitter.png';
import linkedinIcon from './assets/images/linkedin.png';
import youtubeIcon from './assets/images/youtube.png';
import behanceIcon from './assets/images/behance.png';

const iconMap = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  twitter: twitterIcon,
  linkedin: linkedinIcon,
  youtube: youtubeIcon,
  behance: behanceIcon
};


function LeftNav() {
  return (
    <div className="col-2">
      <div className="left-menu">
        <div className="profile" id="profile">
          <div className="profile-pic d-flex justify-content-center align-items-end">
            <img src={profilePic} alt="profile-pic" height={150} />
          </div>
          <div className="profile-details">
            <h4>{data[0].firstName} {data[0].lastName}</h4>
            <h4>{data[0].role}</h4>
          </div>
          <div className='social'>
            <ul className='social-links'>
              {SocialMedia()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialMedia() {
  return Object.entries(data[0].social).map(([platform, link], index) => (
    <li className={`social-media ${platform}`} key={index}>
      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
        <img src = {iconMap[platform] ?? facebookIcon} alt={platform ?? facebookIcon} />
        {/* {platform.charAt(0).toUpperCase() + " " + platform.slice(1)} */}
      </a>
    </li>
  ));
}

export default LeftNav