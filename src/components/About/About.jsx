import React from 'react'
import './About.css'
import theme_pattrern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattrern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am an experienced Frontend Developer
                        </p>
                        <p>
                            My passion for frontend development is not only refflected in my project
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
