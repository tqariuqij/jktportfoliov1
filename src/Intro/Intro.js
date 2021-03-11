import React from 'react';
import './Intro.css';
import {
    Link
  } from "react-scroll";

const Intro = () => {
    return (
            <div className='intro'>
                <div className='intro__section'>
                    <div className='intro__hi'>
                        <h1>Hi, my name is</h1>
                    </div>
                    <div className='intro__heading'>
                        <h1>
                            John K Thiong'o
                        </h1>
                    </div>
                    <div className='intro__heading'>
                        <h2>
                            I build things for the web
                        </h2>
                    </div>
                    <div className='intro__paragraph'><p>
                        I am a software developer based in Nairobi, Kenya who loves coding and 
                        building things for the web and anything in between.    
                    </p></div>
                    <div className="intro__button">
                        <Link
                            activeClass="active"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <h1>Contacts</h1>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Intro
