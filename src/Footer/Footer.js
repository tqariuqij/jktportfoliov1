import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className='footer'>
          <a href='https://github.com/tqariuqij' alt='#'><GitHubIcon className='footer__icon' /></a>
          <a href='https://www.facebook.com/Private-Developers-105880041403684' alt='#'><FacebookIcon className='footer__icon' /> </a>
          <a href="https://www.linkedin.com/in/john-thiong-o-08832aa7" alt='#'><LinkedInIcon className='footer__icon'/></a>
        </div>
    )
}

export default Footer
