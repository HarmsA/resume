import React from 'react';
import './Skills.css'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const Skills = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));
    return (
        <div className='skillContainer'>
            <h2>Languages, Frameworks, and Libraries I have used to build websites</h2>
            <div className='skillsListContainer'>
                <ul className='skillsList'>
                    <li><span className='li-title'>Python</span> <BorderLinearProgress variant="determinate" value={65} /></li>
                    <li><span className='li-title'>Django</span> <BorderLinearProgress variant="determinate" value={65} /></li>
                    <li><span className='li-title'>CSS</span> <BorderLinearProgress variant="determinate" value={80} /></li>
                    <li><span className='li-title'>HTML</span> <BorderLinearProgress variant="determinate" value={80} /></li>
                </ul>
                <ul className='skillsList'>
                    <li><span className='li-title'>Bootstrap</span> <BorderLinearProgress variant="determinate" value={80} /></li>
                    <li><span className='li-title'>GIT</span> <BorderLinearProgress variant="determinate" value={80} /></li>
                    <li><span className='li-title'>Material UI</span> <BorderLinearProgress variant="determinate" value={80} /></li>
                    <li><span className='li-title'>JavaScript</span> <BorderLinearProgress variant="determinate" value={50} /></li>
                </ul>
                <ul className='skillsList'>
                    <li><span className='li-title'>ReactJs</span> <BorderLinearProgress variant="determinate" value={50} /></li>
                    <li><span className='li-title'>Amazon Web Service (AWS)</span> <BorderLinearProgress variant="determinate" value={50} /></li>
                    <li><span className='li-title'>Firebase</span> <BorderLinearProgress variant="determinate" value={50} /></li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;