import React from 'react'

export default function PortfolioItem(props) {
    const{project}=props
    return (
        <div><h1>{project.title}</h1>
                    <p>Project Description: {project.description}</p>
                    <p>Depoloyed Link <a target="_blank" rel='noreferrer'href = {project.deployed}>Here</a></p>
                    <p>Github Link <a target="_blank" rel='noreferrer'href = {project.github}>Here</a></p>
                        
                    </div>
    )
}
