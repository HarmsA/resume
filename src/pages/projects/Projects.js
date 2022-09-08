import React from 'react';
import homeschool from '../../components/naunahomeschool.png'
import './Projects.css'
import NaunaHomeSchoolCard from "../../components/NaunaHomeSchoolCard";
import WritersDigestConferenceCard from "../../components/WritersDigestConferenceCard";
import BillsCard from "../../components/BillsCard";


const Projects = () => {
    return (
       <div className='projectContainer'>
           <h2>Project I have built</h2>
           <p className='quotes'>"The only way to learn a new programming language is by writing programs in it."<em> - Dennis Ritchie</em></p>

           <div className='projectCardContainer'>
               <NaunaHomeSchoolCard/>
               <WritersDigestConferenceCard/>
               <BillsCard />
           </div>
       </div>
  );
}

export default Projects;