import React from 'react'


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


export default function InterestDiv({name}) {
    return (
        <div className="interest__div">
            <h4>{name}</h4>
            <img src="" alt="" />
        </div>
    )
}
