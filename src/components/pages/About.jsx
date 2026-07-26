import {useState} from 'react'
import Navbar from '../organisme/Navbar'
import ExpienceContainer from '../molecules/ExperianceContainer'
import './About.css'
import ExpertiseCategoriesContainer from '../molecules/ExpertiseCategoriesContainer'
import LanguageDiv from '../molecules/LanguageDiv'

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

const expertise_categories = [
    {
        "expertise_category__name": "Programming",
        "expertise_category__list": [
          {
              "list_item__name": "HTML/CSS",
          },
          {
              "list_item__name": "React JS",
          },
          {
              "list_item__name": "JavaScript",
          },
          {
              "list_item__name": "PHP",
          },
          {
              "list_item__name": "Python",
          },
          {
              "list_item__name": "SQL",
          },
          {
              "list_item__name": "C#",
          },
        ]
    },
    {
        "expertise_category__name": "UI/UX designer",
        "expertise_category__list": [
          {
              "list_item__name": "Figma",
          },
          {
              "list_item__name": "Wireframing",
          },
          {
              "list_item__name": "Ideation",
          },
          {
              "list_item__name": "Prototyping",
          },
          {
              "list_item__name": "Affinity Designer",
          },
          
        ]
    },
    {
        "expertise_category__name": "Graphic Design",
        "expertise_category__list": [
            {
                "list_item__name": "Adobe Illustrator",
            },
            {
                "list_item__name": "Affinity Studio",
            },
            {
                "list_item__name": "Sketching",
            },
        ]
  },
  {
      "expertise_category__name": "Game Development",
      "expertise_category__list": [
          {
              "list_item__name": "Godot",
          },
          {
              "list_item__name": "Unity",
          },
          {
              "list_item__name": "Unreal Engine",
          },
      ]
  },
]




const languages = [
    {
        "language": "French",
        "level": "Native Tongue",
        "Percentage": 100,
        "BackgroundColor": "#0026ff50",
        "ProgressColor": "#0026ff70"
    },
    {
        "language": "English",
        "level": "Native Tongue",
        "Percentage": 100,
        "BackgroundColor": "#ffffff50",
        "ProgressColor": "#ffffff70"
    },
    {
        "language": "Spanish",
        "level": "Pending...",
        "Percentage": 10,
        "BackgroundColor": "#db151550",
        "ProgressColor": "#db151570"
    },
]





const soft_skills = [
    {
        "name": "Creativity",
        "image": "",
    },
    {
        "name": "Adaptability",
        "image": "",
    },
    {
        "name": "Fast learning",
        "image": "",
    },
    {
        "name": "Attention to Details",
        "image": "",
    },
    {
        "name": "Intuition",
        "image": "",
    },
]

function SoftSkillDiv({name}) {
    return (
        <div className="soft_skill__div">
            <h4>{name}</h4>
            <img src="" alt="" />
        </div>
    )
}


const interests = [
    {
        "name": "Sports",
        "image": "",
    },
    {
        "name": "Gaming",
        "image": "",
    },
    {
        "name": "Bible",
        "image": "",
    },
    {
        "name": "Tech",
        "image": "",
    },
    {
        "name": "Music",
        "image": "",
    },
]

function InterestDiv({name}) {
    return (
        <div className="interest__div">
            <h4>{name}</h4>
            <img src="" alt="" />
        </div>
    )
}



export default function About({activate_page}) {
    return (
        <div className='About_container'>
            <div className="about_background">
                <div className="gradiant_screen"></div>
                <img className='about_background__image' src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
            </div>
            <Navbar activate_page={activate_page} active_page_name="About"/>
            <header>
                <div className="header_content__container">
                    <h1>About Us</h1>
                    <p>Welcome to our about page!</p>
                </div>
            </header>
            <section>
                <div className="about_me__section">
                    <div className="about_me__section_image">
                        <img src="src/assets/images/4139e2805927715ce5873dc3d84.png" alt="" />
                    </div>
                    <div className="about_me__section_info">
                        <h2>About me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt diam ac turpis tristique, ac sagittis justo tristique. Nullam cursus, 
                            ligula vitae consectetur vulputate, ligula ipsum placerat arcu, ut hendrerit orci augue non purus. 
                            Fusce vel ex euismod, tempor sapien ut, varius nunc. 
                        </p>
                    </div>
                </div>
                <div className="education__section">
                    <h2>Education</h2>
                    <div className='education__section_content'>
                      <h4>2023</h4>
                      <h3>DCS in Multimedia Integration</h3>
                      <p>Maisonneuve College</p>
                    </div>
                </div>
                <div className="experiences__section">
                    <h2>Experiences</h2>
                    {experiences.map((experience, index) => (
                        <ExpienceContainer key={index} position_name={experience.position_name} workplace_name={experience.workplace_name} description={experience.description} duration_start={experience.duration_start} duration_end={experience.duration_end}/>
                    ))}
                </div>
                <div className="expertise__section">
                    <h2>Expertise</h2>
                    <div className="expertise_categories__container">
                        {expertise_categories.map((categorie, index) => (
                            <ExpertiseCategoriesContainer key={index} expertise_category__name={categorie.expertise_category__name} expertise_category__list={categorie.expertise_category__list} />
                        ))}
                    </div>
                </div>
                <div className="language__section">
                    <h2>Language</h2>
                    <div className="language_grid">
                        {languages.map((language, index) => (
                            <
                                LanguageDiv 
                                key={index} 
                                language={language.language} 
                                level={language.level} 
                                percentage={language.Percentage} 
                                backgroundColor={language.BackgroundColor} 
                                progressColor={language.ProgressColor}
                            />
                        ))}
                    </div>
                </div>
                <div className="soft_skills__section">
                    <h2>Soft Skills</h2>
                    <div className="soft_skills__list">
                        {soft_skills.map((soft_skill, index) => (
                            <SoftSkillDiv key={index} name={soft_skill.name}/>
                        ))}
                    </div>
                </div>
                {/* <div className="interest__section">
                     <h2>Interest</h2>
                     <div className="interest__list">
                        {interests.map((interest, index) => (
                            <InterestDiv key={index} name={interest.name}/>
                        ))}
                     </div>
                </div>*/}
            </section>
        </div>
    )
}
