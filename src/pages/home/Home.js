import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect'
import profile from './profile1.jpg'
import resume from './Adam_Harms_Cover_Letter_Resume.pdf'

const Home = () => {

    // const iAmMessages = ['a problem solver', 'a web developer', 'a father', 'a husband']
    return (
        <div  className='home'>

            {/*todo map over list and insert them in the paragraph below*/}
            <h1 className='iamText'>My Name is Adam Harms and I am <span className='iamMessages'><Typewriter
              options={{
                strings: ['a problem solver.', 'a web developer.', 'a lifelong learner.', 'a father.', 'a husband.'],
                autoStart: true,
                loop: true,
              }}/>
            </span>
            </h1>
            <p className='quotes'>"Programming isn't about what you know; it's about what you can figure out.” <em> - Chris Pine</em></p>
            <hr/>
        <div className="intro">
            <div className="wrap">
                    <h2>About me</h2>
                <div className="aboutMe">
                    <div className="left">
                        <img className='block' src={profile} alt="Daughter and I"/>
                        <div className='details'>
                            <p>Name: Adam Harms</p>
                            <p>Age: 42</p>
                            <p>Location: Grimes Iowa</p>
                            <p>Work Location: Remote</p>
                            <h3 className='repository'>Code repository: </h3><a href="https://github.com/HarmsA" target='new'>Github</a>
                            <h3 className='resume'><a href={resume} target='new'>Resume</a></h3>
                        </div>
                    </div>
                    <div className="about-me-texts">
                        <p>I am a professional web developer where I am excited at the prospect of being challenged every day.
                            I work as a developer for Active Interest Media. I am a full stack
                            developer working with Python, Django, AWS, Javascript along with many other systems.
                        </p>
                       <p> I started teaching myself programming while I was in my previous position. In that job, I was
                           comparing multiple excel sheets for orders in my area. I first needed to getting the
                           devices that were delivering that day. Then I needed the order number.  That number was
                           compared with a different Excel sheet for an install date.  Then I needed to compare that to
                           another Excel sheet for customers who purchased training in addition to their order.
                           This was a perfect job for Python.
                       </p>
                        <p>
                           I had always been interested in programming but never pursued it as a career. Using Python to
                            create a program for my company became the catalyst to start.
                          I studied Python and used an Excel library to get my code working.  I packaged it using Python's
                            built ini library, Tkinter for the UI.  Once it was complete, I shared the program with
                            colleagues for their use as well.
                        </p>
                        <p>
                           This began a love for programming and  I have been grateful for the time commitment and the
                            decision to move forward in this career path. I look forward to the future where I can
                            continually challenge myself and excel in all that I do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;