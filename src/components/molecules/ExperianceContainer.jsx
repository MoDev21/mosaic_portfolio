import {useState} from 'react'

export default function ExpienceContainer({position_name, workplace_name, description, duration_start, duration_end}) {
    return (
        <div className="expience_container">
            <div className="experience_length">
                <div className="start_year">{duration_start}</div>
                -
                <div className="end_year">{duration_end}</div>
            </div>
            <div className="experience_info_container">
                <h3>{position_name}</h3>
                <p className='experience_info_container__workplace_name'>{workplace_name}</p>
                <p className='experience_info_container__paragraph'>{description}</p>
            </div>
        </div>
    )
}