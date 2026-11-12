import {useState} from "react"; 
import ExpienceContainer from "../molecules/ExperianceContainer";
import ExpertiseData from '../../data/experience_data.json'

export default function ExpertiseSectionContent() {
  const [experiencesArray, setExperiencesArray] = useState(ExpertiseData)
  const [paragraphs, setParagrphs] = useState('')
  // const [paragraphs, setParagrphs] = useState('')
  // const experiences = [
  //     {
  //         "position_name": "Web Integration Intern",
  //         "workplace_name": "Agence TOPO",
  //         "description": "Objectif : participer à la conception et au développement d'une œuvre d'art numérique pour Michel Huneault (artiste). Rôle au sein du projet : - Évaluer des besoins et attentes du client - Travailler sur les fonctionnalités du site : la génération aléatoire de vidéos lors du chargement ou du défilement du site, la transition manuelle et automatique d'une vidéo à une autre, l'écran pop-up \"À propos\", l'interface utilisateur de la vidéo et les options linguistiques du site. - Concevoir le style du site web à l'aide de CSS. Voici le projet :" ,
  //         "duration_start": "2023",
  //         "duration_end": "2023",
  //     },
  //     {
  //         "position_name": "Web Integration Intern",
  //         "workplace_name": "Agence TOPO",
  //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt diam ac turpis tristique, ac sagittis justo tristique. Nullam cursus, ligula vitae consectetur vulputate, ligula ipsum placerat arcu, ut hendrerit orci augue non purus. Fusce vel ex euismod, tempor sapien ut, varius nunc. ",
  //         "duration_start": "2023",
  //         "duration_end": "2023",
  //     },
  
  // ]
  // experiencesArray.map((experience) => (
  //    (experience[0]?.description ?? "")
  //     .split(/\n\s*\n/)
  //     .map(s => s.trim())
  //     .filter(Boolean))

  // ))

  const checker = () => {
    console.log(experiencesArray)
    setExperiencesArray(experiencesArray)
  }
  
  return (
    <div className="experiences__section_content">
        {ExpertiseData.map((experience, index) => (
          <ExpienceContainer
            key={index}
            checker={checker}
            position_name={experience.position_name}
            workplace_name={experience.workplace_name}
            // description={(experience?.description ?? "")
            //  .split(/\n\s*\n/)
            //  .map(s => s.trim())
            //  .filter(Boolean)}
            description={(experience?.description ?? "")
              .split(/\n\s*\n/)   // blank line = new paragraph
              .map(s => s.trimEnd())
              .filter(Boolean)}
            duration_start={experience.duration_start}
            duration_end={experience.duration_end}
          />
        ))}
    </div>
  );
}
