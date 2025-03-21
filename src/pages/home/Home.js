import React from 'react';
import './Home.css'
// import Typewriter from 'typewriter-effect'
import resume from './Adam_Harms_Cover_Letter_Resume.pdf'

const Home = () => {

    // const iAmMessages = ['a problem solver', 'a web developer', 'a father', 'a husband']
    return (
        <div  className='home'>
            {/*todo map over list and insert them in the paragraph below*/}
            {/* <h1 className='iamText'>My Name is Adam Harms and I am <span className='iamMessages'><Typewriter
              options={{
                strings: ['a problem solver.', 'a web developer.', 'a lifelong learner.', 'a father.', 'a husband.'],
                autoStart: true,
                loop: true,
              }}/>
            </span>
            </h1> */}

            <p className='quotes'>"Programming isn't about what you know; it's about what you can figure out.” <em> - Chris Pine</em></p>
            <hr/>
        <div className="intro">
            <div className="wrap">
                    <h2>About me</h2>
                <div className="aboutMe">
                    <div className="left">
                        {/* <div className='details'> 
                            <h3 className='resume'><a href={resume} target='new'>Resume</a></h3>
                            </div> */}
                    </div>
                    <div className="about-me-texts">
                        <p>I am a professional web developer who thrives on being challenged every day. I currently work as a developer for Active Interest Media, where I operate as a full-stack developer using Python, Django, AWS, JavaScript, and many other technologies.
                        </p>
                       <p> My journey into programming began while working in my previous role, where I had to manually compare multiple Excel sheets to track orders. The process was repetitive and time-consuming, making it a perfect candidate for automation with Python. I took the initiative to teach myself Python, leveraging an Excel library to automate the workflow. To make the tool user-friendly, I built a UI using Tkinter and packaged it for my colleagues, drastically improving efficiency. This experience became the catalyst for my career in programming.
                       </p>
                        <p>
                          As I continue to refine my skills, I incorporate AI-driven development tools such as GitHub Copilot and Cursor AI to enhance my workflow. These technologies allow me to write cleaner code faster, troubleshoot issues efficiently, and stay at the forefront of modern development practices. By leveraging AI to assist in coding, debugging, and problem-solving, I maximize productivity while continuously improving my craft.
                        </p>
                        <p>
                           My passion for programming has only grown, and I am grateful for the decision to pursue this career. I look forward to the future, where I can continually challenge myself, innovate, and excel in everything I do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Home;