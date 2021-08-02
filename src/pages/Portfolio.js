import React from 'react'

export default function Portfolio() {
const projectARR = [
    {
        title:'DonutApp', 
        github: 'github link', 
        deployed: 'deployed link',
        description: 'Find a donut nearby'
    },
    {
        title:'PasswordGenerator', 
        github: 'github link', 
        deployed: 'deployed link',
        description: 'password generator'
    },
]
    return (
        <div>
            Portfolio
            {projectARR.map(project => {
                return (
                    <div>
                        {project.title}
                        {project.description}
                    </div>
                )

            })}
        </div>
    )
}
