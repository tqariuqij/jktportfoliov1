import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__section'>
                <div className='about__header'>
                    <h1>About Me</h1>
                </div>
                <div className='about__main'>
                    <div className='about__paragraph'>
                        <p>
                        Hello, John here. I am a software developer based in Nairobi, Kenya.</p>
                        <p>I enjoy coding and bringing to life ideas and making them into reality,
                        shaping the web with new and exciting products that are built to enhance ones 
                        experiences while using the internet.</p><p>
                        Currently I am working on some very exciting freelance projects
                        </p><p>Here are some of the few technologies I have been working with
                        </p>
                        <div className="about__paragraphskills">
                            <h3>html&css</h3>
                            <h3>JavaScript</h3>
                            <h3>React.js</h3>
                            <h3>Node.js</h3>
                            <h3>Firebase Backend</h3>
                        </div>
                    </div>
                    <div className='about__pic'>
                        <img
                            alt=''
                            src='https://res.cloudinary.com/johnte/image/upload/v1615448063/profilep_zkj1dr.jpg'
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
