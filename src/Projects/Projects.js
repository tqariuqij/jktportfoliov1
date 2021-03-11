import React from 'react';
import './Projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Projects = () => {
    return (
        <div className='projects' id='projects' >
            <div className='projects__section'>
                <div className='projects__heading'>
                    <h1>Some Things I have built</h1>
                </div>
                <div className='projects__one'>
                    <div className='projects__image'>
                        <img src='https://res.cloudinary.com/johnte/image/upload/v1615437938/Screenshot_2021-03-11-07-18-03-281_com.android.chrome_rmoan7.jpg'
                             alt=''
                        />
                    </div>
                    <div className='projects__content'>
                        <h1 className='projects__contentHeader'>Featured project</h1>
                        <h3 className='projects__name'>Meme city</h3>
                        <div className='projects__description'>
                        A kind of instagram clone with my own personal touch. Meme city is a place you can go just to get the medicine called laughter because it contains some popular memes.
                        You can also create your own profile and post your own.
                        </div>
                        <ul className='projects__skills'>
                            <li>html</li>
                            <li>css</li>
                            <li>React</li>
                            <li>Firebase database</li>
                        </ul>
                        <div className='projects__links'>
                            <a href='#' alt=''><GitHubIcon /></a>
                            <a href='https://jons-instagram-clone.web.app/' alt=''><ExitToAppIcon /></a>
                        </div>
                    </div>
                </div>
                <div className='projects__two'>
                    <div className='projects__content'>
                    <h1 className='projects__contentHeader'>Featured project</h1>
                        <h3 className='projects__name'>Facebook Clone</h3>
                        <div className='projects__description'>
                        Jons Facebook Clone is a project that I did in order to fully grasp how React.js works
                        and how it usually interacts with the backend and database through its superpowers i.e 
                        the React hooks
                        </div>
                        <ul className='projects__skills'>
                            <li>html</li>
                            <li>css</li>
                            <li>React</li>
                            <li>Firebase database</li>
                        </ul>
                        <div className='projects__links'>
                            <a href='#' alt=''><GitHubIcon /></a>
                            <a href='https://jons-fb-clone.web.app/' alt=''><ExitToAppIcon /></a>
                        </div>
                    </div>
                    <div className='projects__image'>
                        <img src='https://res.cloudinary.com/johnte/image/upload/v1615437947/Screenshot_2021-03-11-07-23-45-752_com.android.chrome_kync45.jpg'
                                alt=''
                            />
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Projects
