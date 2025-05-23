import React from 'react'
import profile_img from '../../assets/profile_img.svg';
import './Hero.css';
const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1>
                <span>I'm Viet</span>, front end developer based in Viet Nam
            </h1>
            <p>
                I am a front end developer from Vinh Phuc, VN with 1 years of experienced
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">
                    My resume
                </div>
            </div>
        </div>
    )
}

export default Hero
