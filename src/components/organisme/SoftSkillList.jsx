import {useState} from 'react';
import SoftSkillDiv from '../molecules/SoftSkillDiv';

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


export default function SoftSkillList() {
    return (
      <div className="soft_skills__list">
          {soft_skills.map((soft_skill, index) => (
              <SoftSkillDiv key={index} name={soft_skill.name}/>
          ))}
      </div>
    )
}