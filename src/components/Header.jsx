import React,  {useRef}from 'react';
import profile from '../pages/home/profileSmall.jpg'
import './header.css'
import '../App.css'


// const email =       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="48"
//         height="48"
//         fill="currentColor"
//         class="bi bi-google"
//         viewBox="0 0 16 16"
//       >
//         <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
//       </svg>
const Header = () => {
    const ref = useRef(null)


    const handleClick = () => {
        ref.current.focus();
      };
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
                            <a href="https://www.linkedin.com/in/adam-harms/" target='new'>
                                <li id='linkedin' className='fs-5'>
                                    https://www.linkedin.com/in/adam-harms/
                                </li>
                            </a>
                            <a href="https://github.com/HarmsA" target='new'>
                                <li id='github' className='fs-5'>https://github.com/HarmsA</li>
                            </a>
                            <a href="#emailForm">
                                <li id='emailIcon' className="fs-5 emailIcon" onClick={handleClick}>
                                    <span>harms2a@gmail.com</span>
                                </li>
                            </a>
                        </ul>
                        {/* <p className='mt-40'>harms2a@gmail.com</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;