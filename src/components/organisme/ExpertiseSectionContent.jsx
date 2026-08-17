import React from "react"; 
import ExpienceContainer from "../molecules/ExperianceContainer";


export default function ExpertiseSectionContent() {
  const experiences = [
      {
          "position_name": "Web Integration Intern",
          "workplace_name": "Agence TOPO",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt diam ac turpis tristique, ac sagittis justo tristique. Nullam cursus, ligula vitae consectetur vulputate, ligula ipsum placerat arcu, ut hendrerit orci augue non purus. Fusce vel ex euismod, tempor sapien ut, varius nunc. ",
          "duration_start": "2023",
          "duration_end": "2023",
      },
      {
          "position_name": "Web Integration Intern",
          "workplace_name": "Agence TOPO",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt diam ac turpis tristique, ac sagittis justo tristique. Nullam cursus, ligula vitae consectetur vulputate, ligula ipsum placerat arcu, ut hendrerit orci augue non purus. Fusce vel ex euismod, tempor sapien ut, varius nunc. ",
          "duration_start": "2023",
          "duration_end": "2023",
      },
  
  ]
  
  return (
    <div className="experiences__section_content">
        {experiences.map((experience, index) => (
            <ExpienceContainer key={index} position_name={experience.position_name} workplace_name={experience.workplace_name} description={experience.description} duration_start={experience.duration_start} duration_end={experience.duration_end}/>
        ))}
    </div>
  );
}
