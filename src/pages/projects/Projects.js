import React from 'react';
// import homeschool from '../../components/Cards/naunahomeschool.png'
import './Projects.css'
import NaunaHomeSchoolCard from "../../components/Cards/NaunaHomeSchoolCard";
// import WritersDigestConferenceCard from "../../components/Cards/WritersDigestConferenceCard";
// import BillsCard from "../../components/Cards/BillsCard";
// import WorkSitesCard from "../../components/Cards/WorkSitesCard";
// import SimpleSites from "../../components/Cards/WorkSitesCard";
import SimpleSites from './../../components/Cards/SimpleSites';
import Emmre from './../../components/Cards/emmre';


const Projects = () => {
    return (
       <div className='projectContainer'>
           <h2>My Projects</h2>
           <p className='quotes'>"The only way to learn a new programming language is by writing programs in it."<em> - Dennis Ritchie</em></p>

           <div className='projectCardContainer'>
               <NaunaHomeSchoolCard/>
               {/*<WritersDigestConferenceCard/>*/}
               {/* <BillsCard /> */}
                <SimpleSites />
                <Emmre />
               {/* <WorkSitesCard/> */}
           </div>
       </div>
  );
}

export default Projects;