import {useState} from 'react'
import Navbar from '../organisme/Navbar'
import ExpienceContainer from '../molecules/ExperianceContainer'
import './About.css'

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
        "expertise_category__name": "Categorie Name",
        "expertise_category__list": [
            {
                "list_item__name": "Work",
            },
            {
                "list_item__name": "Work",
            },
            {
                "list_item__name": "Work",
            },
        ]
    },
    {
        "expertise_category__name": "Categorie Name",
        "expertise_category__list": [
            {
                "list_item__name": "Work",
            },
            {
                "list_item__name": "Work",
            },
            {
                "list_item__name": "Work",
            },
        ]
    },
    {
        "expertise_category__name": "Categorie Name",
        "expertise_category__list": [
            {
                "list_item__name": "Work",
            },
            {
                "list_item__name": "Work",
            },
            {
                "list_item__name": "Work",
            },
        ]
    },
]

function ExpertiseCategoriesContainer({expertise_category__name, expertise_category__list}) {
    return (
        <div className="expertise_category__container">
            <div className="expertise_category__name">{expertise_category__name}</div>
            <div className="expertise_category__list">
                {expertise_category__list.map((list) => {
                    return (
                        <div className="expertise_category__list_item">{list.list_item__name}</div>
                    )
                })}
                
            </div>
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
                    <h4>2023</h4>
                    <h3>DCS in Multimedia Integration</h3>
                    <p>Maisonneuve College</p>
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
                <div className="language__section"></div>
                <div className="soft_skills__section"></div>
                <div className="interest__section"></div>
            </section>
        </div>
    )
}
