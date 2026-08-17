import {useState} from 'react'
import Navbar from '../organisme/Navbar'
import ExpienceContainer from '../molecules/ExperianceContainer'
import './About.css'
import ExpertiseSectionContent from '../organisme/ExpertiseSectionContent'
import ExpertiseCategoriesContainer from '../organisme/ExpertiseCategoriesContainer'
import LanguageGrid from '../organisme/LanguageGrid'
import SoftSkillList from '../organisme/SoftSkillList'
import InterestDiv from '../organisme/InterestDiv'



export default function About({...props}) {
    return (
        <div className='About_container'>
            <div className="about_background">
                <div className="gradiant_screen"></div>
                <img className='about_background__image' src='src/assets/images/Property 1=Default.png' alt="" />
            </div>
            <Navbar activate_page={props.activate_page} active_page_name="About"/>
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
                    <h2>Formation</h2>
                    <div className='education__section_content'>
                      <h4>2023</h4>
                      <h3>DCS in Multimedia Integration</h3>
                      <p>Maisonneuve College</p>
                    </div>
                </div>
                <div className="experiences__section">
                    <h2>Experiences</h2>
                    <ExpertiseSectionContent />
                </div>
                <div className="expertise__section">
                    <h2>Expertise</h2>
                    <ExpertiseCategoriesContainer />
                </div>
                <div className="language__section">
                    <h2>Language</h2>
                    <LanguageGrid />
                </div>
                <div className="soft_skills__section">
                    <h2>Soft Skills</h2>
                    <SoftSkillList />
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
