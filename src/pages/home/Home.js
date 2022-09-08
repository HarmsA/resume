import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect'
import profile from './profile.jpg'

const Home = () => {

    const iAmMessages = ['a problem solver', 'a web developer', 'a father', 'a husband']
    return (
        <div  className='home'>

            {/*todo map over list and insert them in the paragraph below*/}
            <h1 className='iamText'>My Name is Adam Harms and I am <p className='iamMessages'><Typewriter
              options={{
                strings: ['a problem solver.', 'a web developer.', 'a lifelong learner.', 'a father.', 'a husband.'],
                autoStart: true,
                loop: true,
              }}
/></p></h1>
            <p className='quotes'>"Programming isn't about what you know; it's about what you can figure out.” <em> - Chris Pine</em></p>

            <hr/>
        <div className="intro">
            <div className="wrap">
                    <h2>About me</h2>

                <div className="aboutMe">
                    <div className="left">

                        <img className='block' src={profile} alt="Image of me"/>
                        <div className='details'>
                            <p>Name: Adam Harms</p>
                            <p>Age: 42</p>
                            <p>Location: Grimes Iowa</p>
                            <p>Work Location: Remote</p>
                        </div>
                    </div>
                    <p>I am a professional web developer where I am excited at the prospect of being challenged every day.
                        I work as a junior developer for Active Interest Media. Here I am a full stack
                        developer working with python, django, aws, javascript along with many other systems.
                    </p>
                   <p> I started teaching myself programming while I was in my previous position. I was stuck with the
                       tedious prospect of compairing multiple excel sheets for orders in my area, getting that order number
                       then comparing that with a different excel sheet for delivery date, and comparing that to again a different
                       excel sheet.
                       I had always been interested in programming but never pulled the trigger. This was the catalyst.
                       I studied python and used an excel library to get my code working. I then packaged it up using Tkinter
                       and let other people in my role to use the program I built.
                       This started a love for programming and I have never regretted the time commitment or the decision.
                       I look forward to the future where I can continually challenge myself and excel in what I do.
                   </p>


                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;