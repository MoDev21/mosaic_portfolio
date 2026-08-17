import { useState } from 'react';
import LanguageDiv from '../molecules/LanguageDiv';
import './LanguageGrid.css';

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


export default function LanguageGrid() {
  return (
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
  )
}