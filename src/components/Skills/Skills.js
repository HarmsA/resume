import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='skillContainer'>
            <h2>Languages, Frameworks, and Libraries I have used to build websites</h2>
            <ul className='skillsList'>
                <li>Python</li>
                <li>Django</li>
                <li>React.JS</li>
                <li>HTML</li>
            </ul>
            <ul className='skillsList'>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
            </ul>
            <ul className='skillsList'>
                <li>SQL Database</li>
                <li>Amazon Web Service (AWS)</li>
                <li>Firebase</li>
                <li>GIT</li>
            </ul>
        </div>
    );
};

export default Skills;