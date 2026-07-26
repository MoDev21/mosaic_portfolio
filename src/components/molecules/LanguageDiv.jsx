import { useState } from "react";


export default function LanguageDiv({language, level, percentage, backgroundColor, progressColor}) {
    return (
        <div className={language.toLowerCase()} style={{backgroundColor: backgroundColor}}>
            <div className="language_info">
                <h4>{language}</h4>
                <p>{level}</p>
            </div>
            <div className="language__progress__bar" style={{width: `${percentage}%`, backgroundColor: progressColor}}></div>
        </div>
    )
}

