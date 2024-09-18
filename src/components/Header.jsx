import React from 'react';
import profile from '../pages/home/profile.jpg'
import './header.css'
import '../App.css'


const Header = () => {
    return (
        <div className='headerContainer'>
            <img className='image' src={profile} alt="Daughter and I"/>
            <div className='headerTextContainer'>

                <div className="headerText pl-15">
                    <h1 className='mt-10 mb-0'>Adam Harms</h1>
                    <h3 className='mt-0 mb-0 '>Web Developer</h3>
                    <a className='resume' href={require("../pages/home/Adam_Harms_Cover_Letter_Resume_2024.pdf")} download="Adam Harms Resume">Download PDF Resume</a>

                </div>
                <div className='rightAligned mr-10'>
                    <div className='ulInfo'>

                        <ul className='headerUl pr-10'>
                            <a href="https://www.linkedin.com/in/adam-harms/" target='new'><li id='linkedin' className='fs-5 mt-20'>
                            https://www.linkedin.com/in/adam-harms/</li></a>
                            <a href="https://github.com/HarmsA" target='new'><li id='github' className='fs-5 mt-10'>https://github.com/HarmsA</li></a>
                        </ul>
                        <p className='mt-40'>harms2a@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;